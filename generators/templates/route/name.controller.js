'use strict';

(function() {

  class <%= classedName %>Controller {

    constructor() {
      this.message = 'Hello world!';
    }
  }

  angular.module('<%= scriptAppName %>')
    .controller('<%= classedName %>Ctrl', <%= classedName %>Controller);

})();
