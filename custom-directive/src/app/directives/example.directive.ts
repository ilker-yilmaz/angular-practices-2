import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';
declare var $: any;

@Directive({
  selector: '[appExample]' // uygulama seviyesinde directive'i kullanmamızı sağlayan referanstır.
  // bu referans [] parantez içinde yazımışsa attribute olarak kullanılabilir.
  // bu referans . ile başlamışsa class olarak kullanılabilir.

  //selector özelliği köşeli parantez içerisinde yazılıyorsa bu attribute olarak kullanılacağı anlamına gelmektedir.
  // yok eğer . nokta ile yazılıyorsa bu da class olarak ilgili directive'in kullanılacağı anlamına gelmektedir.

})
export class ExampleDirective
  implements OnInit {

  constructor(private element:
    ElementRef) {
    
  }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.color;
    $(this.element.nativeElement).fadeOut(2000).fadeIn();
  }

  @Input() color: string = 'red';

  @HostListener('click')
  onClick() {
    alert('HTML nesnesi click edildi');
  }

  @HostBinding('style.color')
  writingColor: string = "blue";

}