'use strict';
const shape = require('../../index.js');
const resource = require('../resources.js');

const get = (key) => {
  return {
    value: resource[key].input.value,
    other: resource[key].input.other,
    output: resource[key].output
  }
};

describe("todo", function() {
  it("readme example", function() {
    let test = get('person');
    let gen = shape.scheme(test.other);
    expect(gen(test.value)).toEqual(test.output);
  });
});
