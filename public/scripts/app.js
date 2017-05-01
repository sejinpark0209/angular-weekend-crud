angular
	.module('bookApp', ['ngRoute'])
	.config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
	console.log("app.js running")
	$routeProvider
		.when('/', {
			templateUrl: '../templates/books/index.html',
			controller: 'bookIndexController',
			controllerAs: 'bookIndexCtrl'
		})
		.when('/books/:id', {
			templateUrl: '../templates/books/show.html',
			controller: 'bookShowController',
			controllerAs: 'bookShowCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
}