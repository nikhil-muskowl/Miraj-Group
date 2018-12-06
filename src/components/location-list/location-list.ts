import { Component } from '@angular/core';

@Component({
  selector: 'location-list',
  templateUrl: 'location-list.html'
})
export class LocationListComponent {

  text: string;

  constructor() {    
    this.text = 'Locations';
  }

}
