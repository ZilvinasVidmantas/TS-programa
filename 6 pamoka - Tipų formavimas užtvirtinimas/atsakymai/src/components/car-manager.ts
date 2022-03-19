import brands from '../data/brands';
import cars from '../data/cars';
import models from '../data/models';
import SelectField, { SelectFieldProps } from './select-field';
import Table, { TableProps } from './table';
import CarJoined from '../types/car-joined';
import CarsCollection from '../helpers/cars-collection';
import stringifyProps from '../helpers/stingify-object';

type CarJoinedStringified = {
  [Key in keyof CarJoined]: string;
};

type CarManagerState = {
  selectedBrandId: string | null,
  selectedModelId: string | null,
  editedCarId: string | null,
};

class CarManager {
  public htmlElement: HTMLDivElement;

  private state: CarManagerState;

  private carTable: Table<CarJoinedStringified>;

  private brandSelect: SelectField;

  private carsCollection: CarsCollection;

  public constructor() {
    this.htmlElement = document.createElement('div');
    this.carsCollection = new CarsCollection({ cars, brands, models });

    this.state = {
      selectedBrandId: null,
      selectedModelId: null,
      editedCarId: null,
    };

    this.brandSelect = new SelectField({
      title: 'Markė',
      options: [
        { title: 'Visos markės', value: '-1' },
        ...brands.map((brand) => ({
          title: brand.title,
          value: brand.id,
        })),
      ],
      onChange: this.changeBrand,
    });

    this.carTable = new Table({
      title: 'Visi automobiliai',
      columns: {
        id: 'Id',
        brand: 'Markė',
        model: 'Modelis',
        price: 'Kaina $',
        year: 'Metai',
      },
      rowsData: this.carsCollection.all.map(stringifyProps),
      editedRowId: this.state.editedCarId,
      onDelete: this.deleteCar,
      onEdit: this.editCar,
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

  private changeBrand: SelectFieldProps['onChange'] = (brandId: string) => {
    const selectedBrand = brands.find((brand) => brand.id === brandId);
    this.setState({
      selectedBrandId: selectedBrand?.id ?? null,
    });
  };

  private initialize = () => {
    this.htmlElement.className = 'card p-3 my-4 shadow';
    this.htmlElement.innerHTML = '<h2 class="text-center">Automobilių tvarkyklė</h2>';

    this.htmlElement.append(
      this.brandSelect.htmlElement,
      this.carTable.htmlElement,
    );
  };

  private update = () => {
    const { selectedBrandId, editedCarId } = this.state;

    const brandFound = brands.find((brand) => brand.id === selectedBrandId);

    const tableProps: Partial<TableProps<CarJoinedStringified>> = {
      title: brandFound ? `${brandFound.title} markės automobiliai` : 'Visi automobiliai',
      rowsData: (
        selectedBrandId && brandFound
          ? this.carsCollection.getByBrandId(selectedBrandId)
          : this.carsCollection.all
      ).map(stringifyProps),
      editedRowId: editedCarId,
    };

    this.carTable.updateProps(tableProps);
  };
}

export default CarManager;
