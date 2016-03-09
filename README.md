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

## License

MIT © [Andre Stehle](https://github.com/ansteh)
