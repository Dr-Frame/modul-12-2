const refs = {
  articleContainer: document.querySelector('.js-articles'),
  searchForm: document.querySelector('.js-search-form'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
  loadMoreBtnLabel: document.querySelector(
    'button[data-action="load-more"] > .label',
  ),
  loadMoreBtnSpinner: document.querySelector(
    'button[data-action="load-more"] > .spinner',
  ),
  spinner: document.querySelector('#spinner'),
};

export default refs;
