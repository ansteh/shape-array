module.exports = {
  person: {
    input: {
      value: [1, 'John', 'github', '1234'],
      other: ['id', 'name', 'address.street', 'address.zip']
    },
    output: {
      id: 1,
      name: 'John',
      address: {
        street: 'github',
        zip: '1234'
      }
    }
  }
};
