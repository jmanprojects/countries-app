import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public themeSelected: string = 'light';
  title = 'asdasd';
  prueba: string = 'data-bs-theme = ' + "dark";
  changeTheme(theme: string):void{
    console.log(theme);
  }
}
