const express = require('express');
const router = express.Router();
router.get('/', async (req, res) => {
  const cooks = res.locals.cook;
  const entries = Object.entries(cooks[0].nutrients)
  cooks[0].entries = entries;
  res.render('cook', { cooks });
})

module.exports = router;
