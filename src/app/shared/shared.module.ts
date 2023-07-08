import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    SearchInputComponent
  ]
})
export class SharedModule { }
