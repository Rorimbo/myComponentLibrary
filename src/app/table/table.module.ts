import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DialogModule } from '../dialog/dialog.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToolbarComponent, TableComponent],
  imports: [CommonModule, DialogModule, ReactiveFormsModule],
  exports: [ToolbarComponent, TableComponent],
})
export class TableModule {}
