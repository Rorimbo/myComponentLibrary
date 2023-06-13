import {
  Component,
  Input,
  OnChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from '../dialog/dialog-data';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnChanges {
  @Input() arr: any[] = [];
  columns: any[] = [];
  form: FormGroup;
  selectedRow: any;
  currentElement: any;
  isReadOnly: boolean | null = null;

  @ViewChild('addDialog') addDialog: TemplateRef<HTMLElement>;
  @ViewChild('delDialog') delDialog: TemplateRef<HTMLElement>;

  constructor(public dialog: MatDialog) {
    this.form = new FormGroup({});
  }

  ngOnChanges() {
    for (const [key] of Object.entries(this.arr[0])) {
      this.columns.push(key);
      this.form.addControl(key, new FormControl());
    }
  }

  onSelectRow(index: any, element: any) {
    if (this.currentElement) {
      this.currentElement.parentNode.classList.toggle('selected');
    }
    this.currentElement = element.target;
    this.currentElement.parentNode.classList.add('selected');
    this.selectedRow = {
      id: index,
      data: this.arr[index],
    };
  }

  addRow() {
    let dialogData: DialogData = {
      title: 'Add Row',
      content: this.addDialog,
      okText: 'Save',
      closeText: 'Cancel',
      hideOkButton: null,
      onOkClick: () => {
        this.arr.push(this.form.value);
        this.form.reset();
      },
      onCloseClick: () => {
        this.form.reset();
      },
    };

    this.dialog.open(DialogComponent, {
      data: dialogData,
    });
  }

  readRow() {
    if (!this.selectedRow) {
      alert('Select Row');
      return;
    }

    this.isReadOnly = true;

    for (const [key, value] of Object.entries(this.selectedRow.data)) {
      this.form.controls[key].setValue(value);
    }

    let dialogData: DialogData = {
      title: 'Read',
      content: this.addDialog,
      okText: '',
      closeText: 'Close',
      hideOkButton: true,
      onOkClick: () => {},
      onCloseClick: () => {
        this.form.reset();
        this.isReadOnly = null;
      },
    };

    this.dialog.open(DialogComponent, {
      data: dialogData,
    });
  }

  editRow() {
    if (!this.selectedRow) {
      alert('Select Row');
      return;
    }

    for (const [key, value] of Object.entries(this.selectedRow.data)) {
      this.form.controls[key].setValue(value);
    }

    let dialogData: DialogData = {
      title: 'Edit',
      content: this.addDialog,
      okText: 'Save',
      closeText: 'Cancel',
      hideOkButton: null,
      onOkClick: () => {
        this.arr[this.selectedRow.id] = this.form.value;
        this.selectedRow.data = this.form.value;
        this.form.reset();
      },
      onCloseClick: () => {
        this.form.reset();
      },
    };

    this.dialog.open(DialogComponent, {
      data: dialogData,
    });
  }

  delRow() {
    if (!this.selectedRow) {
      alert('Select Row');
      return;
    }

    let dialogData: DialogData = {
      title: 'Delete Row',
      content: this.delDialog,
      okText: 'Delete',
      closeText: 'Cancel',
      hideOkButton: null,
      onOkClick: () => {
        this.arr.splice(this.selectedRow.id, 1);
        this.selectedRow = null;
      },
      onCloseClick: () => {
        this.form.reset();
      },
    };

    this.dialog.open(DialogComponent, {
      data: dialogData,
    });
  }
}
