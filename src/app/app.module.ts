import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { TableModule } from './table/table.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, FooterModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
