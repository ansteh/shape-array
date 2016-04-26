'use strict';
const shape = require('../../lib/index.js');
const resource = require('../resources.js');

const get = (key) => {
  return {
    input: resource[key].input.value,
    scheme: resource[key].input.scheme,
    output: resource[key].output
  }
};

describe("example", function() {
  it("readme to json", function() {
    let person = get('person');
    let scheme = shape.scheme(person.scheme);
    expect(scheme(person.input)).toEqual(person.output);
  });

  it("readme to array", function() {
    let person = get('person');
    let reverse = shape.reverse(person.scheme);
    expect(reverse(person.output)).toEqual(person.input);
  });
});
