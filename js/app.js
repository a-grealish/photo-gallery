var photoGalleryApp = angular.module('photoGalleryApp', [
	'ngRoute',
	'photoGalleryControllers',
  'imageController',
  'xeditable'
]);

photoGalleryApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

photoGalleryApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/home.html'
      }).
      when('/category/:catId/image/:imageId', {
        templateUrl: 'views/image.html',
        controller: 'imageController'
      }).
      otherwise({
        templateUrl: 'views/404.html'
      });
}]);
