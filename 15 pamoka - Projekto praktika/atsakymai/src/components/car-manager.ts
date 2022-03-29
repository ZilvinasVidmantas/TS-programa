import cars from '../data/cars';
import brands from '../data/brands';
import models from '../data/models';
import CarJoined from '../types/car-joined';
import stringifyProps from '../helpers/stingify-object';
import CarsCollection from '../helpers/cars-collection';
import Table, { TableProps } from './table';
import CarFormManager, { CarFormManagerProps } from './car-form-manager';
import SelectField from './select-field';

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

  private carFormManager: CarFormManager;

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

    this.carFormManager = new CarFormManager({
      title: 'Pridėti automobilį',
      submitText: 'Pridėti',
      onSubmit: this.handleSubmit,
    });

    this.initialize();
  }

  private setState = (partialNewState: Partial<CarManagerState>): void => {
    this.state = {
      ...this.state,
      ...partialNewState,
    };

    this.updateChildrenProps();
  };

  private deleteCar = (id: string) => {
    this.carsCollection.deleteCarById(id);

    this.updateChildrenProps();
  };

  private editCar = (id: string) => {
    this.setState({
      editedCarId: id === this.state.editedCarId ? null : id,
    });
  };

  private createCar: CarFormManagerProps['onSubmit'] = (values) => {
    console.log(values);
  };

  // eslint-disable-next-line class-methods-use-this
  private updateCar: CarFormManagerProps['onSubmit'] = (values) => {

  };

  private handleSubmit: CarFormManagerProps['onSubmit'] = (values) => {
    const {
      state: { editedCarId },
    } = this;

    if (editedCarId === null) this.createCar(values);
    else this.updateCar(values);
  };

  private changeBrandFilter = (brandId: string) => {
    const selectedBrand = brands.find((brand) => brand.id === brandId);
    this.setState({
      selectedBrandFilterId: selectedBrand?.id ?? null,
    });
  };

  private initialize = () => {
    this.htmlElement.className = 'container my-4';
    this.htmlElement.innerHTML = '<h2 class="text-center">Automobilių tvarkyklė</h2>';

    const tableAndFormWrapper = document.createElement('div');
    tableAndFormWrapper.className = 'd-flex gap-4 mt-4 align-items-start';
    tableAndFormWrapper.append(
      this.table.htmlElement,
      this.carFormManager.htmlElement,
    );

    this.htmlElement.append(
      this.brandSelect.htmlElement,
      tableAndFormWrapper,
    );
  };

  private updateChildrenProps = () => {
    const {
      selectedBrandFilterId,
      editedCarId,
    } = this.state;

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

    this.table.updateProps(tableProps);
  };
}

export default CarManager;
