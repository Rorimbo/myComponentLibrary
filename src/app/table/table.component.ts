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

  @ViewChild('addDialog') addDialog: TemplateRef<HTMLElement>;

  constructor(public dialog: MatDialog) {
    this.form = new FormGroup({});
  }

  ngOnChanges() {
    for (const [key] of Object.entries(this.arr[0])) {
      this.columns.push(key);
      this.form.addControl(key, new FormControl());
    }
  }

  addRow() {
    let dialogData: DialogData = {
      title: 'Добавить строку',
      content: this.addDialog,
      okText: 'Сохранить',
      closeText: 'Закрыть',
      checkOkButton: null,
      onOkClick: () => {
        this.arr.push(this.form.value);
        this.form.reset();
      },
      onCloseClick: () => {
        this.form.reset();
      },
    };

    const dialogRef = this.dialog.open(DialogComponent, {
      data: dialogData,
    });
  }
}
