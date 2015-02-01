var photoGalleryControllers = angular.module('photoGalleryControllers', []);


photoGalleryControllers.controller('HeaderController',[function($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}]);
