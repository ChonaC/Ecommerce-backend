const { category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Pants',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Jackets',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => category.bulkCreate(categoryData);

module.exports = seedCategories;