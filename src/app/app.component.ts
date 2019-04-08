import { Component } from '@angular/core';
//  moduleId: module.id,
@Component({
 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'upgrade-poc';
  counter = 1;
  twoWay: any;

  multiplyCounter(event: number) {
    this.counter = this.counter * event;
    console.log('output "multiply" from AngularJs is triggered Angular multiplyCounter() method with event:' + event);
  }
}

