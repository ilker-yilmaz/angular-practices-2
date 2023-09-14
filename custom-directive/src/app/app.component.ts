import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <div appExample color="green">merhaba</div>
  <div class="appExample">merhaba</div>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //# Directive Oluşturma
  // ng generate directive ... ya da ... ng g d ...
  // bir directive oluşturulduğu zaman ana modüle declare edilmelidir.
  // Angular mimarisinde name convention olarak directive'lerin sonuna Directive eklenebilir.
  // bir directive'in sınıf adının sonunda directive olması isimsel bir kültürdür.
  // bir directive'in sınıf adının sonunda directive olması zorunlu değildir.
  // bir directive'in directive olabilmesi için @Directive decorator'ı tarafından işaretlenmiş olması gerekmektedir.

  //# Selector'ı Attribute Olarak Kullanma
  //selector özelliği köşeli parantez içerisinde yazılıyorsa bu attribute olarak kullanılacağı anlamına gelmektedir.

  //# selector'ı class olarak kullanma
  // yok eğer . nokta ile yazılıyorsa bu da class olarak ilgili directive'in kullanılacağı anlamına gelmektedir.

  //# Directive ile İşaretlenmiş HTML Nesnesini Elde Etme

  //# Directive'e Parametre Tanımlama
    // directive üzerinde parametre tanımlayabilmek için Input field tanımlamak yeterlidir.

  //# HostListener
    // Oluşturulan directive'in hangi event ile görevlendirileceğini belirlememizi sağlayan bir decorator'dır.

  //# HostBinding
    // Directive'in işaretlediği DOM nesnesinin bir özelliğine bind olarak işlemler gerçekleştirebiliyoruz.
}
