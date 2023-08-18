import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <input type="text" value="{{text}}">
  <p>{{text}}</p>
  <p>{{sayi}}</p>
  {{n1+n2}}
  <input type="text" #txt value="3">
  {{txt.value}}
  <br>
  {{hi()}}
  {{script}}
  <br>
  {{html}}
  <br>
  <p>{{text}} dünya</p>
  <p ngNonBindable>{{text}} dünya</p>
  <br>
  {{text | uppercase}}
  {{person?.name}}
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  person: { name: string, surname: string } = { name: "ilker", surname: "yılmaz"}
  html: string = "<h1>Merhaba</h1>";
  script: string = '<script>alert("merhaba")</script>'
  hi() {
    //alert("merhaba dostum")
  }
  n1: number = 5;
  n2: number = 7;
  sayi: number = 1;
  text: string = "merhaba ilker hoşgeldin";
  bgColor: string = "green";
  colspan: number = 2;
  border: string = "dashed";
  width: number = 600;
  height: number = 100;
  disabled: boolean = false;
  name2: string;
  onChange($event) {
    alert("onChange çalıştı.")
  }
  src: string = "https://i.pinimg.com/564x/cd/b4/cf/cdb4cf750833121feabcd18cab45fb1a.jpg"
  // width: number = 500
  name: string = "ilker"
  pageName: string = 'Page Name';
  btnClick() {
    //alert("merhaba ilker");
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
