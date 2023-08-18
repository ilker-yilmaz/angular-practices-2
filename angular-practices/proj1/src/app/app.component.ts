import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  //styles: ['h1{background-color:red}']
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
  pageName: string = 'Page Name';
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
