import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[hide-header]',
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class HideHeaderDirective {

  @Input('header') header: HTMLElement;

  headerHeight;
  scrollContent;

  constructor(public element: ElementRef, public renderer: Renderer) {
    console.log('hide');
  }

  ngOnInit() {

    this.headerHeight = this.header.clientHeight;
    this.renderer.setElementStyle(this.header, 'webkitTransstion', 'top 700ms');
    this.scrollContent = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
    this.renderer.setElementStyle(this.scrollContent, 'webkitTransstion', 'margin-top 700ms');
  }

  onContentScroll(event) {
    if (event.scrollTop > 56) {
      this.renderer.setElementStyle(this.header, 'top', '-56px');
      this.renderer.setElementStyle(this.scrollContent, 'margin-top', '0px');
    } else {
      this.renderer.setElementStyle(this.header, 'top', '0px');
    }
  }
}
