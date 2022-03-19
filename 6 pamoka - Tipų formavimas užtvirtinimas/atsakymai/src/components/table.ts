import countObjectProperties from '../helpers/count-object-properties';

type RowData = {
  id: string,
  [key: string]: string,
};

export type TableProps<Type> = {
  title: string,
  columns: Type,
  rowsData: Type[],
  onDelete: (id: string) => void,
  onEdit: (id: string) => void,
  editedRowId: string | null,
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
    this.htmlElement.className = 'table table-striped order border p-3';
    this.htmlElement.append(
      this.thead,
      this.tbody,
    );
    this.updateView();
  };

  private addActionButtonsCells = (rowHtmlElement: HTMLTableRowElement, id: string) => {
    const { editedRowId, onEdit, onDelete } = this.props;

    const buttonCell = document.createElement('td');

    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.innerHTML = 'Edit';
    editButton.className = 'btn btn-warning me-3';
    editButton.addEventListener('click', () => onEdit(id));
    editButton.style.width = '80px';

    if (editedRowId === id) {
      editButton.innerHTML = 'Cancel';
      editButton.classList.replace('btn-warning', 'btn-light');
    }

    const deleteButton = document.createElement('button');
    editButton.type = 'button';
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'btn btn-danger';
    deleteButton.addEventListener('click', () => onDelete(id));
    deleteButton.style.width = '80px';

    buttonCell.append(editButton, deleteButton);
    rowHtmlElement.append(buttonCell);
  };

  private updateTHeadView = (): void => {
    const { title, columns } = this.props;

    const headers = [
      ...Object.values(columns),
      'Veiksmai',
    ];
    const headersRowHtmlString = headers.map((header) => `<th>${header}</th>`).join('');

    this.thead.innerHTML = `
      <tr>
        <th colspan="${headers.length}" class="text-center h3">${title}</th>
      </tr>
      <tr>${headersRowHtmlString}</tr>
    `;
  };

  private updateTBodyView = (): void => {
    const { rowsData, columns, editedRowId } = this.props;

    this.tbody.innerHTML = '';
    const rowsHtmlElements = rowsData
      .map((rowData) => {
        const rowHtmlElement = document.createElement('tr');
        if (editedRowId === rowData.id) rowHtmlElement.style.backgroundColor = '#fea';

        const cellsHtmlString = Object.keys(columns)
          .map((key) => `<td>${rowData[key]}</td>`)
          .join(' ');

        rowHtmlElement.innerHTML = cellsHtmlString;
        this.addActionButtonsCells(rowHtmlElement, rowData.id);

        return rowHtmlElement;
      });

    this.tbody.append(...rowsHtmlElements);
  };

  private updateView = (): void => {
    this.updateTHeadView();
    this.updateTBodyView();
  };

  public updateProps = (partialNewProps: Partial<TableProps<Type>> = {}): void => {
    this.props = {
      ...this.props,
      ...partialNewProps,
    };

    this.updateView();
  };
}

export default Table;
