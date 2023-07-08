import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Countries } from '../interfaces/countries.interface';
import { Observable, catchError, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private  url: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }

  getCountries():Observable <Countries[]>{
    return this.http.get<Countries[]>(`${this.url}/all`)
    .pipe(
      catchError(() => of ([]) )
    );
  }

  searchCountries(country: string ):Observable <Countries[]>{
    return this.http.get<Countries[]>(`${this.url}/name/${country}`)
    .pipe(
      catchError(() => of ([]) )
    );
  }

  searchCountriesByRegion(country: string ):Observable <Countries[]>{
    return this.http.get<Countries[]>(`${this.url}/region/${country}`)
    .pipe(
      catchError(() => of ([]) )
    );
  }

  searchCountriesByCode(term: string):Observable <Countries | null>{
    return this.http.get<Countries[]>(`${this.url}/alpha/${term}`)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError(() => of (null) )
    );
  }


}
