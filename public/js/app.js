
document.querySelector('.menuBtn').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('-translate-x-full')
})
document.querySelector('.xBtn').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('-translate-x-full')
})

// Sticky navbar
const elHeader = document.querySelector('header');
const elHero = document.querySelector('#hero')
const heroCord = elHero.getBoundingClientRect()
window.addEventListener('scroll', function(){
  if(this.window.scrollY > heroCord.top){
    elHeader.classList.add('sticky')
  }else{
    elHeader.classList.remove('sticky')   
  }
})


var swiper = new Swiper(".mySwiperplatform", {
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination1",
  },
  
});

var swiper = new Swiper(".mySwiperwork", {
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
    
  },
});


var swiper = new Swiper(".mySwipernews", {
  slidesPerView: 2.8,
  // centeredSlides: true,
  grabCursor: true,
  speed: 600,
    //  loop: true,

  // spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },

  breakpoints: {
    375: {
      slidesPerView: 1.4,
      // spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.8,
      // spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2.8,
      // spaceBetween: 50,
    },
  },
});




      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          // 1024: {
          //   slidesPerView: 5,
          //   spaceBetween: 50,
          // },
        },
      });
    