const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
    pagination: {
        el: '.pagination',
        type: 'custom',
      renderCustom: function (swiper, current, total) {
        var value;
        if (current > 9) {
          value = current;
        }
        else {
          value = '0' + current;
        }
        return value;
        },
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
