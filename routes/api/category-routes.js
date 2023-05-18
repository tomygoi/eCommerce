const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: [Product]
    });
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryId = req.params.id;
    const category = await Category.findOne({
      where: {id: categoryId}, 
      include: [{ model: Product }]
    });
    if (!category) {
      res.status(404).json({ message: 'Category not found'});
      return;
    }
    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const {category_name} = req.body;
    const newCategory = await Category.create({category_name});

    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryId = req.params.id;
    const { category_name } = req.body;
    const updatedRows = await Category.update(
      {category_name},
      {where: {id: categoryId}}
    );
    if (updatedRows[0] === 0) {
      res.status(404).json({message: 'Category not found'});
      return;
    }

    res.status(200).json({message: 'Category updated successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryId = req.params.id;

  try {
    deletedCategory = await Category.destroy({
      where: { 
        id: categoryId
      }
    });
    if (deletedCategory === 0) { 
      return res.status(404).json({error: 'Category not found'});
    }
    return res.status(200).json({message: 'Category deleted successfully'});
  } catch (error) {
    console.error('Error deleting category:', error);
    return res.status(500).json({error: 'Internal server error'});
  }

});

module.exports = router;
