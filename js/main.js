$(".slider-holder").slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1040,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 2,
        dots: false,
      },
    },
    {
      breakpoint: 580,
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
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1040,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 730,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 590,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
});

//header responsive
const scrollWindow = () => {
  const scroll = $(window).scrollTop();

  if (scroll >= 150) {
    $(".hamburger").css("display", "block");
  } else {
    $(".hamburger").css("display", "none");
  }
};

$(window).scroll(scrollWindow);

$(".header-responsive").hide();

$(".hamburger").on("click", () => {
  $("header").hide("slow");
  $(".header-responsive").show("slow");
  $(".hamburger").hide("slow");
  $("html, body").css({
    overflow: "hidden",
  });
});

$(".close").on("click", () => {
  $("header").show("slow");
  $(".header-responsive").hide("slow");
  $(".hamburger").css("display", "block");
  $("html, body").css({
    overflow: "auto",
  });
});

$(".quote").hide();

$(".quote-me").on("click", (e) => {
  e.preventDefault();
  $(".quote").show("slow");
  $(".quote").css("display", "flex");
});

$(".quote-close").on("click", () => {
  $(".quote").hide("slow");
});
