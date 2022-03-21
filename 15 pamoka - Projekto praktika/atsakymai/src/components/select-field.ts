type OptionType = {
  title: string,
  value: string,
};

export type SelectFieldProps = {
  title: string,
  options: OptionType[],
  onChange?: (value: string) => void,
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
    const { options } = this.props;

    const optionsHtmlElements = options.map((option, i) => {
      const element = document.createElement('option');
      element.selected = i === 0;

      if (typeof option === 'string') {
        element.innerHTML = option;
        element.value = option;
      } else {
        element.innerHTML = option.title;
        element.value = option.value;
      }
      return element;
    });

    return optionsHtmlElements;
  };

  private createSelectHtmlElement = (): HTMLSelectElement => {
    const { onChange } = this.props;

    const selectHtmlElement = document.createElement('select');
    selectHtmlElement.className = 'form-select';
    selectHtmlElement.id = `select-${SelectField.uniqId}`;
    if (onChange) {
      selectHtmlElement.addEventListener('change', () => onChange(selectHtmlElement.value));
    }

    const optionsHtmlElements = this.createOptions();
    selectHtmlElement.append(...optionsHtmlElements);

    return selectHtmlElement;
  };

  private initialize = () => {
    const { title } = this.props;
    const selectHtmlElement = this.createSelectHtmlElement();

    this.htmlElement.innerHTML = `<label for="select-${SelectField.uniqId}">${title}</label>`;
    this.htmlElement.className = 'form-group';
    this.htmlElement.append(selectHtmlElement);
  };
}

export default SelectField;
