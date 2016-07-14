"use strict";

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