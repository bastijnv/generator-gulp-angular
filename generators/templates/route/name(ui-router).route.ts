/** @ngInject */
export function <%= cameledName %>RouterConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
$stateProvider
  .state('<%= name %>', {
    url: '<%= route %>',
    templateUrl: '<%= htmlUrl %>',
    controller: '<%= classedName %>Controller'
  });
}
