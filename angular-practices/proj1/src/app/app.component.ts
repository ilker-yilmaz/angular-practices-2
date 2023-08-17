import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<h1>merhaba</h1>
  //property binding
   <app-home [pageName]="pageName"></app-home>
    <app-com1></app-com1>
    
    <p>{{name}}</p>
    <img [src]="src" [width]="width">
    <br>
    <input type="text" [value]="title">
    <button on-click="btnClick(); btnClick2()">Click</button>
    <input (keydown.shift.a)="aEvent()" value="Aaa">
    <input (keydown.shift.b)="bEvent()" value="Bbb">
    <br>
    //Two-Way Data Binding
    <br>
    <input type="text" [(ngModel)]="name2" (ngModelChange)="onChange($event)"> <br>
    <input type="text" [(ngModel)]="name2"> <br>
    {{name2}}
    <!-- uygulamanın ana modulünde FormsModule import edilmeli -->

    <button [disabled]="disabled">Send</button>

    <table [border]="border" [width]="width">
      <tr>
        <td [height]="height"></td>
        <td></td>
      </tr>
      <tr>
        <td [height]="height" [attr.colspan]="colspan"></td>
      </tr>

    </table>

    <div [style.background-color]="bgColor"><h2>Style and Class Binding</h2></div>
    `,
  //styleUrls: ['./app.component.scss']
  styles: ['h1{background-color:red}']
})
export class AppComponent {
  bgColor: string = "green";
  colspan: number = 2;
  border: string = "dashed";
  width: number = 600;
  height: number = 100;
  disabled: boolean = false;
  name2: string;
  onChange($event){
    alert("onChange çalıştı.")
  }
  src: string = "https://i.pinimg.com/564x/cd/b4/cf/cdb4cf750833121feabcd18cab45fb1a.jpg"
  // width: number = 500
  name: string = "ilker"
  pageName: string = 'Home Page';
  btnClick() {
    alert("merhaba ilker");
  }
  btnClick2() {
    alert("merhaba ilker yılmaz");
  }

  aEvent() {
    alert("merhaba ilker");
  }
  bEvent() {
    alert("merhaba ilker yılmaz");
  }
  title = 'proj1';
}
