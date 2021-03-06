var app = angular.module('mainModule', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
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
    .otherwise({
      templateUrl: '404.html',
      controller: 'mainControl'
    });

    $locationProvider.html5Mode(true);
});

app.controller('mainControl', function() {

});
