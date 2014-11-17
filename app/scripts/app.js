'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', []);

angular.config(function ($routeProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'views/_masterpass.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
