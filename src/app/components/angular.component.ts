import { Component } from '@angular/core';
import { NotifyService } from '../ajs-upgraded-providers';
//  moduleId: module.id,
@Component({
 
  selector: 'angular-component',
  template: `<div class="angular-component"><button (click)="notify(\'hi\')">Notify - 
  using AngularJs service in Angular - click 3 times</button></div>`,
  styles: ['.angular-component {background-color: \'red\'}']
})
export class AngularComponent {
  constructor(private notifyService: NotifyService) {

  }

  notify(msg: any) {
    this.notifyService.notify(msg);
  }
}
