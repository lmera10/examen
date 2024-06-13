import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    this.logMessage('HomePage component has been initialized.');
  }

  logMessage(message: string): void {
    console.log(message);
  }
}
