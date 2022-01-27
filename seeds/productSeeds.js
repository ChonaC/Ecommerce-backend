const { product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Sweat Pants',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Baseball Cap',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Leather Jacket',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Athletic Shoes',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => product.bulkCreate(productData);

module.exports = seedProducts;