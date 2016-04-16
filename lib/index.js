'use strict';

const forEach       = require('lodash/forEach');
const split         = require('lodash/split');
const isUndefined   = require('lodash/isUndefined');
const merge         = require('lodash/merge');
const map           = require('lodash/map');
const get           = require('lodash/get');

const transform = (array, scheme) => {
  let json = {};
  forEach(array, (value, index) => {
    let path = split(scheme[index], '.', 2);

    if(path.length === 1){
      json[path[0]] = value;
    } else {
      let deepJson = transform([value], [path[1]]);
      if(isUndefined(json[path[0]])){
        json[path[0]] = deepJson;
      } else {
        json[path[0]] = merge(json[path[0]], deepJson);
      }
    }
  });
  return json;
};

const reverse = (json, scheme) => {
  return map(scheme, (path) => {
    return get(json, path);
  });
};

module.exports = {
  scheme: (scheme) => {
    return (array) => {
      return transform(array, scheme);
    };
  },
  reverse: (scheme) => {
    return (json) => {
      return reverse(json, scheme);
    };
  }
};
