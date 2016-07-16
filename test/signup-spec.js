'use strict';

describe("Submit form button", function() {

	//Runs this callback before each test
	beforeEach(function() {
		// Reload the page before each test to keep testing 'clean'
		browser.get('http://localhost:8080');
	});

	it("should be enabled when all fields are correctly filled in", function() {
		var submitButton = element(by.css("#submit"));
		var email = element(by.css("#email"));
		var lName = element(by.css("#lName"));
		// var date = element(by.css("#date"));
		var password = element(by.css("#password"));
		var passConf = element(by.css("#passwordConf"));

		email.sendKeys("test@email.com");
		lName.sendKeys("blah");
		// date.sendKeys("1/1/2000");
		password.sendKeys("password");
		passConf.sendKeys("password");

		expect(submitButton.isEnabled()).toEqual(true);
	});

	it("should display a submit message when input is valid and it is clicked", function() {
		var submitButton = element(by.css("#submit"));
		var email = element(by.css("#email"));
		var lName = element(by.css("#lName"));
		// var date = element(by.css("#date"));
		var password = element(by.css("#password"));
		var passConf = element(by.css("#passwordConf"));

		email.sendKeys("test@email.com");
		lName.sendKeys("blah");
		// date.sendKeys("1/1/2000");
		password.sendKeys("password");
		passConf.sendKeys("password");

		submitButton.click();
		expect(element(by.css("#confirmation")).isPresent()).toEqual(true);

	});

	it("should be disabled when form is blank", function() {
		var submitButton = element(by.css("#submit"));
		var email = element(by.css("#email"));
		var lName = element(by.css("#lName"));
		// var date = element(by.css("#date"));
		var password = element(by.css("#password"));
		var passConf = element(by.css("#passwordConf"));

		email.clear();
		lName.clear();
		// date.clear();
		password.clear();
		passConf.clear();

		expect(submitButton.isEnabled()).toEqual(false);

	});

	it("should be disabled when email is blank or invalid", function() {
		var submitButton = element(by.css("#submit"));
		var email = element(by.css("#email"));
		var lName = element(by.css("#lName"));
		// var date = element(by.css("#date"));
		var password = element(by.css("#password"));
		var passConf = element(by.css("#passwordConf"));

		email.clear();
		lName.sendKeys("blah");
		// date.sendKeys("1/1/2000");
		password.sendKeys("password");
		passConf.sendKeys("password");

		expect(submitButton.isEnabled()).toEqual(false);

		email.sendKeys("invalidemail");
		expect(submitButton.isEnabled()).toEqual(false);
	});

	it("should be disabled when last name is blank", function() {
		var submitButton = element(by.css("#submit"));
		var email = element(by.css("#email"));
		var lName = element(by.css("#lName"));
		// var date = element(by.css("#date"));
		var password = element(by.css("#password"));
		var passConf = element(by.css("#passwordConf"));

		email.sendKeys("test@email.com");
		lName.clear();
		// date.sendKeys("1/1/2000");
		password.sendKeys("password");
		passConf.sendKeys("password");

		expect(submitButton.isEnabled()).toEqual(false);
	});

	// it("should be disabled when date is blank", function() {
	// 	var email = element(by.css("#email"));
	// 	var lName = element(by.css("#lName"));
	//  var date = element(by.css("#date"));
	// 	var password = element(by.css("#password"));
	// 	var passConf = element(by.css("#passwordConf"));

	// 	email.sendKeys("test@email.com");
	// 	lName.sendKeys("blah");
	//  date.sendKeys("1/1/2000")
	// 	password.sendKeys("password");
	// 	passConf.sendKeys("password");

	// 	expect(submitButton.isEnabled()).toEqual(false);
	// });

	it("should be disabled when password is blank", function() {
		var submitButton = element(by.css("#submit"));
		var email = element(by.css("#email"));
		var lName = element(by.css("#lName"));
		// var date = element(by.css("#date"));
		var password = element(by.css("#password"));
		var passConf = element(by.css("#passwordConf"));

		email.sendKeys("test@email.com");
		lName.sendKeys("blah");
		// date.sendKeys("1/1/2000");
		password.clear();
		passConf.sendKeys("password");

		expect(submitButton.isEnabled()).toEqual(false);
	});

	it("should be disabled when password confirmation is blank", function() {
		var submitButton = element(by.css("#submit"));
		var email = element(by.css("#email"));
		var lName = element(by.css("#lName"));
		// var date = element(by.css("#date"));
		var password = element(by.css("#password"));
		var passConf = element(by.css("#passwordConf"));

		email.sendKeys("test@email.com");
		lName.sendKeys("blah");
		// date.sendKeys("1/1/2000");
		password.sendKeys("password");
		passConf.clear();

		expect(submitButton.isEnabled()).toEqual(false);
	});

	it("should be disabled when password confirmation doesn't match password", function() {
		var submitButton = element(by.css("#submit"));
		var email = element(by.css("#email"));
		var lName = element(by.css("#lName"));
		// var date = element(by.css("#date"));
		var password = element(by.css("#password"));
		var passConf = element(by.css("#passwordConf"));

		email.sendKeys("test@email.com");
		lName.sendKeys("blah");
		// date.sendKeys("1/1/2000");
		password.sendKeys("password");
		passConf.sendKeys("notthesamepassword");

		expect(submitButton.isEnabled()).toEqual(false);
	});

});

