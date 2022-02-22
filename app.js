const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const FileStore = require('session-file-store')(session);
const userMiddlware = require('./middleware/registered');

const app = express();
const PORT = process.env.PORT || 3000;

const sessionConfig = {
  name: 'user_sid',
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
  store: new FileStore(),
};

const homeRouter = require('./routes/home.routes');
const indexRouter = require('./routes/index.routes');
const findRecipeRouter = require('./routes/findRecipe.routes');
const recipesRouter = require('./routes/recipes.routes');
const chosenDishRouter = require('./routes/chosenDish.routes');
const cookRouter = require('./routes/cook.routes');

process.env.GOOGLE_APPLICATION_CREDENTIALS="./key/imposing-timer-333211-a0182462f01c.json";

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.use(morgan('dev'));

app.use(session(sessionConfig));
app.use(userMiddlware);


app.use('/', homeRouter);
app.use('/index', indexRouter);
app.use('/findRecipe', findRecipeRouter);
app.use('/recipes', recipesRouter);
app.use('/chosenDish', chosenDishRouter);
app.use('/cook', cookRouter);

app.listen(PORT, () => console.log(`сервер запустился на порту ${PORT}`));
