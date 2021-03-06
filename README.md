## Smart chef

### Web-приложение для быстрого поиска кулинарных рецептов

Данное приложение разработано для быстрого поиска кулинарных рецептов по фотографии продукта. Оно включает в себя клиентскую и серверную части. Проект задумывался, как функциональное веб-приложение, генерирующее название и фото рецепта, ингредиенты, инструкции и время приготовления,пищевую ценность готового блюда по клику на фото продукта.

- Блок основной страницы
![main](/images/main.jpeg)

- Блок страницы с выводом слов, сгенерированнных API по фото
![words](/images/words.jpeg)

- Страница с рецептами на выбор
![recipes](/images/recipes.jpeg)

- Выбранный рецепт с подробной информацией
![final](/images/final.jpeg)
![recipe](/images/recipe.jpeg)

## Стек технологий:
JavaScript

**Back**: Node.js, Express, Axios

**Front**: Handlebars, HTML, CSS

**Сторонние API**: 
- RecipesAPI (rapidapi.com),
- Recipe (rapidapi.com),
- Google Cloud Vision API;

## Планы развития:
* Полнофункциональное приложение для поиска рецептов по фото клиента (клиент делает фото имеющихся под рукой продуктов, загружает фото в приложение, приложение генерирует рецепты по названию ингредиентов на фото)
* Подключение следующих API: 
- API для определения нескольких объектов на фото,
- API для перевода текста с английского языка на русский,
- API для загрузки фотографий с устройства пользователя в приложение,
* Адаптация приложения под все виды устройств.

### Установка:
в корне проекта:
* npm start
