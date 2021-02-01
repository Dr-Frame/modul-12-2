import './sass/styles.scss';
import updateArticlesMarkup from './js/update-articles-markup';
import fetchArticles from './js/fetch-articles';
import refs from './js/refs';

//строка запроса
/* fetch('http://hn.algolia.com/api/v1/search?query=html&tags=story')
  .then(res => res.json())
  .then(data => console.log(data)); */

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;

  refs.articleContainer.innerHTML = '';
  form.reset();

  fetchArticles(inputValue).then(updateArticlesMarkup);
});
