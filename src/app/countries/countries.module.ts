import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchCountryComponent } from './pages/search-country/search-country.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

import { CountriesRoutingModule } from './countries-rounting.module';

import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    SearchCountryComponent,
    CountryPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
