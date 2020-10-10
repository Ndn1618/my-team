var elSiteHeader = document.querySelector('.site-header');
var elSiteHeaderToggler = document.querySelector('.site-header__nav-toggler');
var elSiteMain = document.querySelector('.director');
var elSiteMainToggler = document.querySelector('.director__card-toggle');

elSiteHeaderToggler.addEventListener('click', function () {
  elSiteHeader.classList.toggle('site-header--open');
});

elSiteMainToggler.addEventListener('click', function () {
  elSiteMain.classList.toggle('director--open');
});

elSiteMainToggler.addEventListener('click', function () {
  elSiteMainToggler.classList.toggle('director__card-toggle--close');
});