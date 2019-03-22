(function() {
  'use strict';

  angular.module('AngularJsModule').service('stringService', function() {
    return {
      getString: function() {
        return `Howdie I'm from AngularJs service injected into AngularJs Service Not Registered in Angular`;
      }
    };
  });
})();
