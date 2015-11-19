var app = angular.module('mainModule', ['ngRoute']);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
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
    .otherwise({ redirectTo: '/404.html'
  });

  $locationProvider.html5Mode(true);

}]);

app.controller('mainControl', function() {

});
