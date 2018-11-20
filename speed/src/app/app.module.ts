import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FiltradoComponent } from './filtrado/filtrado.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { CounterComponent } from './counter/counter.component';
import {LayoutModule} from '@angular/cdk/layout';
import {DataListComponent} from './data-list/data-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FiltradoComponent,
    SearchFilterComponent,
    CounterComponent,
    DataListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
