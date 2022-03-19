import TextField, { TextFieldProps } from './text-field';

type FormProps = {
  title: string,
  submitText: string,
  fieldsProps: TextFieldProps[],
};

class Form {
  private props: FormProps;

  private fields: TextField[];

  // private header: HTMLHeadingElement;

  // private submitBtn: HTMLButtonElement;

  public htmlElement: HTMLFormElement;

  constructor(props: FormProps) {
    this.props = props;
    this.htmlElement = document.createElement('form');
    this.fields = props.fieldsProps.map((fieldProps) => new TextField(fieldProps));

    this.initialize();
  }

  private initialize = (): void => {
    const { title, submitText } = this.props;

    this.htmlElement.className = 'card p-3';
    this.htmlElement.style.width = '400px';
    this.htmlElement.innerHTML = `
      <h2 class="h3">${title}</h2>
      <div class="js-field-container d-flex flex-column gap-2 mb-3"></div>
      <button type="submit" class="btn btn-success mb-2">${submitText}</button>`;

    const fieldsContainer = this.htmlElement.querySelector('.js-field-container');

    fieldsContainer?.append(...this.fields.map((x) => x.htmlElement));
  };
}

export default Form;
