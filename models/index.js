// import models
const product = require('./product');
const category = require('./catergory');
const tag = require('./tag');
const productTag = require('./productTag');

// Products belongsTo Category
product.belongsTo(category, {
  foreignKey: 'category_id',
});

// Categories have many Products
category.hasMany(product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
product.belongsToMany(tag, {
  through: productTag,
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
tag.belongsToMany(product, {
  through: productTag,
  foreignKey: 'tag_id'
});

module.exports = {
  product,
  category,
  tag,
  productTag,
};