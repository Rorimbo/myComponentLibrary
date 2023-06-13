import { TemplateRef } from '@angular/core';

export interface DialogData {
  title: string;
  content: TemplateRef<HTMLElement>;
  okText: string;
  closeText: string;
  hideOkButton: boolean | null;
  onOkClick: any;
  onCloseClick: any;
}
