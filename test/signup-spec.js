'use strict';

describe("Submit form button", function() {

	// Opens the browser to the form
	browser.get("http://localhost:8080/#/");
	var submitButton = element(by.css("#submit"));

	it("should submit the form", function() {

		expect(submitButton/* + something */).toEqual(/* something */);

	});

	it("should not be clickable when form is blank", function() {

		expect(submitButton.isEnabled()).toEqual(false);

	});

});


describe('Signup Angular module and controller', function(){
	it('should have', function(){

	});
	it('should check controller', function(){

	});
});

describe('Sign up Form', function() {
	
	it('should be valid if email is valid', function(){
		var emailInput = element(by.css("#email"));
		var button = element(by.css("#submit"));
		//should be invalid if empty
		emailInput.sendKeys('');
		expect(button.isEnabled()).toEqual(false);

		//should be invalid if not proper format
		emailInput.clear(); 
		emailInput.sendKeys('aaa');
		expect(button.isEnabled()).toEqual(false);

		//should be valid if email is valid
		emailInput.clear(); 
		emailInput.sendKeys('cat@gmail.com');
		expect(button.isEnabled()).toEqual(true);
	});


});