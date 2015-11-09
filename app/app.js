var app = angular.module("SampleApp", ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/main.html'
    })
	
	.otherwise({
        redirectTo: '/'
      });
		
});
