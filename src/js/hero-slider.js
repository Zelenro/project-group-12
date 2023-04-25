const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
    pagination: {
        el: '.pagination',
        type: 'fraction',
    },
  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


swiper.on('init', function() {
  // замінюємо роздільник між поточною та загальною кількістю слайдів на " - "
  document.querySelector('.swiper-pagination-current').innerHTML = '01 - ';
});

swiper.on('slideChange', function() {
  // отримуємо номер поточного слайду та додаємо його до роздільника
  const currentIndex = ('0' + (swiper.realIndex + 1)).slice(-2);
  document.querySelector('.swiper-pagination-current').innerHTML = currentIndex + ' - ';
});