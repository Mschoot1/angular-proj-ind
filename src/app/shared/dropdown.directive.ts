import {Directive, HostListener, HostBinding, ContentChild} from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  @HostBinding('class.show') isOpen = false;
  @ContentChild('button aria-expanded.true')

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
