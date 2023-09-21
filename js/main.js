$(".slider-holder").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        dots: false,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        dots: false,
        autoplay: true,
      },
    },
  ],
});

$(".slider-review").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        dots: false,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        dots: false,
      },
    },
  ],
});
