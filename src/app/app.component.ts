import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'upgrade-poc';
  counter = 1;
  twoWay;

  multiplyCounter(event: number) {
    this.counter = this.counter * event;
  }
}

