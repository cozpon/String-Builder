// jshint esversion: 6

const chai = require("chai");
const expect = chai.expect; // short handing "expect" instead of chai.expect
const should = chai.should(); // short handing "should();"
const StringBuilder = require("../string-builder");


describe('StringBuilder', function () {
  let sb;

  before(function (){
    sb = new StringBuilder('test');
  });


  it('should be a function', function () {
    StringBuilder.should.be.a('function');
  });

  it('should be a string', function () {
    let sb = new StringBuilder('  test  ');
    sb.normalString().should.equal('test');
  });

  it("should return reversed string", function () {
    sb.reverse().should.equal("tset");
  });

});
