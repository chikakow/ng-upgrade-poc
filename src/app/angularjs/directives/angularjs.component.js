(function () {
  'use strict';

  angular.module('AngularJsModule').component('angularjsComponent', {
    template: `
    <div class="ng1">
      ** AngularJS - written in AngularJS and upgraded to Angular
      <br>
      <span class="red-font">You should see this in red if css is working.</span>
      <div class="transclude">
        below is transcluded
        <ng-transclude></ng-transclude>
      </div>
      <br>
      counter: {{$ctrl.counter}}
      <button ng-click="$ctrl.multiply(2)">Double</button>
      <br>
      Bound via a two-way binding: <input ng-model="$ctrl.twoWay">
      <br>
      <button ng-click="$ctrl.notifyMessage('hi')">Notify Message Click 3 times, If alert, then AngularJS Service in AngularJS working - no upgrade needed just link to the js file from angular.json</button>
      </div>
    `,
    bindings: {
      counter: `<`,
      multiply: '&',
      twoWay: '='
    },
    controller: ['notifyService', componentController]
  }
  );

  function componentController(notifyService) {
    this.notifyMessage = function(msg) {
      notifyService.notify(msg);
    };
  }

})();