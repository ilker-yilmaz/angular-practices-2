import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<h1>merhaba</h1>
   <app-home></app-home>
    <app-com1></app-com1>`,
  //styleUrls: ['./app.component.scss']
  styles: ['h1{background-color:red}']
})
export class AppComponent {
  title = 'proj1';
}
