import { <%= classedName %>Controller } from './<%= cameledName %>.controller';

describe('controllers', () => {
  let <%= cameledName %>Controller: <%= classedName %>Controller;

  beforeEach(angular.mock.module('<%= scriptAppName %>'));

  beforeEach(inject(($controller: angular.IControllerService) => {
    <%= cameledName %>Controller = $controller('<%= classedName %>Controller');
  }));

  it('should have a welcome message', () => {
    expect(<%= classedName %>Controller.welcomeMessage).toEqual('Hello world!');
  });
});
