'use strict';
const _ = require('lodash');

const transform = (array, scheme) => {
  let json = {};
  _.forEach(array, (value, index) => {
    let path = _.split(scheme[index], '.', 2);

    if(path.length === 1){
      json[path[0]] = value;
    } else {
      let deepJson = transform([value], [path[1]]);
      if(_.isUndefined(json[path[0]])){
        json[path[0]] = deepJson;
      } else {
        json[path[0]] = _.merge(json[path[0]], deepJson);
      }
    }
  });
  return json;
};

module.exports = {
  scheme: (scheme) => {
    return (array) => {
      return transform(array, scheme);
    };
  }
};
