import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <div *appCustomif="true">
    merhaba
  </div> -->
  <!-- <ul>
    <li *appCustomfor="5; let i = index">ilker{{i}}</li>
  </ul> -->
  <ul>
    <li *appCustomfor="names; let name; let index = index">{{name}}-{{index}}</li>
  </ul>
  `,
})
export class AppComponent {
  title = 'structural-directive';
  names: string[] = ['ilker', 'hasan', 'ahmet', 'fırat', 'mert', 'resul', 'furkan'];
}
