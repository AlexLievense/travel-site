import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.siteHeader = $('.site-header');
    this.menuIcon = $('.site-header__menu-icon');
    this.menuContent = $('.site-header__menu-content');
    this.title = $('.large-hero__title');
    this.subtitle = $('.large-hero__subtitle');
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu(){
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header__is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    this.title.toggleClass("large-hero__title-invisible");
    this.subtitle.toggleClass("large-hero__subtitle-invisible");
  }
}

export default MobileMenu;
