type OptionType = {
  title: string,
  value: string,
};

export type SelectFieldProps = {
  name?: string,
  labelText: string,
  initialValue?: string,
  onChange?: (newValue: string) => void,
  options: OptionType[],
};

class SelectField {
  private static uniqId = 0;

  public htmlElement: HTMLDivElement;

  private htmlSelectElement: HTMLSelectElement;

  private htmlLabelElement: HTMLLabelElement;

  private props: SelectFieldProps;

  constructor(props: SelectFieldProps) {
    SelectField.uniqId += 1;
    this.htmlElement = document.createElement('div');
    this.htmlSelectElement = document.createElement('select');
    this.htmlLabelElement = document.createElement('label');

    this.props = props;

    this.initialize();
  }

  private updateSelectOptions = (): void => {
    const { options, initialValue } = this.props;

    const optionsHtmlElements = options.map((option, i) => {
      const element = document.createElement('option');
      element.selected = initialValue ? option.value === initialValue : i === 0;
      element.innerHTML = option.title;
      element.value = option.value;

      return element;
    });

    this.htmlSelectElement.innerHTML = '';
    this.htmlSelectElement.append(...optionsHtmlElements);
  };

  private initialize = () => {
    const elementId = `select-${SelectField.uniqId}`;

    this.htmlLabelElement.setAttribute('for', elementId);

    this.htmlSelectElement.className = 'form-select';
    this.htmlSelectElement.id = elementId;

    this.htmlElement.className = 'form-group';
    this.htmlElement.append(
      this.htmlLabelElement,
      this.htmlSelectElement,
    );

    this.updateView();
  };

  private updateView = (): void => {
    const { name, labelText, onChange } = this.props;

    this.htmlLabelElement.innerHTML = labelText;

    if (name) {
      this.htmlSelectElement.name = name;
    }
    if (onChange) {
      this.htmlSelectElement.addEventListener('change', () => onChange(this.htmlSelectElement.value));
    }
    this.updateSelectOptions();
  };

  public updateProps = (newProps: Partial<SelectFieldProps>) => {
    this.props = {
      ...this.props,
      ...newProps,
    };

    this.updateView();
  };

  public getValue = (): string => this.htmlSelectElement.value;
}

export default SelectField;
