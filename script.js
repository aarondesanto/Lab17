var app = angular.module('mainModule', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'newpage.html',
      controller: 'mainControl'
    })
    .when('/dog', {
      templateUrl: 'newpage2.html',
      controller: 'mainControl'
    })
    .when('/wolf', {
      templateUrl: 'wolf.html',
      controller: 'mainControl'
    })
    .when('/fox', {
      templateUrl: 'fox.html',
      controller: 'mainControl'
    })
    .otherwise({ redirectTo: '/404.html' });
});

app.controller('mainControl', function() {

});
