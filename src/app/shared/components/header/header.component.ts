import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

interface pageMode{
  id: number;
  icon: string;
  name: string;
}

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  pageMode: pageMode [] = [
    { 
      id: 0,
      icon : 'bi bi-moon-stars',
      name: 'dark'
    },
    {
      id: 1,
      icon : 'bi bi-brightness-high',
      name: 'light'
    }
  ];

  
  @Output()
  themeSelected: EventEmitter<string> = new EventEmitter(); 
  
  changeTheme(theme: string):void{
    this.themeSelected.emit(theme);
  }



}
