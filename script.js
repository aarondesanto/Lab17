var app = angular.module('mainModule', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'newpage.html',
      controller: 'mainControl'
    })
    .when('/view2', {
      templateUrl: 'newpage2.html',
      controller: 'mainControl'
    })
    .otherwise({ redirectTo: '/' });
});

app.controller('mainControl', function() {

});
