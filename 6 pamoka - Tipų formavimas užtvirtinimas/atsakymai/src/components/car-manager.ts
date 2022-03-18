import brands from '../data/brands';
import cars from '../data/cars';
import models from '../data/models';
import SelectField, { SelectFieldProps } from './select-field';
import Table from './table';
import CarJoined from '../types/car-joined';
import createJoinedCars from '../helpers/create-joined-cars';
import stringifyProps from '../helpers/stingify-object';

type CarJoinedStringified = {
  [Key in keyof CarJoined]: string;
};

class CarManager {
  public htmlElement: HTMLDivElement;

  private brandSelect: SelectField;

  private carTable: Table<CarJoinedStringified>;

  public constructor() {
    this.htmlElement = document.createElement('div');
    this.brandSelect = this.createBrandSelect();
    this.carTable = this.createCarTable();

    this.initialize();
  }

  private createCarTable = (): Table<CarJoinedStringified> => {
    const joinedCars = createJoinedCars({ cars, brands, models });
    const joinedCarsStringified = joinedCars.map((car) => stringifyProps(car));

    return new Table({
      title: 'Visi automobiliai',
      columns: {
        id: 'Id',
        price: 'Kaina $',
        year: 'Metai',
        model: 'Markė',
        brand: 'Modelis',
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

  private deleteCar = (id: string) => {
    throw new Error(`Car deletion not implemented: ${id}`);
  };

  private editCar = (id: string) => {
    throw new Error(`Car edit not implemented: ${id}`);
  };

  private changeBrand: SelectFieldProps['onChange'] = (newBrand) => {
    console.log(this);
    console.log(newBrand);
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
