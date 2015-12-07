import { <%= classedName %>Service } from './<%= cameledName %>.service';

'use strict';

describe('Service: <%= cameledName %>', () => {

  // load the service's module
  beforeEach(angular.mock.module('<%= scriptAppName %>'));

  // instantiate service
  var <%= cameledName %>;
  beforeEach(inject((<%= cameledName %>: <%= classedName %>Service) => {
    <%= cameledName %> = <%= cameledName %>;
  }));

  it('should be registered', inject((<%= cameledName %>: <%= classedName %>Service) => {
    expect(<%= cameledName %>).not.toEqual(null);
  }));
});
