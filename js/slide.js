// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 5,
//     spaceBetween: 0,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });

var swiper = new Swiper ('.mySwiper', {
    slidesPerView: 5,
    spaceBetween: 0,
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      300: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 5,
        spaceBetween: 00,
      }
    },
    // Optional parameters   
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

  })