'use strict';

angular.module('app').controller('SignInCtrl', function($scope, $location) {
    $scope.submit = function () {
    	$location.path('/dashboard');
    }
});