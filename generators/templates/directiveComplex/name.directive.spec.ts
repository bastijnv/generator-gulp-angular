import { <%= classedName %>Controller } from './<%= cameledName %>.directive';

/**
 * @todo Complete the test
 * This example is not perfect.
 */
describe('directive <%= cameledName %>', function() {
  let <%= cameledName %>Controller: <%= classedName %>Controller;
  let element: angular.IAugmentedJQuery;

  beforeEach(angular.mock.module('<%= scriptAppName %>'));

  beforeEach(inject(($compile: angular.ICompileService, $rootScope: angular.IRootScopeService) => {
    element = angular.element(`
      <<%= lodash.dasherize(name) %>></<%= lodash.dasherize(name) %>>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    <%= cameledName %>Controller = (<any> element.isolateScope()).<%= cameledName %>;
  }));

  it('should be compiled', function() {
    expect(element.html()).not.toEqual(null);
  });

  it('should have isolate scope object with instanciate members', function() {
    expect(<%= cameledName %>Controller).not.toBeNull();
    expect(<%= cameledName %>Controller.message).toEqual('Hello world!');
  });
});
