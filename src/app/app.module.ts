import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './meterial/meterial.module';
import { FormsModule } from '@angular/forms'

import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { StockHomeComponent } from './stock/stock-home/stock-home.component';
import { StockEditComponent } from './stock/stock-edit/stock-edit.component';
import { StockCreateComponent } from './stock/stock-create/stock-create.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    StockHomeComponent,
    StockEditComponent,
    StockCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
