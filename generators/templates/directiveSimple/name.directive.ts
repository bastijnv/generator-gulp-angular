/** @ngInject */
export function <%= cameledName %>(): angular.IDirective {

  return {
    template: '<div></div>',
    restrict: 'EA',
    link: linkFunc
  };

}

/** @ngInject */
function linkFunc(scope: angular.IScope, el: angular.IAugmentedJQuery, attr: angular.IAttributes) {
  el.text('this is the <%= cameledName %> directive');
}
