import TextField from './text-field';
import SelectField from './select-field';

export type Field = TextField | SelectField;

export type FormProps = {
  title: string,
  submitText: string,
  fields?: Field[],
};

class Form {
  private props: FormProps;

  private fieldsContainer: HTMLDivElement;

  private header: HTMLHeadingElement;

  private submitBtn: HTMLButtonElement;

  public htmlElement: HTMLFormElement;

  constructor(props: FormProps) {
    this.props = props;
    this.htmlElement = document.createElement('form');
    this.fieldsContainer = document.createElement('div');
    this.header = document.createElement('h2');
    this.submitBtn = document.createElement('button');

    this.initialize();
  }

  protected renderFields = () => {
    const { fields } = this.props;

    if (fields === undefined) return;

    this.fieldsContainer.append(...fields.map((x) => x.htmlElement));
  };

  private initialize = (): void => {
    const { title, submitText } = this.props;

    this.header.className = 'h3';
    this.header.innerHTML = title;

    this.fieldsContainer.className = 'd-flex flex-column gap-2 mb-3';

    this.submitBtn.type = 'submit';
    this.submitBtn.className = 'btn btn-success mb-2';
    this.submitBtn.innerText = submitText;

    this.htmlElement.className = 'card p-3';
    this.htmlElement.style.width = '400px';

    this.htmlElement.append(
      this.header,
      this.fieldsContainer,
      this.submitBtn,
    );

    this.renderFields();
  };
}

export default Form;
