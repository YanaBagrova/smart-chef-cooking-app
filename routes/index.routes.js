const express = require('express');
const router = express.Router();
const vision = require('@google-cloud/vision');

async function detectImg(imgsrc) {
  const client = new vision.ImageAnnotatorClient();
  const [result] = await client.labelDetection(imgsrc);
  const labels = result.labelAnnotations;
  return labels;
}

router.post('/', async (req, res) => {
  const { image } = req.body;
  const plus = `./public${image}`;
  const labels = await detectImg(plus);
  res.json(labels)
  res.render('index', { labels });
});

router.get('/', async (req, res) => {
  const { img } = req.query;
  const plus = `./public${img}`;
  const labels = await detectImg(plus);
  res.render('index', { labels });
});

module.exports = router;
