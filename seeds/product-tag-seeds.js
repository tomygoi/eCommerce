const { ProductTag } = require('../models');

const productTagData = [
  {
    product_id: 1,
    tag_id: 1,
   }
  // ,{
  //   product_id: 1,
  //   tag_id: 1,
  // },
  // {
  //   product_id: 1,
  //   tag_id: 1,
  // },
  // {
  //   product_id: 2,
  //   tag_id: 1,
  // },
  // {
  //   product_id: 3,
  //   tag_id: 1,
  // },
  // {
  //   product_id: 3,
  //   tag_id: 1,
  // },
  // {
  //   product_id: 3,
  //   tag_id: 1,
  // },
  // {
  //   product_id: 3,
  //   tag_id: 1,
  // },
  // {
  //   product_id: 4,
  //   tag_id: 1,
  // },
  // {
  //   product_id: 4,
  //   tag_id: 1,
  // },
  // {
  //   product_id: 4,
  //   tag_id: 1,
  // },
  // {
  //   product_id: 5,
  //   tag_id: 1,
  // },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
