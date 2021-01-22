$(document).ready(function() {

  // Roadmap
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

  // Team
  $('.carousel--team').slick({
    rows: 2,
    slidesPerRow: 5,
    prevArrow: "#team-previous",
    nextArrow: "#team-next",
    speed: 300,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesPerRow: 4,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesPerRow: 3,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesPerRow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesPerRow: 1,
      }
    }
    ]
  });

  // Advisors
  $('.carousel--advisors').slick({
    prevArrow: "#advisors-previous",
    nextArrow: "#advisors-next",
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

  // Partners
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

  // Gallery
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