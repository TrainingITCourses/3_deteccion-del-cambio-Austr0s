import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FiltradoComponent } from './filter/filtrado.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilterComponent } from './filter/search-filter.component';
import { CounterComponent } from './filter/counter.component';
import {LayoutModule} from '@angular/cdk/layout';
import {DataListComponent} from './filter/data-list.component';
import {StoreModule} from '@ngrx/store';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {metaReducers, reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {AgenciesEffects} from './store/reducers/agencies/agencies.effects';
import {MissionTypesEffects} from './store/reducers/missionTypes/mission-types.effects';
import {StatusesEffects} from './store/reducers/statuses/statuses.effects';


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
    LayoutModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AgenciesEffects, MissionTypesEffects, StatusesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
