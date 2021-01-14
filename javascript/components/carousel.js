$(document).ready(function() {

  $('.carousel--partners').slick({
    prevArrow: "#partners-previous",
    nextArrow: "#partners-next",
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  });

  $('.carousel--roadmap').slick({
    centerMode: true,
    prevArrow: "#roadmap-previous",
    nextArrow: "#roadmap-next",
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  });

  $('.carousel--gallery').slick({
    prevArrow: "#gallery-previous",
    nextArrow: "#gallery-next",
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  });

});