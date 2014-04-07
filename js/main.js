'use strict';


var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/sign-in.html',
            controller  : 'SignInCtrl'
        })
        .when('/sign-up', {
            templateUrl : 'pages/sign-up.html',
            controller  : 'SignUpCtrl'
        })
        .when('/dashboard', {
            templateUrl : 'pages/dashboard.html',
            controller  : 'DashboardCtrl'
        });
});

app.controller('headerController', function($scope, $location) { 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});

