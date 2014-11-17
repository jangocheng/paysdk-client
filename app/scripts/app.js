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
  .module('clientApp', ['ngRoute']);

angular
  .module('clientApp', ["ngRoute"]).config(function ($routeProvider) {
    console.log("routeprovider=" + $routeProvider);
  $routeProvider
    .when('/about', {
      templateUrl: 'views/_masterpass.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
