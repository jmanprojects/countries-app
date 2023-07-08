import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;
  regions: string [] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  selectedRegion: string = 'Filter by Region';

  constructor() {}

  ngOnInit(): void {
    this.debouncerSubscription=this.debouncer
    .pipe(
      debounceTime(400)
    )
    .subscribe( value => {
      this.inputValue.emit(value);
    }); 
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  @Output()
  inputValue: EventEmitter<string> = new EventEmitter<string>();
  
  @Output()
  selectRegion: EventEmitter<string> = new EventEmitter<string>();

  searchCountry(textInput: string): void{
    this.selectedRegion = 'Filter by Region';
    this.debouncer.next(textInput);
  }

  searchByRegion(region: string ): void{
    this.selectedRegion = region;
    this.selectRegion.emit(region);
  }

}
