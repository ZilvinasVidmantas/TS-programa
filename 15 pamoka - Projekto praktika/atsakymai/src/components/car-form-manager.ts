import Form, { FormProps } from './form';
import SelectField from './select-field';
import TextField from './text-field';
import brands from '../data/brands';
import models from '../data/models';

type CarFormManagerFields = {
  brand: SelectField,
  model: SelectField,
  price: TextField,
  year: TextField,
};

type CarFormValues = {
  [Key in keyof CarFormManagerFields]: string
};

export type CarFormManagerProps = Omit<FormProps, 'fields' | 'onSubmit'> & {
  onSubmit: (values: CarFormValues) => void
};

class CarFormManager {
  public htmlElement: HTMLFormElement;

  private props: CarFormManagerProps;

  private selectedBrandId: string;

  private fields: CarFormManagerFields;

  private form: Form;

  constructor(props: CarFormManagerProps) {
    this.props = props;

    this.selectedBrandId = brands[0].id;
    this.fields = {
      price: new TextField({ name: 'price', labelText: 'Kaina', initialValue: '' }),
      year: new TextField({ name: 'yar', labelText: 'Metai', initialValue: '' }),
      brand: new SelectField({
        name: 'brand',
        labelText: 'Markė',
        options: brands.map(({ title, id }) => ({ title, value: id })),
        onChange: this.changeBrand,
      }),
      model: new SelectField({
        name: 'model',
        labelText: 'Modelis',
        options: models
          .filter(({ brandId }) => brandId === this.selectedBrandId)
          .map(({ title, id }) => ({ title, value: id })),
      }),
    };

    this.form = new Form({
      ...props,
      fields: Object.values(this.fields),
      onSubmit: this.handleSubmit,
    });

    this.htmlElement = this.form.htmlElement;
  }

  private handleSubmit = (): void => {
    const {
      fields,
      props: { onSubmit },
    } = this;

    const values = {
      brand: fields.brand.getValue(),
      model: fields.model.getValue(),
      year: fields.year.getValue(),
      price: fields.price.getValue(),
    };

    onSubmit(values);
  };

  private updateFields = () => {
    const { model: modelField } = this.fields;

    modelField.updateProps({
      options: models
        .filter(({ brandId }) => brandId === this.selectedBrandId)
        .map(({ title, id }) => ({ title, value: id })),
    });
  };

  private changeBrand = (brandId: string): void => {
    const selectedBrand = brands.find((brand) => brand.id === brandId);
    console.log(selectedBrand);

    if (selectedBrand === undefined) return;
    this.selectedBrandId = selectedBrand.id;

    this.updateFields();
  };
}

export default CarFormManager;
