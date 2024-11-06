import {
  Directive,
  Host,
  HostListener,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  @Output() progress = new EventEmitter<string>();
  constructor() {}
  @HostListener('scroll', ['$event']) doSomething(event: Event) {
    console.log('event')
    let scrollTop = (event.target as HTMLElement).scrollTop;
    let height =
      (event.currentTarget as HTMLElement).scrollHeight -
      (event.currentTarget as HTMLElement).clientHeight;
    let scrolled = (scrollTop / height) * 100;

    let scrollpercentage = `${Math.ceil(scrolled)}%`;

    this.progress.emit(scrollpercentage);
  }
}
