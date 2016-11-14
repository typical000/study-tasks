var postcss = require('postcss');
var expect = require('chai').expect;

var plugin = require('../');

var test = function(input, output, opts) {
  expect(postcss([plugin(opts)]).process(input).css).to.eql(output);
};

describe('postcss-default-unit', function() {

  it('should add px as default unit', function() {
    test('a { width: 200; height: 50}', 'a { width: 200px; height: 50px}');
  });

  it('should add several units to complex property', function() {
    test('a {margin: 200 20 30 40}', 'a {margin: 200px 20px 30px 40px}');
  });

  it('should add unit to numerical properties only', function() {
    test('a {margin: 10 auto}', 'a {margin: 10px auto}');
  });

  it('adds unit, passed in options', function() {
    test('i {width: 20}', 'i {width: 20rem}', { width: 'rem' });
  });

  it('does not add a unit to 0', function() {
    test('p {margin: 0 0}', 'p {margin: 0 0}');
  });

  it('leaves numerical properties untouched', function() {
    test('div {z-index: 1}', 'div {z-index: 1}');
  });

  it('leaves numerical colors untouched', function() {
    test('i {background-color: #ec9214 }', 'i {background-color: #ec9214 }');
  });

  it('leaves calc expression untouched', function() {
    test('p { width: calc( 100% / 6 + 20px ); }', 'p { width: calc( 100% / 6 + 20px ); }');
  });

  it('leaves all expressions in parentheses untouched', function() {
    test('p { border: 2 dashed rgba( 255 , 64 , 64 , 0.3 ); }', 'p { border: 2px dashed rgba( 255 , 64 , 64 , 0.3 ); }');
  });

  it('processes comma-separated values', function() {
    test('.bg { background-size: 10 2 ,35 4,35 4, 91 61;}', '.bg { background-size: 10px 2px ,35px 4px,35px 4px, 91px 61px;}');
  });

  it('should process shash-separated values', function() {
    test('div { border-radius: 40/20 }', 'div { border-radius: 40px/20px }');
  });

  it('should not affect properties with already added default unit', function() {
    test('.close-btn {position: absolute; top: 10; right: 20px;}', '.close-btn {position: absolute; top: 10px; right: 20px;}');
  });

});
