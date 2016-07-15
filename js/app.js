"use strict";

var myApp = angular.module('formApp', []);

myApp.controller('formCtrl', ["$scope", function($scope){

	$scope.clearForm = function() {
		$scope.submit = false;
		$scope.lName = "";
		$scope.password = "";
		$scope.passwordConf = "";
	};

	$scope.submitForm = function() {
		$scope.submit = true;
	};

	$scope.passConf = function() {
		
		
		if ($scope.password != $scope.passwordConf) {
			$scope.signupForm.password.$setValidity('unique', false);
			$scope.signupForm.passwordConf.$setValidity('unique', false);
		}
		else {
			$scope.signupForm.password.$setValidity('unique', true);
			$scope.signupForm.passwordConf.$setValidity('unique', true);
		}

	};
	

}]);
