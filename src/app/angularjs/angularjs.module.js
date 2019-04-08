(function() {
  'use strict';

  // Access global AngularJS 1.x object
  const m = angular.module('AngularJsModule', []);

  m.run([
    '$templateCache',
    '$templateRequest',
    function($templateCache, $templateRequest) {
      // $templateCache.put('haha', '<b>Hello Angular Chi</b>test');
      var templateUrlList = [
        'assets-angularjs.component.html'
      ];
      templateUrlList.forEach(function(templateUrl) {
        if ($templateCache.get('assets-angularjs.component.html') === undefined) {
         $templateRequest('assets/angularjs.component.html').then(function(templateContent) {
           console.log('tem con', templateContent);
            $templateCache.put('assets-angularjs.component.html', '<b>Hello Angular Chi</b>test');
      });
        }
      });
    }
  ]);
})();
