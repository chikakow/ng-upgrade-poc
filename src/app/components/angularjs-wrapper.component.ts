import { Directive, ElementRef, Injector, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

// An AngularJS component upgraded to Angular.
// Note that this is @Directive and not a @Component.
// I could not put styleUrls: [''] there since Directive only accept selector prop.
@Directive({
  selector: 'angularjs-component'
})
// tslint:disable-next-line:directive-class-suffix
export class AngularJSWrapperComponent extends UpgradeComponent implements OnChanges {
  @Input() counter: number;
  @Output() multiply: EventEmitter<number>;

  // We need to declare these two properties.
  // [(twoWay)]="counter" is the same as [twoWay]="counter" (twoWayChange)="counter=$event"
  @Input() twoWay: any;
  @Output() twoWayChange: EventEmitter<string>;

  constructor(ref: ElementRef, inj: Injector) {
    super('angularjsComponent', ref, inj);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
