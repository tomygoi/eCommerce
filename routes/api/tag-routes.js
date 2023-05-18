const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [{model: Product}]
    });
   res.status(200).json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tagId = req.params.id;

  try { 
    const tag = await Tag.findOne({
      where: {id: tagId},
      include: [{model: Product}]
    });
    if (!tag) {
      return res.status(404).json({message: 'Tag not found'});
    }
    res.status(200).json(tag);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
const {tag_name} = req.body;
const newTag = await Tag.create({tag_name});

return res.status(201).json(newTag);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagId  = req.params.id;
    const {tag_name} = req.body;
    const updatedRows = await Tag.update(
      {tag_name},
      {where: {id: tagId}}
    );
    if (updatedRows[0] === 0) {
      return res.status(404),json({message: 'Category not found'});
    }
    return res.status(200).json({message: 'Tag updated successfully'});
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const tagId = req.params.id;

  try {
    const deletedRows = await Tag.destroy({
      where: {
        id: tagId
      }
    });
    if (deletedRows === 0) {
      return res.status(404).json({error: 'Tag not found'});
    }
    return res.status(200).json({message: 'Tag deleted successfully'});
  } catch (error) {
    console.error('Error deleting tag:', error);
    return res.status(500).json({error: 'Internal server error'});
  }
});

module.exports = router;
