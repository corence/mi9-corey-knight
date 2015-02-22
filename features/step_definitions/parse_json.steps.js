
'use strict';
var ShowParser = require("../../scripts/model/show-parser.js");
var chai = require("chai");

chai.should();

module.exports = function() {
	var parsed = null;
	var result = null;
	
	var show = {
				"image": {
									"showImage": "http://catchup.ninemsn.com.au/img/jump-in/shows/16KidsandCounting1280.jpg"
				},
				"slug": "show/16kidsandcounting",
				"title": "16 Kids and Counting",
	};
	var doc = {"payload": [show]};
	
	this.When(/^an empty document is passed$/, function (callback) {
		parsed = ShowParser.parse_shows("{}");
		//result = ShowParser.extract_available_shows({});
		callback();
	});

	this.Then(/^return an empty response list$/, function (callback) {
		result.should.have.property("response");
		result.response.should.be.instanceof(Array);
		result.response.length.should.equal(0);
		callback();
	});

	this.When(/^a document is passed with no drm and with episodes available$/, function (callback) {
		show.drm = false;
		show.episodeCount = 1;
		result = ShowParser.extract_available_shows(doc);
		callback();
	});

	this.When(/^a document is passed with drm and with no episodes available$/, function (callback) {
		show.drm = true;
		show.episodeCount = 0;
		result = ShowParser.extract_available_shows(doc);
		callback();
	});

	this.When(/^a document is passed with drm and with episodes available$/, function (callback) {
		show.drm = true;
		show.episodeCount = 3;
		result = ShowParser.extract_available_shows(doc);
		callback();
	});

	this.Then(/^return a populated response list$/, function (callback) {
		result.should.have.property("response");
		result.response.should.be.instanceof(Array);
		result.response.length.should.be.greaterThan(0);
		result.response[0].image.should.be.a('string');
		result.response[0].slug.should.be.a('string');
		result.response[0].title.should.be.a('string');
		Object.keys(result.response[0]).length.should.equal(3);
		callback();
	});

	this.When(/^a non\-json document is passed$/, function (callback) {
		parsed = ShowParser.parse_shows("{something{");
		callback();
	});

	this.Then(/^parsing should return an error$/, function (callback) {
		parsed.should.be.a('string');
		callback();
	});
	
	this.When(/^a document is passed with many shows in it$/, function (callback) {
		callback.pending();
	});

	this.Then(/^return a populated response list with many shows in it$/, function (callback) {
		callback.pending();
	});
};
