const express = require('express');
const router = express.Router();
router.get('/', async (req, res) => {
  const recipes = res.locals.recipes;
  res.render('recipes', { recipes });
})

module.exports = router;
