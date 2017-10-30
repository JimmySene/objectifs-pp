angular.module('objectifs-pp').config(['$locationProvider', '$routeProvider',
function config($locationProvider, $routeProvider) {
  $routeProvider.when('/', {
    template: '<objectifs-pp></objectifs-pp>'
  }).otherwise('/');
}]);
