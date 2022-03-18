import brands from '../data/brands';
import cars from '../data/cars';
import models from '../data/models';
import SelectField, { SelectFieldProps } from './select-field';
import Table from './table';
import CarJoined from '../types/car-joined';
import CarsCollection from '../helpers/cars-collection';
import stringifyProps from '../helpers/stingify-object';

type CarJoinedStringified = {
  [Key in keyof CarJoined]: string;
};

class CarManager {
  public htmlElement: HTMLDivElement;

  private brandSelect: SelectField;

  private carTable: Table<CarJoinedStringified>;

  private carsCollection: CarsCollection;

  public constructor() {
    this.carsCollection = new CarsCollection({ cars, brands, models });
    this.htmlElement = document.createElement('div');
    this.brandSelect = this.createBrandSelect();
    this.carTable = this.createCarTable();

    this.initialize();
  }

  private createCarTable = (): Table<CarJoinedStringified> => {
    const joinedCarsStringified = this.carsCollection.all.map(stringifyProps);

    return new Table({
      title: 'Visi automobiliai',
      columns: {
        id: 'Id',
        brand: 'Markė',
        model: 'Modelis',
        price: 'Kaina $',
        year: 'Metai',
      },
      rowsData: joinedCarsStringified,
      onDelete: this.deleteCar,
      onEdit: this.editCar,
    });
  };

  private createBrandSelect = (): SelectField => {
    const brandOptions: SelectFieldProps['options'] = brands.map((brand) => ({
      title: brand.title,
      value: brand.id,
    }));

    const brandSelectProps: SelectFieldProps = {
      title: 'Markė',
      options: brandOptions,
      onChange: this.changeBrand,
    };

    const brandSelect = new SelectField(brandSelectProps);

    return brandSelect;
  };

  // eslint-disable-next-line class-methods-use-this
  private deleteCar = (id: string) => {
    throw new Error(`Car deletion not implemented: ${id}`);
  };

  // eslint-disable-next-line class-methods-use-this
  private editCar = (id: string) => {
    throw new Error(`Car edit not implemented: ${id}`);
  };

  private changeBrand: SelectFieldProps['onChange'] = (id: string) => {
    const rowsData = this.carsCollection
      .getByBrandId(id)
      .map(stringifyProps);

    this.carTable.updateProps({ rowsData });
  };

  private initialize = () => {
    this.htmlElement.className = 'card p-3 my-4 shadow';
    this.htmlElement.innerHTML = '<h2 class="text-center">Automobilių tvarkyklė</h2>';

    this.htmlElement.append(
      this.brandSelect.htmlElement,
      this.carTable.htmlElement,
    );
  };
}

export default CarManager;
