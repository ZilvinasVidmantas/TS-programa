import countObjectProperties from '../helpers/count-object-properties';

type RowData = {
  id: string,
  [key: string]: string,
};

type TableProps<Type> = {
  title: string,
  columns: Type,
  rowsData: Type[],
  onDelete: (id: string) => void,
  onEdit: (id: string) => void,
};

class Table<Type extends RowData> {
  public htmlElement: HTMLTableElement;

  private props: TableProps<Type>;

  private tbody: HTMLTableSectionElement;

  private thead: HTMLTableSectionElement;

  public constructor(props: TableProps<Type>) {
    this.props = props;

    this.checkColumnsCompatability();

    this.htmlElement = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    this.initialize();
  }

  private checkColumnsCompatability = (): void => {
    const { rowsData, columns } = this.props;

    if (this.props.rowsData.length === 0) return;
    const columnCount = countObjectProperties(columns) + 1;

    const columnsCompatableWithRowsData = rowsData.every((row) => {
      const rowCellsCount = countObjectProperties(row);

      return rowCellsCount === columnCount;
    });

    if (!columnsCompatableWithRowsData) {
      throw new Error('Nesutampa lentelės stulepelių skaičius su eilučių stulpelių skaičiumi');
    }
  };

  private initialize = (): void => {
    this.htmlElement.className = 'table border my-3';
    this.htmlElement.append(
      this.thead,
      this.tbody,
    );
    this.updateView();
  };

  private addActionButtonsCells = (rowHtmlElement: HTMLTableRowElement, id: string) => {
    const { onEdit, onDelete } = this.props;

    const buttonCell = document.createElement('td');
    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.innerHTML = 'Edit';
    editButton.className = 'btn btn-warning me-3';
    editButton.addEventListener('click', () => onEdit(id));

    const deleteButton = document.createElement('button');
    editButton.type = 'button';
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'btn btn-danger';
    deleteButton.addEventListener('click', () => onDelete(id));

    buttonCell.append(editButton, deleteButton);
    rowHtmlElement.append(buttonCell);
  };

  public updateTHeadView = (): void => {
    const { title, columns } = this.props;

    const headers = [
      ...Object.values(columns),
      'Veiksmai',
    ];
    const headersRowHtmlString = headers.map((header) => `<th>${header}</th>`).join('');

    this.thead.innerHTML = `
      <tr>
        <th colspan="${headers.length}" class="text-center">${title}</th>
      </tr>
      <tr>${headersRowHtmlString}</tr>
    `;
  };

  public updateTBodyView = (): void => {
    const { rowsData, columns } = this.props;

    const rowsHtmlElements = rowsData
      .map((rowData) => {
        const rowHtmlElement = document.createElement('tr');

        const cellsHtmlString = Object.keys(columns)
          .map((key) => `<td>${rowData[key]}</td>`)
          .join(' ');

        rowHtmlElement.innerHTML = cellsHtmlString;
        this.addActionButtonsCells(rowHtmlElement, rowData.id);

        return rowHtmlElement;
      });

    this.tbody.append(...rowsHtmlElements);
  };

  public updateView = (): void => {
    this.updateTHeadView();
    this.updateTBodyView();
  };
}

export default Table;
