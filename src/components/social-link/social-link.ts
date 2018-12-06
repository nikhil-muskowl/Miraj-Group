import { Component } from '@angular/core';

@Component({
  selector: 'social-link',
  templateUrl: 'social-link.html'
})
export class SocialLinkComponent {

  text: string;

  constructor() {    
    this.text = 'Hello World';
  }

}
