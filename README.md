[![Build Status](https://api.travis-ci.org/ansteh/shape-array.svg?branch=master)](https://travis-ci.org/ansteh/shape-array)

## Install

Using npm:

```js
npm install shape-array
```

## Usage

Shape array to a json object:
```js
'use strict';
const shape = require('shape-array');
const personify = shape.scheme(['id', 'name', 'address.street', 'address.zip']);

let data = [1, 'John', 'github', '1234'];
let person = personify(data);
//person equals:
{
  id: 1,
  name: 'John',
  address: {
    street: 'github',
    zip: '1234'
  }
}
```

Reverse json to array:
```js
const reverse = shape.reverse(['id', 'name', 'address.street', 'address.zip']);

let json = {
  id: 1,
  name: 'John',
  address: {
    street: 'github',
    zip: '1234'
  }
};
let array = reverse(json);
//array equals:
[1, 'John', 'github', '1234']
```

## Related

- [shape-json](https://github.com/ansteh/shape-json) - Convert json to json with a predefined scheme
- [difference-json](https://github.com/ansteh/difference-json) - Prompt the diffrence of two json objects

## License

MIT © [Andre Stehle](https://github.com/ansteh)
