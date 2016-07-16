"use strict";

var myApp = angular.module('formApp', []);

myApp.controller('formCtrl', ["$scope", function($scope){

	$scope.clearForm = function() {
		$scope.submit = false;
		$scope.email = "";
		$scope.lName = "";
		$scope.birthdate = "";
		$scope.password = "";
		$scope.passwordConf = "";
		$scope.birthdate = "";
		$scope.age = "";
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
	
	$scope.validateBday = function() {
		var theDate = Date.parse($scope.birthdate);
		var theDateString = theDate.toString();
		if (theDateString == 'NaN') {
			$scope.signupForm.birthdate.$setValidity("validDate", false);
		}
		else {
			$scope.signupForm.birthdate.$setValidity("validDate", true);
			var today = new Date();
			var bday = new Date(theDate);
			var age = (today.getFullYear() - bday.getFullYear());
			if (today.getMonth() < bday.getMonth() || today.getMonth() == bday.getMonth() && today.getDate() < bday.getDate()) {
				age -= 1;
			}
			if (age >= 13) {
				$scope.signupForm.birthdate.$setValidity("validAge", true);
			} else {
				$scope.signupForm.birthdate.$setValidity("validAge", false);
			}
		}


	}

}]);
