import { Component, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/countries.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries-service.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit{
  public countries?: Countries;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
    ){}

   ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchCountriesByCode(id)),
    )
    .subscribe(country => {
      if( !country ){
        return this.router.navigateByUrl('countries');
        
      }
      return this.countries = country;
    });
   }
   
  //  getNameBorderCountry(codCountry: string): string{
  //   this.countriesService.searchCountriesByCode(codCountry)
  //   .subscribe(resp => {
  //     //return resp?.name.common;
  //   })
  //  }
  
}
