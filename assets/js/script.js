const el = {
  btnMenuMobile: document.querySelector('.nav__iconMobile'),
  menusList: document.querySelector('.nav-menus'),
}

el.btnMenuMobile.addEventListener('click', function(e) {
  const iconOpenPath = './assets/images/icons/icon-hamburger.svg';
  const iconClosePath = './assets/images/icons/icon-close.svg';

  if (this.getAttribute('src') === iconOpenPath) {
    this.setAttribute('src', iconClosePath);
    el.menusList.style.transform = 'scaleY(1)';
    document.body.style.overflow = 'hidden';
  } else {
    this.setAttribute('src', iconOpenPath);
    el.menusList.style.transform = '';
    document.body.style.overflow = '';
  }
});