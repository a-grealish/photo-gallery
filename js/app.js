var photoGalleryApp = angular.module('photoGalleryApp', [
	'ngRoute',
	'photoGalleryControllers'
]);

photoGalleryApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/home.html'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);
