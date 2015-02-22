
'use strict';
var chai = require("chai");

chai.should();

module.exports = function() {
	this.When(/^an empty document is passed$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^return an empty document$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.When(/^a document is passed with no drm and with (\d+) episodes$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.When(/^a document is passed with drm and with (\d+) episodes$/, function (arg1, callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^return a populated document$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.When(/^a non\-json document is passed$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});

	this.Then(/^raise an exception$/, function (callback) {
		// Write code here that turns the phrase above into concrete actions
		callback.pending();
	});
};
