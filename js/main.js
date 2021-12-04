"use strict"

const start = () => {
  let isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;
  ///// SWIPER /////

  let mainHeaderSlider = new Swiper(".main-header__slider", {
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
      el: ".slider-pagination",
      clickable: true,
    },
  });

  let mainBottomSlider = new Swiper(".bottom-slider__slider", {
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
      el: ".slider-pagination",
      clickable: true,
    },
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-30%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });

  let sponsorSlider = new Swiper(".sponsor-slider", {
    slidesPerView: 6,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    navigation: {
      nextEl: ".sponsor-slider__next",
      prevEl: ".sponsor-slider__prev",
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 5
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 10
      },
      // when window width is >= 640px
      1660: {
        slidesPerView: 6,
        spaceBetween: 10
      }
    }
  });

  let productSliderInside = new Swiper(".product__slider", {
    effect: "creative",
    loop: true,
    disableOnInteraction: true,
    simulateTouch: false,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    navigation: {
      nextEl: ".product__slider-next",
      prevEl: ".product__slider-prev",
    },
    pagination: {
      el: ".product__pagination",
    },
  });

  let ViewedSlider = new Swiper(".viewed__slider", {

    slidesPerView: '4',
    spaceBetween: 10,
    loop: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".viewed__slider-next",
      prevEl: ".viewed__slider-prev",
    },
    keyboard: true,

    breakpoints: {
      // when window width is >= 320px
      220: {
        slidesPerView: 1.1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2.1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      1660: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    }
  });

  var descProducSlider = new Swiper(".desc-product__slider", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".desc-product__slider-next",
      prevEl: ".desc-product__slider-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      220: {
        slidesPerView: 1.1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2.1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  });

  ////// CHOICES ////
  const sortingSelect = document.querySelector('.sorting__select[name="select-price"]');
  if (sortingSelect) {
    const choices = new Choices(sortingSelect, {
      itemSelectText: '',
      searchEnabled: false,
    });
  }
  const pageSelect = document.querySelector('.sorting__select[name="select-page"]');
  if (pageSelect) {
    const choices2 = new Choices(pageSelect, {
      itemSelectText: '',
      searchEnabled: false,
    });
  }

  ///// FOOTER SPOLER //////
  let footerList = document.querySelectorAll('.footer__list');
  const footerListSpoler = (event) => {
    let target = event.target.classList;
    if (target.contains('footer__list-item')) {
      event.target.parentNode.classList.toggle('footer__list--open')
    }
    if (target.contains('footer__list-link--first')) {
      event.target.parentNode.parentNode.classList.toggle('footer__list--open')
    }
  }

  footerList.forEach(item => {
    item.addEventListener('click', footerListSpoler);
  })

  ///// TABS /////
  let btnMenuTabs = document.querySelectorAll('.menu-tabs__btn');
  let contentMenuTabs = document.querySelectorAll('.menu-tabs__content');
  let menuTabsButtons = document.querySelector('.menu-tabs__buttons');

  if (btnMenuTabs.length > 0) {
    btnMenuTabs.forEach((item, index) => {
      item.addEventListener('click', event => {
        let mbtn = 'menu-tabs__btn';
        let mbtnactiv = 'menu-tabs__btn--active';
        if (event.target.classList.contains(mbtn) && !event.target.classList.contains(mbtnactiv)) {
          for (let i = 0; i < btnMenuTabs.length; i++) {
            const element = btnMenuTabs[i];
            element.classList.remove(mbtnactiv);
            contentMenuTabs[i].classList.remove('menu-tabs__content--active');
          }
          event.target.classList.add(mbtnactiv);
          contentMenuTabs[index].classList.add('menu-tabs__content--active');
          menuTabsButtons.classList.toggle('menu-tabs__buttons--anim');
        }
      })
    })
  }

  ///// body no scroll /////
  const NoScroll = (add) => {
    if (add) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  ///// menu burger /////
  let menuBurger = document.querySelector('.main-header__menu-burger, .header__menu-burger');
  let mainMenu = document.querySelector('.main-menu');
  let mainMenuCross = document.querySelector('.main-menu__cross');

  if (menuBurger != null && mainMenu != null && mainMenuCross != null) {
    menuBurger.addEventListener('click', () => {
      mainMenu.classList.add('main-menu--show');
      NoScroll(true)
    })
    mainMenuCross.addEventListener('click', () => {
      mainMenu.classList.remove('main-menu--show');
      NoScroll(false)
    })
  }

  ///// drop menu authorized /////
  let authorizedClass = document.querySelector('.btn-group__link--authorized');
  let DropMenuClass = document.querySelector('.header-drop-menu');

  const showDropMenu = (event) => {
    event.preventDefault();
    DropMenuClass.classList.toggle('header-drop-menu--active');
  }

  const windowClickFunction = (event) => {
    const target = event.target;
    const headerDropMenu = '.header-drop-menu';
    const authorized = '.btn-group__link--authorized';

    if ((!target.closest(authorized)) && (!target.closest(headerDropMenu))) {
      DropMenuClass.classList.remove('header-drop-menu--active');
    } else {
      return;
    }
  }

  if (authorizedClass !== null) {
    authorizedClass.addEventListener('click', showDropMenu);
    window.addEventListener('click', windowClickFunction)
  }

  ////// POPUP SYSTEM /////
  let buttonBack = document.querySelectorAll('.menu-popup__back');
  let menuTabsLink = document.querySelectorAll('.menu-tabs__link');
  let menuPopUpLink = document.querySelectorAll('.menu-popup__link');

  const PopUpButtonBack = (event) => {
    event.preventDefault();
    if (event.target.parentNode.parentNode.classList.contains('menu-popup--show')) {
      event.target.parentNode.parentNode.classList.remove('menu-popup--show');
    }
  }

  const ShowPopUp = (event) => {
    event.preventDefault();

    let attr = event.target.getAttribute('data-menu-popup');
    if (attr) {
      let popUp = document.querySelector(`.menu-popup[data-menu-popup="${attr}"]`);
      if (popUp != null) {
        popUp.classList.add('menu-popup--show');
      }
    }
  }

  buttonBack.forEach(item => {
    item.addEventListener('click', PopUpButtonBack);
  });
  menuTabsLink.forEach(item => {
    item.addEventListener('click', ShowPopUp);
  });
  menuPopUpLink.forEach(item => {
    item.addEventListener('click', ShowPopUp);
  });

  ////// FAVORITES/////

  let favBtn = document.querySelectorAll('.product__favorite, .product-card__favorite');

  const FavoritesAdd = (event) => {
    if (event.target.classList.contains('product__favorite')) {
      let activeClass = 'product__favorite--add';
      event.target.classList.toggle(activeClass);
      return
    }
    if (event.target.classList.contains('product-card__favorite')) {
      let activeClass = 'product-card__favorite--add';
      event.target.classList.toggle(activeClass);
      return
    }

  }

  if (favBtn.length > 0) {
    favBtn.forEach(item => {
      item.addEventListener('click', FavoritesAdd);
    })
  }

  ////// PRODUCT UP ANIMATE/////

  let product = document.querySelectorAll('.product__inner');
  let productBottom = document.querySelectorAll('.product__bottom');

  if (!isTouch && product.length > 0) {

    const ProductEnter = (event) => {
      let product = event.target;
      let productHeight = product.clientHeight;
      let productscrollHeight = product.scrollHeight;
      let productTransformOffset = productscrollHeight - productHeight;
      let productSlider = product.querySelector('.product__slider, .product__link');
      let productBottom = product.querySelector('.product__bottom');
      productSlider.style.transform = `translateY(-${productTransformOffset}px)`;
      productBottom.style.transform = `translateY(-${productTransformOffset}px)`;
    }

    const ProductLeave = (event) => {
      let product = event.target;
      let productSlider = product.querySelector('.product__slider, .product__link');
      let productBottom = product.querySelector('.product__bottom');
      productSlider.style.transform = `translateY(0px)`;
      productBottom.style.transform = `translateY(0px)`;
    }

    product.forEach(item => {
      item.addEventListener('mouseenter', ProductEnter);
      item.addEventListener('mouseleave', ProductLeave);
    });
  }
  ////// CUSTOM MULTI SELECT /////

  let customSelectBtn = document.querySelectorAll('.custom-select__btn');
  let filtersBottom = document.querySelector('.filtres__bottom');
  let checkboxes = document.querySelectorAll('.custom-checkbox__default');
  let tags = [];
  let filterTemp;

  const Uncover = (event) => {

    if (event.target.classList.contains('custom-select__btn')) {
      let customSelectBtnUncover = document.querySelectorAll('.custom-select__btn--uncover');
      if (customSelectBtnUncover.length > 0) {
        customSelectBtnUncover.forEach(item => {
          if (item.classList !== event.target.classList) {
            item.classList.remove('custom-select__btn--uncover');
            item.querySelector('.custom-select__list--show').classList.remove('custom-select__list--show');
          }
        })
      }

      let customSelectList = event.target.querySelector('.custom-select__list');
      event.target.classList.toggle('custom-select__btn--uncover');
      customSelectList.classList.toggle('custom-select__list--show');
    }

    if (event.target.classList.contains('custom-checkbox__default')) {
      CountCheck();
    }
  }

  const UncoverForWindow = (event) => {
    let target = event.target;
    if (!target.closest('.custom-select__btn') && !target.closest('.custom-select__list')) {
      customSelectBtn.forEach(item => {
        item.classList.remove('custom-select__btn--uncover');
        item.querySelector('.custom-select__list').classList.remove('custom-select__list--show');
      })
    }
  }

  const CountCheck = () => {
    customSelectBtn.forEach(item => {
      let checkBoxs = item.querySelectorAll('.custom-checkbox__default:checked');
      let numSpan = item.querySelector('.custom-select__num');
      numSpan.innerHTML = `${checkBoxs.length}`;
    })
  }

  const AddCheckboxTags = (event) => {
    let checkbox = event.target
    let index = tags.indexOf(checkbox.getAttribute('name'));
    if (checkbox.checked) {
      tags.push(checkbox.getAttribute('name'));
      filterTemp = '';
      for (let i = 0; i < tags.length; i++) {
        filterTemp += `
    <div class="filtres__item" data-checkbox="${tags[i]}"> ${tags[i]}
      <span class="filtres__item-cross" ></span>
    </div>
    `;
      }
    }
    else {
      tags.splice(index, 1);
      filterTemp = ''
      for (let i = 0; i < tags.length; i++) {
        filterTemp += `
    <div class="filtres__item" data-checkbox="${tags[i]}">${tags[i]}
      <span class="filtres__item-cross" ></span>
    </div>
    `;
      }
    }
    filtersBottom.innerHTML = filterTemp;
  }

  if (customSelectBtn.length > 0) {
    customSelectBtn.forEach(item => {
      item.addEventListener('click', Uncover);
    });

    window.addEventListener('click', UncoverForWindow);
    CountCheck();
  }

  if (checkboxes.length > 0) {
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', AddCheckboxTags)
    })
  };

  if (filtersBottom) {
    filtersBottom.addEventListener('click', (event) => {
      if (event.target.closest('.filtres__item')) {
        let filtersCross = event.target;
        let attr = filtersCross.getAttribute('data-checkbox');
        let checkbox = document.querySelector(`.custom-checkbox__default[name="${attr}"]`);
        let index = tags.indexOf(checkbox.getAttribute('name'));
        checkbox.checked = false;
        CountCheck();
        event.target.remove();
        filterTemp = filtersBottom.innerHTML;
        tags.splice(index, 1);
      }
    });
  }


  // CATALOG PRICE FIXED 1100px//

  if (productBottom.length > 0) {
    productBottom.forEach(productBottom => {

      const ProductFixResize = () => {
        let productPrice = productBottom.querySelector('.product__pirce');
        let productSubtitle = productBottom.querySelector('.product__suptitle');
        let productSubtitleGroup = productBottom.querySelector('.product__suptitle-group');
        let productTitleGroup = productBottom.querySelector('.product__title-group');
        if (window.innerWidth < 1101) {
          productSubtitleGroup.prepend(productPrice);
          productTitleGroup.appendChild(productSubtitle);
        } else {
          productTitleGroup.appendChild(productPrice);
          productSubtitleGroup.prepend(productSubtitle);
        }

      }
      window.addEventListener('resize', ProductFixResize);
      ProductFixResize();
    })
  }

  /// ADAPTIVE PRODUCT
  let productInner = document.querySelectorAll('.product__inner');
  const ProductResizeAdaptive = () => {

    if (productInner.length > 0) {
      productInner.forEach(inner => {

        let productSize = inner.querySelector('.sizes').scrollHeight;
        let innerHeight = inner.scrollHeight - productSize - 50;
        inner.style.maxHeight = `${innerHeight}px`;

      })
    }
  }
  ProductResizeAdaptive();
  setTimeout(() => {
    ProductResizeAdaptive();
  }, 1000);
  window.addEventListener('resize', ProductResizeAdaptive);


  ////// MOBILE PRICE UP AND DOWN ////

  let mobilePriceBtn = document.querySelector('.mobile-filters__btn--price-up[data-sort="price-up"]');
  let filters = document.querySelector('.filters');

  if (mobilePriceBtn) {
    mobilePriceBtn.addEventListener('click', () => {
      if (mobilePriceBtn.classList.contains('mobile-filters__btn--price-up')) {
        mobilePriceBtn.classList.remove('mobile-filters__btn--price-up');
        mobilePriceBtn.classList.add('mobile-filters__btn--price-down');
      } else if (mobilePriceBtn.classList.contains('mobile-filters__btn--price-down')) {
        mobilePriceBtn.classList.remove('mobile-filters__btn--price-down');
        mobilePriceBtn.classList.add('mobile-filters__btn--price-up');
      }
    })
  }

  ////// MOBILE SHOW FILTER BUTTON ////

  let mobiFiltres = document.querySelector('.mobile-filters__btn[data-filter="popup"]');
  let mobiFiltersClose = document.querySelector('.filters__close');

  if (mobiFiltres) {
    mobiFiltres.addEventListener('click', () => {
      filters.classList.add('filters--show');
      NoScroll(true);
    })
  }

  if (mobiFiltersClose) {
    mobiFiltersClose.addEventListener('click', () => {
      filters.classList.remove('filters--show');
      NoScroll(false);
    })
  }

  /////// popup-photogallery ////////

  let productZoomImg = document.querySelector('.product-card__images-zoom');
  let popupPhotoGallery = document.querySelector('.popup-photogallery');
  let popupPhotoGalleryCross = document.querySelector('.popup-photogallery__cross');

  if (popupPhotoGallery !== null) {

    productZoomImg.addEventListener('click', () => {
      popupPhotoGallery.classList.add('popup-photogallery--show');
      NoScroll(true);
    })
    popupPhotoGalleryCross.addEventListener('click', () => {
      popupPhotoGallery.classList.remove('popup-photogallery--show');
      NoScroll(false);
    })

    let swiperWrapper = popupPhotoGallery.querySelector('.swiper-wrapper');
    let productCardImagesSlider = document.querySelectorAll('.product-card__slider-img');


    productCardImagesSlider.forEach((item, index) => {
      swiperWrapper.innerHTML += `
      <div class="swiper-slide">
        <img class="popup-photogallery__slider-img" src="${item.getAttribute('src')}" alt="Продукт">
      </div>`
    })


  }

  let popupPhotogallery = new Swiper(".popup-photogallery__slider", {
    loop: true,
    spaceBetween: 30
  });

  const swiperThumbneil = new Swiper(".slider-thumbnail", {
    loop: true,
    direction: "vertical",
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesProgress: true,
    centeredSlides: false,
  });

  const swiperProductCard = new Swiper(".product-card__images", {
    loop: true,
    spaceBetween: 10,
    effect: "flip",
    grabCursor: true,
    flipEffect: {
      slideShadows: false,
      limitRotation: false,
    },
    thumbs: {
      swiper: swiperThumbneil,
    },
    navigation: {
      nextEl: ".product-card__slider-prev",
      prevEl: ".product-card__slider-next",
    },
  });

  /// ACORD ITEM IN PRODUCT 

  let acord = document.querySelectorAll('.acord__item');

  const AcordFunction = (event) => {
    acord.forEach(item => {
      if (item.classList.contains('acord__item--open') && !event.target.closest('.acord__item--open')) {
        item.classList.remove('acord__item--open');
      }
    })

    event.target.classList.toggle('acord__item--open');

  }

  if (acord.length > 0) {
    acord.forEach(item => {
      item.addEventListener('click', AcordFunction)
    })
  }

  /// DIALOG WINDOWS ///

  let dialog = document.querySelectorAll('.dialog');

  const DialogClosed = (event) => {
    if (!event.target.closest('.dialog__inner')) {
      event.target.closest('.dialog').classList.remove('dialog--show');
      NoScroll(false);
      return;
    } else if (event.target.closest('.dialog__cross')) {
      event.target.closest('.dialog').classList.remove('dialog--show');
      NoScroll(false);
      return;
    }
  }


  if (dialog.length > 0) {
    dialog.forEach(item => {
      item.addEventListener('click', DialogClosed);
    })
  }


  let sizesBtn = document.querySelector('.sizes__check');
  let commentBtn = document.querySelector('.comment__button');

  if (sizesBtn !== null) {
    let sizesDialog = document.querySelector('.dialog[data-dialog="sizes"]');
    sizesBtn.addEventListener('click', () => {
      sizesDialog.classList.add('dialog--show');
      NoScroll(true);
    })
  }

  if (commentBtn !== null) {
    let commentDialog = document.querySelector('.dialog[data-dialog="comment"]');
    commentBtn.addEventListener('click', () => {
      commentDialog.classList.add('dialog--show');
      NoScroll(true);
    })
  }

  /////// RATING PRODUCT /////////

  let ratingStar = document.querySelectorAll('.dialog-comment__rating-star');

  if (ratingStar.length > 0) {

    ratingStar.forEach(i => {
      i.addEventListener('click', (e) => {

        ratingStar.forEach(star => {
          if (star.classList.contains('dialog-comment__rating-star--full')) {
            star.classList.remove('dialog-comment__rating-star--full');
          }
        })

        if (!e.target.classList.contains('dialog-comment__rating-star--full')) {
          e.target.classList.add('dialog-comment__rating-star--full');
          console.log('Вы поставили: ' + e.target.getAttribute('data-star') + ' Звезд');
        } else {
          e.target.classList.remove('dialog-comment__rating-star--full');
        }
      })
    })


  }

}

window.addEventListener('DOMContentLoaded', start);


// item.addEventListener('mouseenter', ProductEnter);
// item.addEventListener('mouseleave', ProductLeave);
