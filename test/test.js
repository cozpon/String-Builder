// jshint esversion: 6

const chai = require("chai");
const expect = chai.expect; // short handing "expect" instead of chai.expect
const should = chai.should(); // short handing "should();"
const StringBuilder = require("../string-builder");

let sb;
let sbThree;

beforeEach(function (){
  sb = new StringBuilder('test pilot');
  sbThree = new StringBuilder("test pilot foo");
});

describe('StringBuilder', function () {

  it('should be a function', function () {
    StringBuilder.should.be.a('function');
  });
});

describe('normalString', function() {

  it('should be a string', function () {
    let sb = new StringBuilder('');
    expect(sb.normalString()).to.be.a('string');
  });

  it('should be spaceless on both ends', function () {
    let sb = new StringBuilder('  test pilot  ');
    sb.normalString().should.equal('test pilot');
  });
});


describe('reverse', function() {
  it("should return reversed string", function () {
    sb.reverse().should.equal("tolip tset");
  });
});

describe('capitalize', function() {
  it("should capitalize first letter of every word", function() {
    sb.capitalize().should.equal("Test Pilot");
    sbThree.capitalize().should.equal("Test Pilot Foo");
  });
});

describe('toArray', function() {
  it("should turn String into an array", function() {
    sb.toArray().should.deep.equal(['test', 'pilot']);
  });
});

describe('append', function() {
  it("should append to end of string", function() {
    sb.append("baz").should.equal("test pilot baz");
  });
});

describe("toString", function() {

  it("should have 'SB:' at beginning of string", function() {
    sb.append("baz");
    sb.toString().should.equal("SB: test pilot baz");

  });
});
