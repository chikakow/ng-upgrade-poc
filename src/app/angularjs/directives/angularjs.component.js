(function () {
  'use strict';

  angular.module('AngularJsModule').component('angularjsComponent', {
    template: `
    <div class="ng1">
      ** AngularJS - written in AngularJS and upgraded to Angular
      <br>
      <span class="red-font">You should see this in red if css is working.</span>
      <br>
      counter: {{$ctrl.counter}}
      <button ng-click="$ctrl.multiply(2)">Double</button>
      <br>
      Bound via a two-way binding: <input ng-model="$ctrl.twoWay">
      </div>
    `,
    bindings: {
      counter: `<`,
      multiply: '&',
      twoWay: '='
    }
  }
  );

})();