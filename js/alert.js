// выпадающий список

let intervalId;
document.querySelectorAll('.header-bottom-nav__btn').forEach(e => {
  e.addEventListener('click', e => {
    const menu = e.currentTarget.dataset.user;
    document.querySelectorAll('.dropdown__container').forEach(e => {
      if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open-dropdown')) {
        e.classList.remove('open-dropdown');
        intervalId = setTimeout(() => {
          document.querySelectorAll(`.header-bottom-nav__btn`).forEach(el => {
            el.classList.remove('rotait');
          })
          document.querySelector(`[data-target=${menu}]`).classList.add('open-dropdown');
          document.querySelector(`[data-user=${menu}]`).classList.add('rotait');
        }, 0);
      }
      if (document.querySelector(`[data-target=${menu}]`).classList.contains('open-dropdown')) {
        clearTimeout(intervalId);
        document.querySelector(`[data-user=${menu}]`).classList.remove('rotait');
        intervalId = setTimeout(() => {
          document.querySelector(`[data-target=${menu}]`).classList.remove('open-dropdown');
        }, 0);
      }
      window.onclick = e => {
        if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-user=${menu}]`)) {
          return;
        } else {
          document.querySelector(`[data-user=${menu}]`).classList.remove('rotait');
          document.querySelector(`[data-target=${menu}]`).classList.remove('open-dropdown');
        }
      }
    });
  });
});


// слайдер - hero

// document.querySelectorAll('.hero-swiper-slide').forEach(function () {
//   let offsetHeight = document.getElementsByClassName('hero-content')[0].offsetHeight;
//   document.getElementsByClassName('bg1')[0].style = "height: " + offsetHeight + "px";
//   document.getElementsByClassName('bg2')[0].style = "height: " + offsetHeight + "px";
//   document.getElementsByClassName('bg3')[0].style = "height: " + offsetHeight + "px";
// })


// let offsetHeight = document.getElementsByClassName('hero-content')[0].offsetHeight;
// console.log(offsetHeight);
// присваиваем высоту в слайды слайдера
// document.getElementsByClassName('bg1')[0].style = "height: " + offsetHeight + "px";
// document.getElementsByClassName('bg2')[0].style = "height: " + offsetHeight + "px";
// document.getElementsByClassName('bg3')[0].style = "height: " + offsetHeight + "px";

// function work() {
//   let offsetHeight = document.getElementsByClassName('hero-content')[0].offsetHeight;
//   document.getElementsByClassName('bg1')[0].style = "height: " + offsetHeight + "px";
//   document.getElementsByClassName('bg2')[0].style = "height: " + offsetHeight + "px";
//   document.getElementsByClassName('bg3')[0].style = "height: " + offsetHeight + "px";
// }
// work();

// hero-swiper-slide


// if (window.location.load() == true) {

//   work();
// } 


// Вычисляем высоту контента



// var swiper = new Swiper('.swiper.hero-swiper-slider', {
//   slidesPerView: 1,
//   direction: 'horizontal',
//   loop: true,
//   effect: 'fade',
//   autoplay: {
//     delay: 6000,
//   },
//   a11y: {
//     enabled: true,
//     nextSlideMessage: 'следующий слайд',
//     paginationBulletMessage: 'Перейти к слайду',
//     prevSlideMessage: 'Предыдущий слайд',
//   },

// });


// hero slider
const heroswiper = new Swiper('.hero-swiper', {
  // Default parameters
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  touchRatio: 0,
  spaceBetween: 0,
  autoplay: {
    delay: 2000,
  },
  speed: 3000,
});



// Вычисляем высоту контента
// let offsetWidth = document.getElementsByClassName('gallery-slide-img')[0].offsetWidth;
// console.log(offsetWidth);
// присваиваем ширину ховера
// document.getElementsByClassName('gallery-swiper-slide::after')[0].style = " width: " + offsetWidth + "px";





// Селект в Gallery
const selectGallery = () => {
  const item = document.querySelector('.gallery-filter__select');
  const choices = new Choices(item, {
    searchEnabled: false,
    itemSelectText: '',
    sorter: function (a, b) {},
  });

};
selectGallery();


// слайдер в галереи


var swiperGallery = new Swiper('.gallery-swiper-container', {
  slidesPerView: 3,
  // mousewheel: true,
  // loop: true,
  spaceBetween: 50,
  direction: 'horizontal',
  slidesPerGroup: 3,

  pagination: {
    el: '.gallery-button__pagination',
    type: 'fraction',
  },



  // слайдер на русском языке говорит
  // Объект с параметрами a11y с пармаметрами озвучки

  a11y: {
    enabled: true,
    nextSlideMessage: 'следующий слайд',
    paginationBulletMessage: 'Перейти к слайду',
    prevSlideMessage: 'Предыдущий слайд',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',

  },



  breakpoints: {

    300: {
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerGroup: 1,
    },

    731: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  }

});



// плавное перемещение меню


function smoothScrollToAnchor() {
  const linksToSections = document.querySelectorAll('[data-nav]');
  linksToSections.forEach((link) => {
    // обрабаыаем событие клик
    link.addEventListener('click', (event) => {
      // функция - сброс клика
      event.preventDefault();
      setTimeout(() => {
        const nav = link.dataset.nav;
        showSection(nav);
      }, 200);
    });
  });
};

function showSection(nav) {
  const targetSection = document.getElementById(nav);
  targetSection.scrollIntoView({
    // плавное перемещение
    behavior: 'smooth',
    block: 'start',
  });
};

smoothScrollToAnchor();


// модальное окно


const modalSlide = document.querySelectorAll('.gallery-swiper-slide');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const modalsCloseBtn = document.querySelectorAll('.modal-close-btn');

modalSlide.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-slide-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
  });
});

modalOverlay.addEventListener('click', (e) => {
  // console.log(e.target);
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
  }
});

// обработка кнопки закрытия модального окна

modalsCloseBtn.forEach((el) => {
  el.addEventListener('click', (e) => {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
  });
});


// аккордеон простой

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');


  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion-descr');

      self.classList.toggle('open');

      // если открыт аккордеон
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
});


// аккордеон js


$(function () {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: 'content',
  });
});




// табы в секции каталог

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__btn').forEach(function (e) {
    e.addEventListener('click', function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content').forEach(function (e) {
        e.classList.remove('tab-content--active')
        document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
      });
    });

    e.addEventListener('click', function (e) {
      const tabDefault = e.currentTarget.dataset.default;
      document.querySelectorAll('.catalog__btn').forEach(function (e) {
        e.classList.remove('catalog__btn--default')
        e.classList.remove('catalog__btn-start')
        document.querySelector(`[data-path='${tabDefault}']`).classList.add('catalog__btn--default');
      });
    });

  });
})









// слайдер в секции события


var swiperEvents = new Swiper('.events__swiper-wrapper ', {
  slidesPerView: 3,
  // mousewheel: true,
  // loop: true,
  spaceBetween: 50,
  direction: 'horizontal',
  slidesPerGroup: 3,
  clickable: true,

  pagination: {
    el: '.events-button-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.events-button__next.swiper-button-next',
    prevEl: '.events-button__prev.swiper-button-prev',
    clickable: true,
  },

  breakpoints: {

    300: {
      slidesPerView: 1,
      spaceBetween: 27,
      slidesPerGroup: 1,
    },


    730: {
      slidesPerView: 2,
      spaceBetween: 27,
      slidesPerGroup: 2,
    },

    // 871: {
    //   slidesPerView: 2,
    //   spaceBetween: 50,
    // },
    871: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  }
});

// слайдер в секции проекты


var swiperProjects = new Swiper('.projects-swiper-container', {
  slidesPerView: 3,
  mousewheel: true,
  // loop: true,
  spaceBetween: 50,
  direction: 'horizontal',
  slidesPerGroup: 1,

  // pagination: {
  //   el: '.events-swiper-pagination',
  //   type: 'fraction',
  // },

  navigation: {
    nextEl: '.projects-button__next.swiper-button-next',
    prevEl: '.projects-button__prev.swiper-button-prev',
  },


  breakpoints: {
    150: {
      slidesPerView: 1,
      spaceBetween: 28,
      slidesPerGroup: 1,
    },

    700: {
      slidesPerView: 2,
      spaceBetween: 33,
      slidesPerGroup: 2,
    },

    769: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },

    1025: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },



});




// карта

let center = [55.75846806898367, 37.60108849999989];

function init() {
  //  в скобках id
  let map = new ymaps.Map('map', {
    // location tool yandex
    center: center,
    zoom: 14
  });

  // создаем маркер

  let placemark = new ymaps.Placemark(center, {}, {
    // убираем иконку по дефолту
    iconLayout: 'default#image',
    // подключаем наш вариант иконки
    iconImageHref: ('../img/mdi_location_on.png'),
    // размер иконки
    iconImageSize: [20, 20],
    // смещение иконки
    iconImageOffset: [-35, -25]
  });




  // map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип - слои
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  // map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)


  // справа плюс и минус, навигация
  map.controls.add('zoomControl', {
    float: 'right',
    position: {
      right: 20,
      top: 100,
    }
  });



  //   // добавление маркера на карту

  map.geoObjects.add(placemark);

}

// вызов функции

ymaps.ready(init);








// бургер
const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.header__nav');
const menuTouchscreen = document.querySelector('.menu-touchscreen');
const body = document.body;

burgerBtn.addEventListener('click', () => {
  menuBurger.classList.add('burger-active');
  // menuTouchscreen.classList.add('menu-touchscreen__mobil');
  body.classList.add('noscroll');
});

menuClose.addEventListener('click', () => {
  menuBurger.classList.remove('burger-active');
  body.classList.remove('noscroll');
  // menuTouchscreen.classList.remove('menu-touchscreen__mobil');
});

// закрытие меню при клике
const navItems = document.querySelectorAll('.header-nav__link');
navItems.forEach(el => {
  el.addEventListener('click', () => {
    menuBurger.classList.remove('burger-active');
    body.classList.remove('noscroll');
  });
});






// показ меню поиск, скрытие бургера и логотипа
const logoLink = document.querySelector('.logo__link');
const searchformBtn = document.querySelector('.search-form__btn');
const searchformLabel = document.querySelector('.search-form__label');
const searchForm = document.querySelector('.search-form');
const searchFormCloseBtn = document.querySelector('.serch-form-close-btn');
const searchFormMobilGeneral = document.querySelector('.search-form-mobil-general');
const searchFormAnimate = document.querySelector('.search-form__label-invisible-animate');
const searchFormSvg = document.querySelector('.search-form__svg');



searchformBtn.addEventListener('click', () => {
  if (searchformLabel.classList.contains('search-form__label-invisible')) {
    logoLink.classList.add('logo__link-invisible');

    // Когда элемент невидим, сначала устанавливаем свойство display: block,
    //  а затем пока он еще невидим, но уже присутствует на странице, запускаем анимацию.

    // анимация для свойства display
    searchformLabel.classList.remove('search-form__label-invisible');
    burgerBtn.classList.add('burger-invisible');
    searchFormCloseBtn.classList.add('serch-form-close-btn__visible');

    searchFormSvg.classList.add('search-form__svg-animate');
    setTimeout(() => {
      searchFormSvg.classList.remove('search-form__svg-animate');
      searchformLabel.classList.remove('search-form__label-invisible-animate');
      searchFormCloseBtn.classList.add('serch-form-close-btn__animate');
    }, 1000);
    searchForm.classList.add('search-form__mobil-full');


    searchFormMobilGeneral.classList.add('search-form__mobil-general-visible');
  } else {

    // Когда элемент видим, сначала запускаем анимацию прозрачности,
    searchFormSvg.classList.add('search-form__svg-animate');
    searchformLabel.classList.add('search-form__label-invisible-animate');
    searchFormCloseBtn.classList.remove('serch-form-close-btn__animate');
    //  а затем, после её окончания, применяем строку display: none;
    setTimeout(() => {
      searchFormSvg.classList.remove('search-form__svg-animate');
      searchformLabel.classList.add('search-form__label-invisible');
      searchForm.classList.remove('search-form__mobil-full');
      searchFormCloseBtn.classList.remove('serch-form-close-btn__visible');
      burgerBtn.classList.remove('burger-invisible');
      logoLink.classList.remove('logo__link-invisible');
      searchFormMobilGeneral.classList.remove('search-form__mobil-general-visible');
    }, 1000);

  }
});

// кнопка закрытия

searchFormCloseBtn.addEventListener('click', () => {
  searchFormSvg.classList.add('search-form__svg-animate');
  searchformLabel.classList.add('search-form__label-invisible-animate');
  searchFormCloseBtn.classList.remove('serch-form-close-btn__animate');
  //  а затем, после её окончания, применяем строку display: none;
  setTimeout(() => {
    searchFormSvg.classList.remove('search-form__svg-animate');
    searchformLabel.classList.add('search-form__label-invisible');
    searchForm.classList.remove('search-form__mobil-full');
    searchFormCloseBtn.classList.remove('serch-form-close-btn__visible');
    burgerBtn.classList.remove('burger-invisible');
    logoLink.classList.remove('logo__link-invisible');
    searchFormMobilGeneral.classList.remove('search-form__mobil-general-visible');
  }, 1000);
});






// валидация
// имя

// let validate = new JustValidate('#form', {
//   errorLabelStyle: {
//     color: '#FF5C00'
//   }
// });

// подключение маски телефона
// let selector = document.querySelector('#tel')
// let im = new Inputmask('+7(999)-999-99-99');
// im.mask(selector);

// validate
//     .addField('#name', [{
//       rule: 'required',
//       errorMessage: 'Вы не ввели имя'
//     },
//     {
//       rule: 'minLength',
//       value: 2,
//       errorMessage: 'Минимум два символа'
//     }
//   ])

// телефон

// .addField('#tel', [{
//     validator: (value) => {
//       //  номер телефона без лишиних символов
//       const tel = selector.inputmask.unmaskedvalue();
//       return Boolean(Number(tel) && tel.length > 0)
//     },
//     errorMessage: 'Вы не ввели телефон'
//   },
//   {
//     validator: (value) => {
//       //  номер телефона без лишиних символов
//       const tel = selector.inputmask.unmaskedvalue();
//       return Boolean(Number(tel) && tel.length === 10)
//     },
//     errorMessage: 'Введите телефон полностью'
//   }
// ])
// отправка формы







// InputMask
let phoneInput = document.querySelector('input[type="tel"]');
let im = new Inputmask("+7 (999) 999-99-99");
im.mask(phoneInput);

// Validate
function validateForm(selector, rules) {
  new window.JustValidate(selector, {
    rules: rules,

    messages: {
      name: {
        required: 'Пожалуйста, напишите своё имя',
        minLength: 'Минимум два символа',
      },
      tel: {
        required: 'Пожалуйста, напишите свой телефон',
      },
    },
    colorWrong: '#D11616',
    submitHandler: function (form) {
      let formData = new FormData(form);
      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            // console.log('Отправлено');
            alert("Данные отправлены");
          };
        };
      };

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
      form.reset();
    },
  });
};

validateForm('.form__vadidation', {
  name: {
    required: true,
    minLength: 2
  },
  tel: {
    required: true
  },
});







// Скроллы в выпадающих списках в header-bottom
// document.querySelectorAll('.dropdown__list').forEach(el => {
//   new SimpleBar(el)
// });



// Позиционирование тултипов
const siteContainer = document.querySelector('.wrapper-13');
const tooltips = siteContainer.querySelectorAll('.projects-tooltip');

tooltips.forEach((tooltip) => {
  tooltip.addEventListener('focusin', () => {
    setTooltipWidth(tooltip);
  });

  if (window.innerWidth > 1024) {
    tooltip.addEventListener('mouseover', (ev) => {
      setTooltipWidth(tooltip);
    });
  };
});

function setTooltipWidth(tooltip) {
  const textBox = tooltip.querySelector('.projects-tooltip__text');
  const coords = tooltip.getBoundingClientRect();
  let offset = (tooltip.offsetWidth - textBox.offsetWidth) / 2;

  if (coords.left + offset < 1) {
    offset = 0;
  } else if (coords.left + offset + textBox.offsetWidth - 1 > document.documentElement.scrollWidth) {
    offset = document.documentElement.scrollWidth - coords.left - textBox.offsetWidth + 1;
  };

  textBox.style.left = offset + 'px';
};


// тултипы - типпи

tippy('[data-tippy-content]');




// partners slider
const partnersSlider = new Swiper(".partners__slider", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: ".partners__button-next",
    prevEl: ".partners__button-prev"
  },
  simulateTouch: true,
  slideToClickedSlide: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 32,
    },
    992: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 50,
    }
  }
});


// document.addEventListener("DOMContentLoaded", ready);
