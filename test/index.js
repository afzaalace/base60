/*jshint mocha: true*/
var should = require('should'),
	path = require('path'),
	Base60 = require(path.join(__dirname, '../index.js'));

describe('Base60', function() {
	it("should return 0", function(done) {
		var res = Base60.encode(0);
		res.should.equal("0");
		done();
	});
	it("should return 4ehm", function(done) {
		var res = Base60.encode(915442);
		res.should.equal("4ehn");
		done();
	});
	it("should return 19936", function(done) {
		var res = Base60.decode("5xg");
		res.should.equal(19876);
		done();
	});
	it("should return rmnO - base62 ", function(done) {
		Base60.setCharacterSet("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
		var res = Base60.encode(6520900);
		res.should.equal("rmnO");
		done();
	});
	it("should return error ", function(done) {
		should.throws(function() {
			Base60.setCharacterSet("000123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
		}, /You must use unique characters\./, "Did not throw message.");
		done();
	});
});
