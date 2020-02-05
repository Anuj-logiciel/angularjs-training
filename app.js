angular.module('myApp', [])
	.controller('myComponent', function($scope) {
		var todoList = this;
		todoList.myName = 'Anuj Singh';
		$scope.myRealName = 'Anuj Raghuvanshi';
	})
	.directive('myDirective', function(){
		return {
			restrict: 'E',
			scope:{},
			transclude: true,
			controller: function($scope, $element){

			},
			link: function($scope, $element) {
				
			},
			template:  '<div class="tabbable">' +
		          '<ul class="nav nav-tabs">' +
		            	'<li ng-repeat="pane in [1,2,3,4,5,6,7]" ng-class="{active:pane.selected}">'+
		              		'<a href="" ng-click="select(pane)">{{pane}}</a>' +
		            	'</li>' +
		          '</ul>' +
		          '<div class="tab-content" ng-transclude></div>' +
	        '</div>',
	        replace: true
		}
	})