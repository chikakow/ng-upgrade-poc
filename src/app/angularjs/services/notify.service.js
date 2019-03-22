(function() {
  'use strict';

  angular.module('AngularJsModule').service('notifyService', [
    '$window',
    function(win) {
      var msgs = [];
      return {
        notify: function(msg) {
          msgs.push(msg);
          if (msgs.length === 3) {
            win.alert(msgs.join('\n'));
            msgs = [];
          }
        }
      };
    }
  ]);
})();
