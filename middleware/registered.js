module.exports = (req, res, next) => {
  if (req.session) {
    res.locals.recipes = req.session.recipes;
    res.locals.cook = req.session.cook;
    // res.locals.items = req.session.items; // ne nuzhno items suda tk isp-sya odin raz a ne globaljno vezde na saite
  }
  next();
};
