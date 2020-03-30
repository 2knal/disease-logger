const { Router } = require('express');

const Disease = require('../models/Disease');

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const entries = await Disease.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const disease = new Disease(req.body);
    const createdEntry = await disease.save();
    res.json(createdEntry);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
