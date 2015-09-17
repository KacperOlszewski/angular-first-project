var app = angular.module('ExcerciseApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'Step1Controller', 
      templateUrl: 'views/step1.html' 
    })
  	.when('/step2/', {
      controller: 'Step2Controller', 
      templateUrl: 'views/step2.html' 
  	})
    .otherwise({ 
      redirectTo: '/' 
    }); 
});