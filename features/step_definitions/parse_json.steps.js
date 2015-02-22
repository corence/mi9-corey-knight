
'use strict';
var ShowParser = require("../../scripts/model/show-parser.js");
var chai = require("chai");

chai.should();

module.exports = function() {
	var result = null;
	
	this.When(/^an empty document is passed$/, function (callback) {
		callback.pending();
	});

	this.Then(/^return an empty document$/, function (callback) {
		callback.pending();
	});

	this.When(/^a document is passed with no drm and with episodes available$/, function (callback) {
		callback.pending();
	});

	this.When(/^a document is passed with drm and with no episodes available$/, function (callback) {
		callback.pending();
	});

	this.When(/^a document is passed with drm and with episodes available$/, function (callback) {
		var document = {"payload": [{
		            "drm": true,
		            "episodeCount": 3,
		            "image": {
						                "showImage": "http://catchup.ninemsn.com.au/img/jump-in/shows/16KidsandCounting1280.jpg"
		            },
		            "slug": "show/16kidsandcounting",
		            "title": "16 Kids and Counting",
						        }]};
		
		result = ShowParser.extract_available_shows(document);
		callback();
	});

	this.Then(/^return a populated document$/, function (callback) {
		callback.pending();
	});

	this.When(/^a non\-json document is passed$/, function (callback) {
		callback.pending();
	});

	this.Then(/^raise an exception$/, function (callback) {
		callback.pending();
	});
};
