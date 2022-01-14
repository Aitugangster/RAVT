$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  // autoplay: true,
  // autoplaySpeed: 4000,
  dots: true,
  dotsClass: 'slider-dots',
  nextArrow: '<div class="slider-arrows__right"></div>',
  prevArrow: '<div class="slider-arrows__left"></div>',
});
var header = $('.header'),
  scrollPrev = 0;

$(window).scroll(function() {
  var scrolled = $(window).scrollTop();
 
  if ( scrolled > 100 && scrolled > scrollPrev ) {
    header.addClass('out');
  } else {
    header.removeClass('out');
  }
  scrollPrev = scrolled;
});



//Показываем или скрываем классы на HEADER при загрузке страницы
console.log($(window).scrollTop());
top1 = 50;
if ($(window).scrollTop() >= top1) {
  $('.header').addClass('header-scroll');
} else {
  $('.header').removeClass('header-scroll');
}
// if ($(window).width()  < 600) {
//   $('.header').removeClass('header-scroll');
// }
//Событие на скролл
$(window).scroll(function () {
  console.log('ddddd');
  top1 = 250;

if ($(window).width()  < 767) {
  $('.header').removeClass('header-scroll');
}
  top1 = 1;
  //Показываем или скрываем классы на HEADER при скролле
  if ($(this).scrollTop() >= top1) {
    $('.header').addClass('header-scroll');
  } else {
    $('.header').removeClass('header-scroll');
  }
});

// if ($(window).width()  < 600) {
//   $('.header').removeClass('header-scroll');
// }