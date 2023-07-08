import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries-service.service';
import { Countries } from '../../interfaces/countries.interface';

@Component({
  selector: 'countries-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.css']
})
export class SearchCountryComponent implements OnInit{
  placeholder: string = 'La propiedad del padre al hijo';
  public countries : Countries[] = [];
 // public countriesSelected: Countries[] = [];
  constructor(private countriesService: CountriesService){}

  ngOnInit(): void {
    this.allCountries();
  }


  allCountries():void{
    this.countriesService.getCountries()
    .subscribe (country => {
      this.countries = country;
     // console.log(this.countries);
    });
  }

  searchCountry(value: string): void{
    if(value.length == 0) {
      this.allCountries();
      console.log(this.countries);
    }else{
      this.countriesService.searchCountries(value)
    .subscribe( resp => {
      this.countries = resp;
    });  
    }
    
  }

  searchByRegion(region: string): void{
    console.log(region);
    this.countriesService.searchCountriesByRegion(region)
    .subscribe(resp => {
      this.countries = resp;
    });
  }

}
