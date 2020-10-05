var elSiteHeader = document.querySelector('.site-header');
var elSiteHeaderToggler = document.querySelector('.site-header__nav-toggler');

elSiteHeaderToggler.addEventListener('click', function () {
  elSiteHeader.classList.toggle('site-header--open');
});