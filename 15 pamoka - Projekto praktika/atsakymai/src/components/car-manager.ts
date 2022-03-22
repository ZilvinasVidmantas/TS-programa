import cars from '../data/cars';
import brands from '../data/brands';
import models from '../data/models';
import CarJoined from '../types/car-joined';
import stringifyProps from '../helpers/stingify-object';
import CarsCollection from '../helpers/cars-collection';
import SelectField from './select-field';
import Table, { TableProps } from './table';
import Form, { FormProps } from './form';

type CarJoinedStringified = {
  [Key in keyof CarJoined]: string;
};

type CarManagerState = {
  selectedBrandFilterId: string | null,
  selectedModelFilterId: string | null,
  selectedBrandFormId: string;
  editedCarId: string | null,
};

class CarManager {
  public htmlElement: HTMLDivElement;

  private state: CarManagerState;

  private carsCollection: CarsCollection;

  private brandSelect: SelectField;

  private table: Table<CarJoinedStringified>;

  private form: Form;

  public constructor() {
    this.htmlElement = document.createElement('div');
    this.carsCollection = new CarsCollection({ cars, brands, models });

    this.state = {
      selectedBrandFilterId: null,
      selectedModelFilterId: null,
      selectedBrandFormId: brands[0].id,
      editedCarId: null,
    };

    this.brandSelect = new SelectField({
      labelText: 'Markė',
      options: [
        { title: 'Visos markės', value: '-1' },
        ...brands.map((brand) => ({
          title: brand.title,
          value: brand.id,
        })),
      ],
      onChange: this.changeBrandFilter,
    });

    this.table = new Table({
      title: 'Visi automobiliai',
      columns: {
        id: 'Id',
        brand: 'Markė',
        model: 'Modelis',
        price: 'Kaina',
        year: 'Metai',
      },
      rowsData: this.carsCollection.all.map(stringifyProps),
      editedRowId: this.state.editedCarId,
      onDelete: this.deleteCar,
      onEdit: this.editCar,
    });

    this.form = new Form({
      title: 'Pridėti automobilį',
      submitText: 'Pridėti',
      fieldsProps: [
        { name: 'brand', labelText: 'Markė', initialValue: '' },
        { name: 'model', labelText: 'Modelis', initialValue: '' },
        {
          name: 'brand',
          labelText: 'Markė',
          initialValue: brands[0].id,
          options: [
            ...brands.map((brand) => ({
              title: brand.title,
              value: brand.id,
            })),
          ],
          onChange: this.changeFormBrand,
        },
        {
          name: 'model',
          labelText: 'Modelis',
          options: [
            ...models
              .filter((model) => model.brandId === brands[0].id)
              .map((brand) => ({
                title: brand.title,
                value: brand.id,
              })),
          ],
        },
      ],
    });

    this.initialize();
  }

  private setState = (partialNewState: Partial<CarManagerState>): void => {
    this.state = {
      ...this.state,
      ...partialNewState,
    };

    this.update();
  };

  private deleteCar = (id: string) => {
    this.carsCollection.deleteCarById(id);

    this.update();
  };

  private editCar = (id: string) => {
    this.setState({
      editedCarId: id === this.state.editedCarId ? null : id,
    });
  };

  private changeBrandFilter = (brandId: string) => {
    const selectedBrand = brands.find((brand) => brand.id === brandId);
    this.setState({
      selectedBrandFilterId: selectedBrand?.id ?? null,
    });
  };

  private changeFormBrand = (brandId: string): void => {
    this.setState({
      selectedBrandFormId: brandId,
    });
  };

  private initialize = () => {
    this.htmlElement.className = 'container my-4';
    this.htmlElement.innerHTML = '<h2 class="text-center">Automobilių tvarkyklė</h2>';

    const tableAndFormWrapper = document.createElement('div');
    tableAndFormWrapper.className = 'd-flex gap-4 mt-4 align-items-start';
    tableAndFormWrapper.append(
      this.table.htmlElement,
      this.form.htmlElement,
    );

    this.htmlElement.append(
      this.brandSelect.htmlElement,
      tableAndFormWrapper,
    );
  };

  private update = () => {
    const { selectedBrandFilterId, editedCarId } = this.state;

    const brandFound = brands.find((brand) => brand.id === selectedBrandFilterId);

    const tableProps: Partial<TableProps<CarJoinedStringified>> = {
      title: brandFound ? `${brandFound.title} markės automobiliai` : 'Visi automobiliai',
      rowsData: (
        selectedBrandFilterId && brandFound
          ? this.carsCollection.getByBrandId(selectedBrandFilterId)
          : this.carsCollection.all
      ).map(stringifyProps),
      editedRowId: editedCarId,
    };

    const formProps: Partial<FormProps> = {};

    this.form.updateProps(formProps);

    this.table.updateProps(tableProps);
  };
}

export default CarManager;
