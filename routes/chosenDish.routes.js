const express = require('express');
const router = express.Router();
var axios = require("axios").default;
router.get('/:nameDish', async (req, res) => {
const { nameDish } = req.params;
  var options = {
    method: 'GET',
    url: `https://recipesapi2.p.rapidapi.com/recipes/${nameDish}`,
    params: {maxRecipes: '2'},
    headers: {
      'x-rapidapi-host': 'recipesapi2.p.rapidapi.com',
      'x-rapidapi-key': '8424753c03mshe24b71e5407b9b1p182014jsn9a76ca015b17'
    }
  };
  
const cook = await axios(options);
req.session.cook = cook.data.data;
res.locals.cook = req.session.cook;
 return res.json({found: true});
})

module.exports = router;
