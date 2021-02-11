import './sass/styles.scss';
import updateArticlesMarkup from './js/update-articles-markup';
import newsService from './js/news-service';
import refs from './js/refs';

const loadMoreBtn = {
  enable() {
    refs.loadMoreBtn.disabled = false;
    refs.loadMoreBtnLabel.textContent = 'Показать ещё';
    refs.loadMoreBtnSpinner.classList.add('is-hidden');

    refs.loadMoreBtn.classList.remove('is-hidden');
  },
  disable() {
    refs.loadMoreBtn.disabled = true;
    refs.loadMoreBtnLabel.textContent = 'Загружаем...';
    refs.loadMoreBtnSpinner.classList.remove('is-hidden');
  },
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', fetchArticles);

function searchFormSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  newsService.query = form.elements.query.value;

  clearArticleContainer();
  newsService.resetPage();
  fetchArticles();
  form.reset();
}

function fetchArticles() {
  loadMoreBtn.disable();

  newsService.fetchArticles().then(articles => {
    updateArticlesMarkup(articles);

    loadMoreBtn.enable();
  });
}

function clearArticleContainer() {
  refs.articleContainer.innerHTML = '';
}

/* window.scrollTo({
        top: document.documentElement.offsetHeight,
        behavior: 'smooth',
      }); */
