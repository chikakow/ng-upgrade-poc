(function() {
  'use strict';

  angular.module('AngularJsModule').service('notifyService', [
    '$window',
    'stringService',
    function(win, stringService) {
      var msgs = [];
      return {
        notify: function(msg) {
          msgs.push(msg);
          if (msgs.length === 3) {
            msgs.push(stringService.getString());
            win.alert(msgs.join('\n'));
            msgs = [];
          }
        }
      };
    }
  ]);
})();
