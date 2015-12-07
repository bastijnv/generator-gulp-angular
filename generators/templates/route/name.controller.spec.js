'use strict';

describe('Controller: <%= classedName %>Controller', function() {

  // load the controller's module
  beforeEach(module('<%= scriptAppName %>'));

  var scope;
  var <%= classedName %>Controller;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();

    <%= classedName %>Controller = $controller('<%= classedName %>Controller', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the controller', function() {
    expect(<%= classedName %>Controller.message).toEqual('Hello world!');
  });
});
