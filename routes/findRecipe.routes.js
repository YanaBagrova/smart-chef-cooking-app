const express = require('express');
const router = express.Router();
const axios = require("axios").default;

router.get('/:rightWord', async (req, res) => {
  const { rightWord } = req.params;
  console.log('PEREDAEM NAZVANIJE INGREDIENTA V RYTTT', rightWord);
  var options = {
    method: 'GET',
    url: 'https://webknox-recipes.p.rapidapi.com/recipes/findByIngredients',
    params: {ingredients: rightWord, number: '5'},
    headers: {
      'x-rapidapi-host': 'webknox-recipes.p.rapidapi.com',
      'x-rapidapi-key': '8424753c03mshe24b71e5407b9b1p182014jsn9a76ca015b17'
    }
  };
  const response = await axios(options);
  let recipes = [];
  for (let item of response.data) {
    recipes.push({title: item.title, image: item.image});
  }
  req.session.recipes = recipes;
  res.locals.recipes = req.session.recipes;
  return res.json({found: true, recipes });
});

module.exports = router;
