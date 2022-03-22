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

  private props: SelectFieldProps;

  constructor(props: SelectFieldProps) {
    SelectField.uniqId += 1;
    this.htmlElement = document.createElement('div');
    this.props = props;

    this.initialize();
  }

  private createOptions = (): HTMLOptionElement[] => {
    const { options, initialValue } = this.props;

    const optionsHtmlElements = options.map((option, i) => {
      const element = document.createElement('option');
      element.selected = initialValue ? option.value === initialValue : i === 0;
      element.innerHTML = option.title;
      element.value = option.value;

      return element;
    });

    return optionsHtmlElements;
  };

  private createSelectHtmlElement = (): HTMLSelectElement => {
    const { name, onChange } = this.props;

    const selectHtmlElement = document.createElement('select');
    selectHtmlElement.className = 'form-select';
    selectHtmlElement.id = `select-${SelectField.uniqId}`;
    if (name) selectHtmlElement.name = name;
    if (onChange) {
      selectHtmlElement.addEventListener('change', () => onChange(selectHtmlElement.value));
    }

    const optionsHtmlElements = this.createOptions();
    selectHtmlElement.append(...optionsHtmlElements);

    return selectHtmlElement;
  };

  private initialize = () => {
    const { labelText } = this.props;
    const selectHtmlElement = this.createSelectHtmlElement();

    this.htmlElement.innerHTML = `<label for="select-${SelectField.uniqId}">${labelText}</label>`;
    this.htmlElement.className = 'form-group';
    this.htmlElement.append(selectHtmlElement);
  };
}

export default SelectField;
