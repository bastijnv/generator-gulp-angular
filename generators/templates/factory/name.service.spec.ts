import { <%= classedName %> } from './<%= cameledName %>.service';

'use strict';

describe('Service: <%= cameledName %>', () => {

  // load the factory's module
  beforeEach(angular.mock.module('<%= scriptAppName %>'));

  it('should be registered', inject((<%= cameledName %>: <%= classedName %>) => {
    expect(<%= cameledName %>).not.toBeNull();
  }));

  describe('getContributors function', () => {
    it('should return the meaning of life', inject((<%= cameledName %>: <%= classedName %>) => {
      expect(<%= cameledName %>.getMeaningOfLife()).toEqual(42);
    }));

  });

});

