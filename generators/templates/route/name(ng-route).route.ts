/** @ngInject */
export function <%= cameledName %>RouterConfig($routeProvider: angular.route.IRouteProvider) {
  $routeProvider
    .when('<%= route %>', {
      templateUrl: '<%= htmlUrl %>',
      controller: '<%= classedName %>Controller',
      controllerAs: '<%= cameledName %>'
    });
}
