angular.module('myApp', ['ui.router'])
	.run(function($templateCache){
		$templateCache.put('school.html', '<b>This is my old skool</b>')
	})
	.config(function($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'pages/home.html',
				controller: 'appController as ctrl'
			})
			.state('apply-leave', {
				url: '/apply-leave',
				templateUrl: 'pages/apply-leave.html',	
				controller: 'appController as ctrl'
			})
			.state('leaves-listing', {
				url: '/leaves-listing',
				templateUrl: 'pages/leaves-listing.html',	
				controller: 'appController as ctrl'
			})

	})
	.controller('appController', function() {
		var viewdata = this;
		viewdata.myName = 'Anuj Singh';

		viewdata.setSessionStorage = function() {
			sessionStorage.setItem("FirstName", "Smith");
		}

		viewdata.setLocalstorage = function() {
			localStorage.setItem("LastName", "Smith");
		}

		viewdata.setCookie = function() {
			document.cookie = "username=John Doe";
		}

	})