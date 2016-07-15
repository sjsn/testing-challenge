"use strict";

var myApp = angular.module('formApp', []);

myApp.controller('formCtrl', ["$scope", function($scope){


	$scope.clearForm = function() {
		$scope.submit = false;
	};

	$scope.submitForm = function() {
		$scope.submit = true;
	};

}]);
