/** @ngInject */
export function <%= cameledName %>(): angular.IDirective {

  return {
    templateUrl: '<%= htmlUrl %>',
    restrict: 'EA',
    controller: <%= classedName %>Controller,
    controllerAs: '<%= cameledName %>',
    bindToController: true,
    link: linkFunc
  };

}

/** @ngInject */
function linkFunc(scope: angular.IScope, el: JQuery, attr: any, controller: <%= classedName %>Controller) {
  // to be implemented.
}

/** @ngInject */
export class <%= classedName %>Controller {
  public message: string;
  constructor() {
    this.message = 'Hello world!';
  }
}
