
document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('choose')) {
    let jsonResponse;
    const image = event.target.parentElement.querySelector('.image')?.getAttribute("src");
    const imgsrc = encodeURIComponent(image);
    window.location.href = `/index?img=${imgsrc}`;
    try {
      const response = await fetch('/index', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image,
        }),
      });
      jsonResponse = await response.text();
      console.log(jsonResponse);
    } catch (e) {
      console.error(e);
    }
    if (jsonResponse.labels) {
      window.location.href = `/index`;
      alert('Выберите название продукта');
    } else {
      alert('Ошибка');
    }
  }
});

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('chooseWord')) { 
    const rightWord = event.target.parentElement.querySelector('.rightWord')?.innerText;
    try {
      const response = await fetch(`/findRecipe/${rightWord}`)
      jsonResponse = await response.text();
    } catch (e) {
      console.error(e);
    }
    if (jsonResponse) {
      window.location.href = '/recipes'
    } else {
      alert('Нет рецептов с такими ингредиентами');
      window.location.href = '/';
    }
  }
});

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('dish')) {
    let jsonResponse;
    const nameDish = event.target.parentElement.querySelector('.nameDish')?.innerText;
    try {
      const response = await fetch(`/chosenDish/${nameDish}`,);
      jsonResponse = await response.json();
    } catch (e) {
      console.error(e);
    }
    if (jsonResponse.found) {
      window.location.href = `/cook`;
      alert('Насладитесь блюдами, приготовленными по нашим рецептам');
    } else {
      alert('Нет блюд с выбранными ингредиентами');
    }
  }
});
