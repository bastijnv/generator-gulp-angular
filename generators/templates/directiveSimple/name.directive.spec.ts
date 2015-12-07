'use strict';

describe('Directive: <%= cameledName %>', () => {

  // load the directive's module
  beforeEach(module('<%= scriptAppName %>'));

  var element: JQuery,
    scope: angular.IScope;

  beforeEach(inject(($rootScope: angular.IRootScopeService) => {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(($compile: angular.ICompileService) => {
    element = angular.element('<<%= lodash.dasherize(name) %>></<%= lodash.dasherize(name) %>>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the <%= cameledName %> directive');
  }));
});
