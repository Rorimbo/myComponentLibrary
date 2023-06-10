import { TemplateRef } from '@angular/core';

export interface DialogData {
  title: string;
  content: TemplateRef<HTMLElement>;
  okText: string;
  closeText: string;
  checkOkButton: any;
  onOkClick: any;
  onCloseClick: any;
}
