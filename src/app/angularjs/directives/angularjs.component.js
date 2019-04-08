(function () {
  'use strict';

  
//   var htmlC = require(['text!angularjs.component.html'], function(t) {
//     console.log('html is', t, angular);

//     angular.module('AngularJsModule').component('angularjsComponent', {
//       template: 'hi',
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
  templateUrl:  'assets-angularjs.component.html',
  bindings: {
    counter: `<`,
    multiply: '&',
    twoWay: '='
  },
  controller: ['$templateCache', componentController]
}
);

function componentController(cache) {
  this.notifyMessage = function(msg) {
    //console.log('cache =', cache.get('assets/angularjs.component.html'));
  //  notifyService.notify(msg);
  };
}




})();