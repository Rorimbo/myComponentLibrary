import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './dialog-data';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if (!data) {
      this.data = {} as DialogData;
    }
  }

  onNoClick(): void {
    if (typeof this.data.onCloseClick == 'function') {
      this.data.onCloseClick();
    }
    this.dialogRef.close();
  }

  onOkClick() {
    if (typeof this.data.onOkClick == 'function') {
      this.data.onOkClick();
    }
    this.dialogRef.close();
    return;
  }
}
