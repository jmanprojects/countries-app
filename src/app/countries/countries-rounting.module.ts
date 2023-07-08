import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCountryComponent } from './pages/search-country/search-country.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes: Routes = [
    {path: 'search-country', component: SearchCountryComponent},
    {path: 'by/:id', component: CountryPageComponent},
    {path: '**', redirectTo:'search-country'}
 /*   {path: 'by-country', component: ByCountryPageComponent},
    {path: 'by-region', component: ByRegionPageComponent},
    {path: 'by/:id', component: CountryPageComponent},
    {path: '**', redirectTo: 'by-capital'},*/

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
