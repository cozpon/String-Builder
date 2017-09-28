// jshint esversion: 6

const chai = require("chai");
const expect = chai.expect; // short handing "expect" instead of chai.expect
const should = chai.should(); // short handing "should();"
const StringBuilder = require("../string-builder");

let sb;

before(function (){
  sb = new StringBuilder('test');
});

describe('StringBuilder', function () {

  it('should be a function', function () {
    StringBuilder.should.be.a('function');
  });
});

describe('normalString', function() {
  it('should be a string', function () {
    let sb = new StringBuilder('  test  ');
    sb.normalString().should.equal('test');
  });
});

describe('reverse', function() {
  it("should return reversed string", function () {
    sb.reverse().should.equal("tset");
  }); 
});

describe('capitalize', function() {
  it("should capitalize first letter of every word", function() {
    sb.capitalize().should.equal("Test");
  });
});

describe('toArray', function() {
  it("should turn String into an array", function() {
    sb.toArray().should.equal(["test"]);
  });
});

