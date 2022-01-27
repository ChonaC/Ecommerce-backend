const router = require('express').Router();
const { tag, product, productTag } = require('../../models');

// The `/api/tags` endpoint

// GET all tags
router.get('/', (req, res) => {
  tag.findAll(
    {
      include: {
        model: product
      }
    }
  )
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET find a single tag by its `id`
router.get('/:id', (req, res) => {
  tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: product
    }
  })
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST create a new tag
router.post('/', (req, res) => {
  tag.create({
    tag_name: req.body.tag_name
  })
    .then(tagData => res.json(tagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT update a tag
router.put('/:id', (req, res) => {
  tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: 'No Tag found with that ID.' });
        return;
      }
      res.json(tagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE a tag by its `id` value
router.delete('/:id', (req, res) => {
  tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(tagData => {
      if (!tagData) {
        res.status(404).json({ message: 'No Tag found by that ID.' });
        return;
      }
      res.json(tagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;