import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<h1>merhaba</h1>
   <app-home [pageName]="pageName"></app-home>
    <app-com1></app-com1>
    <p>{{name}}</p>
    <img [src]="src" [width]="width">
    <br>
    <input type="text" [value]="title">
    `,
  //styleUrls: ['./app.component.scss']
  styles: ['h1{background-color:red}']
})
export class AppComponent {
  src:string="https://i.pinimg.com/564x/cd/b4/cf/cdb4cf750833121feabcd18cab45fb1a.jpg"
  width:number = 500
  name: string = "ilker"
  pageName: string = 'Home Page';
  title = 'proj1';
}
