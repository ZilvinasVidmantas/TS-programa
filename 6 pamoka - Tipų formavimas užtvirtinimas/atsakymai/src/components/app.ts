import CarManager from './car-manager';

class App {
  private htmlElement: HTMLElement;

  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);

    if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);

    this.htmlElement = foundElement;
  }

  initialize = (): void => {
    const carManager = new CarManager();

    const container = document.createElement('div');
    container.className = 'container';
    container.appendChild(carManager.htmlElement);

    this.htmlElement.append(container);
  };
}

export default App;
