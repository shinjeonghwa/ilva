// header scroll
// $(function () {

var $window = $(window);
var $header = $("header");
var $logo = "image/logo/whitelogo.png";
var $smallLogo = "image/logo/blacklogo.png";

$window.scroll(function () {
  if ($(this).scrollTop() > 800) {
    if (!$header.hasClass("shrink")) {
      $header.addClass("shrink");
      switchImages($smallLogo);
    }
  } else {
    if ($header.hasClass("shrink")) {
      $header.removeClass("shrink");
      switchImages($logo);
    }
  }
});

function switchImages(newPath) {
  var $logo = $("#white");
  $logo.fadeOut(300, function () {
    $logo.attr("src", newPath);
    $logo.fadeIn();
  });
}

// slides
var slides = document.querySelector(".slides");
var slide = document.querySelectorAll(".slides > li");
var slideCount = slide.length;
var slideWidth = 1920;
var slideMargin = 0;
var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
var i = 0;

function newSlide() {
  if (i == 0) {
    $(".bg1").removeClass("remove");
    $(".bg1").removeClass("left");
    $(".bg1").addClass("right");
    $(".bg1").addClass("add");

    $(".bg2").removeClass("remove");
    $(".bg2").removeClass("left");
    $(".bg2 > p").css('display','block');
    $(".bg2").removeClass("add");
    $(".bg2").removeClass("rigth");

    $(".bg3").removeClass("right");
    $(".bg3").removeClass("add");
    $(".bg3 > p").css('display','none');
    $(".bg3").addClass("left");
    $(".bg3").addClass("remove");
    i++;
  } else if (i == 1) {
    $(".bg1").removeClass("add");
    $(".bg1").removeClass("right");
    $(".bg1 > p").css('display','none');
    $(".bg1").addClass("left");
    $(".bg1").addClass("remove");

    $(".bg2").removeClass("remove");
    $(".bg2").removeClass("left");
    $(".bg2").addClass("right");
    $(".bg2").addClass("add");

    $(".bg3").removeClass("remove");
    $(".bg3").removeClass("left");
    $(".bg3 > p").css('display','block');
    $(".bg3").removeClass("right");
    $(".bg3").removeClass("add");
    i++;
  } else if (i == 2) {
    $(".bg1").removeClass("remove");
    $(".bg1").removeClass("left");
    $(".bg1 > p").css('display','block');
    $(".bg1").removeClass("right");
    $(".bg1").removeClass("add");

    $(".bg2").removeClass("add");
    $(".bg2").removeClass("right");
    $(".bg2 > p").css('display','none');
    $(".bg2").addClass("left");
    $(".bg2").addClass("remove");

    $(".bg3").removeClass("remove");
    $(".bg3").removeClass("left");
    $(".bg3").addClass("right");
    $(".bg3").addClass("add");
    i = 0;
  }
}

function prevSlide() {
  if (i == 0) {
    $(".bg3").removeClass("remove");
    $(".bg3").removeClass("right");
    $(".bg3").addClass("left");
    $(".bg3").addClass("add");

    $(".bg2").removeClass("remove");
    $(".bg2").removeClass("right");
    $(".bg2").removeClass("add");
    $(".bg2").removeClass("left");

    $(".bg1").removeClass("left");
    $(".bg1").removeClass("add");
    $(".bg1").addClass("right");
    $(".bg1").addClass("remove");
    i = 2;

  } else if (i == 1) {
    $(".bg1").removeClass("add");
    $(".bg1").removeClass("right");
    $(".bg1").removeClass("left");
    $(".bg1").removeClass("remove");

    $(".bg2").removeClass("remove");
    $(".bg2").removeClass("right");
    $(".bg2").addClass("left");
    $(".bg2").addClass("add");

    $(".bg3").removeClass("add");
    $(".bg3").removeClass("left");
    $(".bg3").addClass("right");
    $(".bg3").addClass("remove");
    i--;
  } else if (i == 2) {
    $(".bg1").removeClass("remove");
    $(".bg1").removeClass("right");
    $(".bg1").addClass("left");
    $(".bg1").addClass("add");

    $(".bg2").removeClass("add");
    $(".bg2").removeClass("left");
    $(".bg2").addClass("right");
    $(".bg2").addClass("remove");

    $(".bg3").removeClass("right");
    $(".bg3").removeClass("add");
    $(".bg3").removeClass("left");
    $(".bg3").removeClass("remove");
    i--;
  }
}

setInterval(newSlide, 4000);



$(".next").click(function () {
  newSlide();
});

$(".prev").click(function () {
  prevSlide();
});

var swiper = new Swiper(".sub-swiper", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    486: {
      /* 눈에 보이는 슬라이드의 갯수 */
      slidesPerView: 1,
      // 3.5개의 슬라이드를 몇 개의 그룹으로 생성할 것이며, 몇 번 스크롤할것이냐
      slidesPerGroup: 1,
    },
    768: {
      /* 눈에 보이는 슬라이드의 갯수 */
      slidesPerView: 3,
      // 3.5개의 슬라이드를 몇 개의 그룹으로 생성할 것이며, 몇 번 스크롤할것이냐
      slidesPerGroup: 1,
    },
    1024: {
      /* 눈에 보이는 슬라이드의 갯수 */
      slidesPerView: 3,
      // 3.5개의 슬라이드를 몇 개의 그룹으로 생성할 것이며, 몇 번 스크롤할것이냐
      slidesPerGroup: 1,
    },
    1920: {
      /* 눈에 보이는 슬라이드의 갯수 */
      slidesPerView: 3.5,
      // 3.5개의 슬라이드를 몇 개의 그룹으로 생성할 것이며, 몇 번 스크롤할것이냐
      slidesPerGroup: 1,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

})

var swiper = new Swiper(".sub2-swiper", {
  autoplay: true,
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  loop:true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
  scrollbar: {
    el: ".sub2.swiper-scrollbar",
  },
  navigation: {
    nextEl: ".sub2.swiper-button-next",
    prevEl: ".sub2.swiper-button-prev",
  },
});



// window.height: 눈에 보이는 높이.
//: 뷰포트
// document.height: 문서의 높이
// body.height: 바디의 높이


