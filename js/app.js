"use strict";

var myApp = angular.module('formApp', []);

myApp.controller('formCtrl', ["$scope", function($scope){


	$scope.clearForm = function() {
		$scope.submit = false;
	};

	$scope.submitForm = function() {
		$scope.submit = true;
	};

	$scope.passConf = function() {
		
		/*
		if ($scope.password != $scope.passwordConf) {
			$scope.password.$setValidity('unique', false);
			$scope.passwordConf.$setValidity('unique', false);
		}
		else {
			$scope.password.$setValidity('unique', true);
			$scope.passwordConf.$setValidity('unique', true);
		}
*/
	};
	

}]);