describe("Reset form button", function() {

	//Runs this callback before each test
	beforeEach(function() {
		// Reload the page before each test to keep testing 'clean'
		browser.get('http://localhost:8080');
	});

	it("should reset all inputs to blank", function() {
		var resetButton = element(by.css("#reset"));
		resetButton.click();

		var email = element(by.css("#email"));
		var fName = element(by.css("#fName"));
		var lName = element(by.css("#lName"));
		// var date = element(by.css("#date"));
		var password = element(by.css("#password"));
		var passConf = element(by.css("#passwordConf"));

		expect(email.getAttribute("value")).toEqual("");
		expect(fName.getAttribute("value")).toEqual("");
		expect(lName.getAttribute("value")).toEqual("");
		// expect(date.getAttribute("value")).toEqual("");
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
		expect(lNameInput.$valid).not.toEqual(true);
	});

	it('should be invalid if last name is touched', function() {

		var lNameInput = element(by.model('lName'));
		lNameInput.sendKeys(' ');
		lNameInput.clear();
		expect(lNameInput.$valid).not.toEqual(true);
	});

	it('should show message if last name is touched', function() {
		var lNameInput = element(by.model('lName'));
		var message = element(by.css('.help-block-lname'));
		lNameInput.sendKeys(' ');
		lNameInput.clear();
		expect(message.isPresent()).toEqual(true);
	});

});


describe('password input', function() {

	it('should be invalid if password is blank', function() {

		var pass = element(by.css('#password'));

		pass.sendKeys('');
		expect(pass.$valid).not.toEqual(true);
	});

	it('should be invalid if password is touched', function() {

		var pass = element(by.css('#password'));

		pass.sendKeys('');
		pass.clear();
		expect(pass.$valid).not.toEqual(true);
	});

	it('should be invalid if passwords do not match', function() {
		var pass = element(by.css('#password'));
		var passconf = element(by.css('#passwordConf'));

		pass.sendKeys('aaa');
		passconf.sendKeys('bbb');
		expect(pass.$valid).not.toEqual(true);
	});

	it('should show message if password is touched and invalid', function() {
		var lNameInput = element(by.model('lName'));
		var message = element(by.css('.help-block-password'));
		lNameInput.sendKeys(' ');
		lNameInput.clear();
		expect(message.isPresent()).toEqual(true);
	});

	it('should show message if password does not match password confirm', function() {
		var lNameInput = element(by.model('lName'));
		var message = element(by.css('.help-block-password2'));
		lNameInput.sendKeys(' ');
		lNameInput.clear();
		expect(message.isPresent()).toEqual(true);
	});


});

describe('password confirm input', function() {

	it('should be invalid if passwordConf is blank', function() {

		var passconf = element(by.css('#passwordConf'));
		passconf.sendKeys('');
		expect(passconf.$valid).not.toEqual(true);
	});

	it('should be invalid if password confirm is touched', function() {

		var passconf = element(by.css('#passwordConf'));
		passconf.sendKeys(' ');
		passconf.clear();
		expect(passconf.$valid).not.toEqual(true);
	});

	it('should be invalid if passwords do not match', function() {
		var pass = element(by.css('#password'));
		var passconf = element(by.css('#passwordConf'));
		pass.sendKeys('aaa');
		passconf.sendKeys('bbb');
		expect(passconf.$valid).not.toEqual(true);
	});

	it('should show message if password confirm is touched and invalid', function() {
		var lNameInput = element(by.model('lName'));
		var message = element(by.css('.help-block-passconf'));
		lNameInput.sendKeys(' ');
		lNameInput.clear();
		expect(message.isPresent()).toEqual(true);
	});

	it('should show message if password confirm does not match password', function() {
		var lNameInput = element(by.model('lName'));
		var message = element(by.css('.help-block-passconf2'));
		lNameInput.sendKeys(' ');
		lNameInput.clear();
		expect(message.isPresent()).toEqual(true);
	});


});