import brands from '../data/brands';
import models from '../data/models';

class CarForm {
  public htmlElement: HTMLFormElement;

  constructor() {
    this.htmlElement = document.createElement('form');
  }
}

export default CarForm;
