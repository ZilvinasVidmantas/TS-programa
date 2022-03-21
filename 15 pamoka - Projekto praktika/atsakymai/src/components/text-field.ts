export type TextFieldProps = {
  name: string,
  labelText: string,
  initialValue: string,
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
    const { name, initialValue } = this.props;

    this.input.id = TextField.id;
    this.input.className = 'form-control';
    this.input.name = name;
    this.input.value = initialValue;
    this.input.type = 'text';
  };

  public initialize = (): void => {
    const { labelText } = this.props;

    this.htmlElement.innerHTML = `<label for="${TextField.id}" class="form-label">${labelText}</label>`;
    this.initializeInput();

    console.log(this.input);

    this.htmlElement.append(this.input);
  };
}

export default TextField;
