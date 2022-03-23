import Form, { FormProps } from './form';
import SelectField from './select-field';
import TextField from './text-field';
import brands from '../data/brands';
import models from '../data/models';

export type FormManagerProps = Omit<FormProps, 'fields'>;

type CarFormFields = {
  brand: SelectField,
  model: SelectField,
  price: TextField,
  year: TextField,
};

class CarFormManager extends Form {
  private selectedBrandId: string;

  private fields: CarFormFields;

  constructor(props: FormManagerProps) {
    super(props);
    this.fields = {
      price: new TextField({ name: 'price', labelText: 'Kaina', initialValue: '' }),
      year: new TextField({ name: 'yar', labelText: 'Metai', initialValue: '' }),
      brand: new SelectField({
        name: 'brand',
        labelText: 'Markė',
        initialValue: brands[0].id,
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

    this.selectedBrandId = brands[0].id;
  }

  private changeBrand = (brandId: string): void => {
    console.log(this.fields)
  };
}

export default CarFormManager;
