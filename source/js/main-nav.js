  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');
  var pageHeader = document.querySelector('.page-header__wrapper');

  pageHeader.classList.remove('wrapper--opened');
  mainMenu.classList.remove('main-nav--opened');
  mainMenu.classList.add('main-nav--closed');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });