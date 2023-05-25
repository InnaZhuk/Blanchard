// Dropdown menu

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 28,
  });
})

document.addEventListener('DOMContentLoaded', () => {

  const menuBtns = document.querySelectorAll('.menu__btn');
  const drops = document.querySelectorAll('.dropdown');

  menuBtns.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest('.menu__item').querySelector('.dropdown');

      menuBtns.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('menu__btn--active');
        }
      });

      drops.forEach(el => {
        if (el !== drop) {
          el.classList.remove('dropdown--active');
        }
      });

      drop.classList.toggle('dropdown--active');
      currentBtn.classList.toggle('menu__btn--active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu__list')) {
      menuBtns.forEach(el => {
        el.classList.remove('menu__btn--active');
      });

      drops.forEach(el => {
        el.classList.remove('dropdown--active');
      });
    }
  });
});

// Swiper

const swiperHero = new Swiper('.hero__swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
});

const swiperGallery = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.gallery__btn-next',
    prevEl: '.gallery__btn-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1400: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  }
});

const swiperEvents = new Swiper('.events__swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.events__btn-next',
    prevEl: '.events__btn-prev',
  },
  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },
  breakpoints: {
    550: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },
    1400: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  }
});

const swiperPartners = new Swiper('.projects__swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.projects__btn-next',
    prevEl: '.projects__btn-prev',
  },

  breakpoints: {
    400: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 33.97,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1400: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  }
});


// Select

const element = document.querySelector('.select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom'
});


// Accordion

new Accordion('.catalog__list', {
  elementClass: 'accordion',
  triggerClass: 'catalog__btn',
  panelClass: 'catalog__content',
  activeClass: 'accordion--active',
});

// Tabs

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.tabs');
  const tabsBtn = document.querySelectorAll('.tabs__btn');
  const tabsContent = document.querySelectorAll('.tabs__content');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tabs__btn')) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') });
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach(el => { el.classList.remove('tabs__content--active') });
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
  };
});

// map

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.75846806898367, 37.60108849999989],
    zoom: 16
  });

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)


  var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {
    balloonContentHeader: 'Москва',
    balloonContentBody: 'Леонтьевский переулок, дом 5/1',
    balloonContentFooter: '',
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/Ellipse 12.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [0, 0],
  });

  myMap.geoObjects.add(myPlacemark);
  // myPlacemark.balloon.open();

}

// form

const selector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

const validation = new JustValidate('#form',
  {
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: '#D11616',
    },
  }
);

validation
  .addField('#name', [

    {
      rule: 'required',
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Недопустимый формат',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Недопустимый формат',
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10;
      },
      errorMessage: 'Недопустимый формат',
    },
  ])

validation.onSuccess(function () {
  document.getElementById('form').submit();
});

// Scroll

jQuery(document).ready(function () {
  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
    return false;
  });
});

// Scroll Tabs

let hiddenElement = document.getElementById("tabs");
let btn1 = document.querySelector('[data-tabs-path="Benedetto"]');
let btn2 = document.querySelector('[data-tabs-path="Bergognone, Ambrogio"]');
let btn3 = document.querySelector('[data-tabs-path="Bissolo, Francesco"]');
let btn4 = document.querySelector('[data-tabs-path="Domenico"]');
let btnEmpty = document.querySelector('[data-tabs-path="Page"]');
function handleButtonClick() {
  hiddenElement.scrollIntoView({ block: "start", behavior: "smooth" });
}

btn1.addEventListener('click', handleButtonClick);
btn2.addEventListener('click', handleButtonClick);
btn3.addEventListener('click', handleButtonClick);
btn4.addEventListener('click', handleButtonClick);
btnEmpty.addEventListener('click', handleButtonClick);

// Modal

// Открыть модальное окно
document.getElementById("open-modal-btn2").addEventListener("click", function () {
  document.getElementById("my-modal").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function () {
  document.getElementById("my-modal").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal").classList.remove("open")
  }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});



// Открыть модальное окно
document.getElementById("open-modal-btn1").addEventListener("click", function () {
  document.getElementById("my-modal_empty").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn_empty").addEventListener("click", function () {
  document.getElementById("my-modal_empty").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal_empty").classList.remove("open")
  }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal_empty .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal_empty").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});


// Открыть модальное окно
document.getElementById("open-modal-btn3").addEventListener("click", function () {
  document.getElementById("my-modal_empty").classList.add("open")
})


// Открыть модальное окно
document.getElementById("open-modal-btn4").addEventListener("click", function () {
  document.getElementById("my-modal_empty").classList.add("open")
})

// Открыть модальное окно
document.getElementById("open-modal-btn5").addEventListener("click", function () {
  document.getElementById("my-modal_empty").classList.add("open")
})

// Открыть модальное окно
document.getElementById("open-modal-btn6").addEventListener("click", function () {
  document.getElementById("my-modal_empty").classList.add("open")
})


// Burger

const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const logo = document?.querySelector('[data-logo]');
const loupe = document?.querySelector('[data-search]');
const body = document.body;
const navItems = nav?.querySelectorAll('a');



burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  nav?.classList.toggle('nav--visible');
  logo?.classList.toggle('logo--visible');
  loupe?.classList.toggle('search--visible');
});

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    nav?.classList.remove('nav--visible');
    logo?.classList.remove('logo--visible');
    loupe?.classList.remove('search--visible');
  });
});

// Search

const search = document?.querySelector('[data-search]');
const searchForm = document?.querySelector('[data-search-form]');
const btnClosed = document?.querySelector('.btn-closed');

search?.addEventListener('click', () => {
  searchForm?.classList.toggle('search-open--active');
});

btnClosed?.addEventListener('click', () => {
  searchForm?.classList.toggle('search-open--active');
});

// Tooltip

tippy('[data-tippy-content]');

