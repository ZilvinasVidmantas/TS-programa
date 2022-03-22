export type TextFieldProps = {
  name: string,
  labelText: string,
  initialValue: string,
  onChange?: (changeData: { name: string, value: string }) => void,
};

class TextField {
  private static instanceCounter = 0;

  private static get id() {
    return `${this.name}-${this.instanceCounter}`;
  }

  private props: TextFieldProps;

  private input: HTMLInputElement;

  public htmlElement: HTMLDivElement;

  public constructor(props: TextFieldProps) {
    TextField.instanceCounter += 1;
    this.props = props;

    this.htmlElement = document.createElement('div');
    this.input = document.createElement('input');

    this.initialize();
  }

  private initializeInput = () => {
    const { name, initialValue, onChange } = this.props;

    this.input.id = TextField.id;
    this.input.className = 'form-control';
    this.input.name = name;
    this.input.value = initialValue;
    this.input.type = 'text';
    if (onChange) {
      this.input.addEventListener('change', () => onChange({
        name,
        value: this.input.value,
      }));
    }
  };

  public initialize = (): void => {
    const { labelText } = this.props;

    this.htmlElement.innerHTML = `<label for="${TextField.id}" class="form-label">${labelText}</label>`;
    this.initializeInput();

    this.htmlElement.append(this.input);
  };
}

export default TextField;
