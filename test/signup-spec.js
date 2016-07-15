'use strict';

describe("Submit form button", function() {

	var submitButton = element(by.css("#submit"));

	it("should display a submit message when input is valid and it is clicked", function() {

		var email = element(by.css(""));
		var lName = element(by.css("#lName"));
		var password = element(by.css("#password"));
		var passConf = element(by.css("#passwordConf"));

		email.sendKeys("test@email.com");
		lName.sendKeys("blan");
		password.sendKeys("password");
		password.sendKeys("password");

		submitButton.click();
		expect(element(by.css("#confirmation"))).isDisplayed().toBeTruthy();

	});

	it("should be disabled when form is blank", function() {

		var email = element(by.css(""));
		var lName = element(by.css("#lName"));
		var password = element(by.css("#password"));
		var passConf = element(by.css("#passwordConf"));

		email.clear();
		lName.clear();
		password.clear();
		passConf.clear();

		expect(submitButton.isEnabled()).toEqual(false);

	});

	it("should be disabled when email is blank", function() {
		var email = element(by.css(""));
		var lName = element(by.css("#lName"));
		var password = element(by.css("#password"));
		var passConf = element(by.css("#passwordConf"));

		email.clear();
		lName.sendKeys("blah");
		password.sendKeys("password");
		passConf.sendKeys("password");

		expect(submitButton.isEnabled()).toEqual(false);
	});

	it("should be disabled when last name is blank", function() {
		var email = element(by.css(""));
		var lName = element(by.css("#lName"));
		var password = element(by.css("#password"));
		var passConf = element(by.css("#passwordConf"));

		email.sendKeys("test@email.com");
		fName.sendKeys("blah");
		lName.clear();
		password.sendKeys("password");
		passConf.sendKeys("password");

		expect(submitButton.isEnabled()).toEqual(false);
	});

	it("should be disabled when password is blank", function() {
		var email = element(by.css(""));
		var lName = element(by.css("#lName"));
		var password = element(by.css("#password"));
		var passConf = element(by.css("#passwordConf"));

		email.sendKeys("test@email.com");
		lName.sendKeys("blah");
		password.clear();
		passConf.sendKeys("password");

		expect(submitButton.isEnabled()).toEqual(false);
	});

	it("should be disabled when password confirmation is blank", function() {
		var email = element(by.css(""));
		var lName = element(by.css("#lName"));
		var password = element(by.css("#password"));
		var passConf = element(by.css("#passwordConf"));

		email.sendKeys("test@email.com");
		lName.sendKeys("blah");
		password.sendKeys("password");
		passConf.clear();

		expect(submitButton.isEnabled()).toEqual(false);
	});

	it("should be disabled when password confirmation doesn't match password", function() {
		var email = element(by.css(""));
		var lName = element(by.css("#lName"));
		var password = element(by.css("#password"));
		var passConf = element(by.css("#passwordConf"));

		email.sendKeys("test@email.com");
		lName.sendKeys("blah");
		password.sendKeys("password");
		passConf.sendKeys("notthesamepassword");

		expect(submitButton.isEnabled()).toEqual(false);
	});

});

describe("Reset form button", function() {

	it("should reset all inputs to blank", function() {
		var resetButton = element(by.css("#reset"));
		resetButton.click();

		var email = element(by.css(""));
		var fName = element(by.css("#fName"));
		var lName = element(by.css("#lName"));
		var password = element(by.css("#password"));
		var passConf = element(by.css("#passwordConf"));

		expect(email.getAttribute("value")).toEqual("");
		expect(fName.getAttribute("value")).toEqual("");
		expect(lName.getAttribute("value")).toEqual("");
		expect(password.getAttribute("value")).toEqual("");
		expect(passConf.getAttribute("value")).toEqual("");
	});

	it("should disable submit button", function() {

		var resetButton = element(by.css("#reset"));
		resetButton.click();

		var submitButton = element(by.css("#submit"));

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

describe('Last name input', function() {

	it('should be invalid if last name is blank', function() {

		var lNameInput = element(by.model('lName'));
		lNameInput.sendKeys('');
		expect(lNameInput.$valid).toBe(undefined);
	});

	it('should be invalid if last name is touched', function() {

		var lNameInput = element(by.model('lName'));
		lNameInput.sendKeys(' ');
		lNameInput.clear();
		expect(lNameInput.$valid).toBe(false);
	});

});


describe('password input', function() {

	it('should be invalid if password is blank', function() {

		var pass = element(by.css('#password'));

		pass.sendKeys('');
		expect(pass.$valid).toEqual(false);
	});

	it('should be invalid if password is touched', function() {

		var pass = element(by.css('#password'));

		pass.sendKeys('');
		pass.clear();
		expect(pass.$valid).toEqual(false);
	});

	it('should be invalid if passwords do not match', function() {
		var pass = element(by.css('#password'));
		var passconf = element(by.css('#passwordConf'));

		pass.sendKeys('aaa');
		passconf.sendKeys('bbb');
		expect(pass.$valid).toEqual(false);
	});

});

describe('password confirm input', function() {

	it('should be invalid if passwordConf is blank', function() {

		var passconf = element(by.css('#passwordConf'));
		passconf.sendKeys('');
		expect(passconf.$valid).toEqual(false);
	});

	it('should be invalid if password confirm is touched', function() {

		var passconf = element(by.css('#passwordConf'));
		passconf.sendKeys(' ');
		passconf.clear();
		expect(passconf.$valid).toEqual(false);
	});

	it('should be invalid if passwords do not match', function() {
		var pass = element(by.css('#password'));
		var passconf = element(by.css('#passwordConf'));
		pass.sendKeys('aaa');
		passconf.sendKeys('bbb');
		expect(passconf.$valid).toEqual(false);
	});

});