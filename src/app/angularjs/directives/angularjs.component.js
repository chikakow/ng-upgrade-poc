(function () {
  'use strict';

  
//   var htmlC = require(['text!angularjs.component.html'], function(t) {
//     console.log('html is', t);

//     angular.module('AngularJsModule').component('angularjsComponent', {
//       template: t,
//       bindings: {
//         counter: `<`,
//         multiply: '&',
//         twoWay: '='
//       },
//       controller: [ componentController]
//     }
//     );
    
//     function componentController() {
//       this.notifyMessage = function(msg) {
//       //  notifyService.notify(msg);
//       };
//     }
    

// });


angular.module('AngularJsModule').component('angularjsComponent', {
  template: `<div ng-include="./angularjs.component.html"></div>`,
  bindings: {
    counter: `<`,
    multiply: '&',
    twoWay: '='
  },
  controller: [ componentController]
}
);

function componentController() {
  this.notifyMessage = function(msg) {
  //  notifyService.notify(msg);
  };
}




})();