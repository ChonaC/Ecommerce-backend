const { tag } = require('../models');

const tagData = [
  {
    tag_name: 'Nike',
  },
  {
    tag_name: 'Eddie Buaer',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'Adidas',
  },
];

const seedTags = () => tag.bulkCreate(tagData);

module.exports = seedTags;