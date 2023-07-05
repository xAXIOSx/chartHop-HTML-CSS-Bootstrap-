document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.add("active");
  }, 500);
});

let partnersLogos = document.querySelector(".partners__logos");

for (let i = 0; i < 2; i++) {
  partnersLogos.insertAdjacentHTML(
    "beforeend",
    `
        <img src="img/partners-logos/remy-logo_white.png" alt="">
        <img src="img/partners-logos/lightspeed-logo-white.png" alt="">
        <img src="img/partners-logos/plaid-logo_white.png" alt="">
        `
  );
}
for (let i = 0; i < 2; i++) {
  partnersLogos.insertAdjacentHTML(
    "beforeend",
    `
        
    <img src="img/partners-logos/lightspeed-logo-white.png" alt="">
    <img src="img/partners-logos/plaid-logo_white.png" alt="">
    <img src="img/partners-logos/remy-logo_white.png" alt="">
        `
  );
}

document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
});
let main = document.querySelector("main");
let wrapper = document.querySelector(".wrapper");
let links = document.querySelectorAll(".sidebar__link a");

let arrLinks = Array.from(links);
let linksArr = arrLinks.map((e) => {
  return e.getAttribute("data-link");
});
let containers = document.querySelectorAll(".content .container");
links.forEach((link) => {
  link.addEventListener("click", () => {
    // Удаление класса active с прошлой ссылки
    links.forEach((el) => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      }
    });
    containers.forEach((container) => {
      if (
        container.getAttribute("data-content") == link.getAttribute("data-link")
      ) {
        // Удаление класса active с прошлого контейнера
        containers.forEach((e) => {
          if (e.classList.contains("active")) {
            e.classList.remove("active");
          }
        });
        container.classList.add("active");
      }
    });
    link.classList.add("active");
    ellipse.style.transform = `translateY(${link.offsetTop - 146}px)`;
  });
});
let eventSum = 0;
let ellipse = document.querySelector(".sidebar__ellipse");

document.addEventListener("wheel", (event) => {
  console.log(`Window ${window.pageYOffset}`);
  console.log(`Точка ${wrapper.clientHeight + wrapper.offsetTop - 600}`);
  eventSum += event.deltaY;
  links.forEach((e) => {
    if (e.classList.contains("active")) {
      currentLink = e.getAttribute("data-link");
    }
  });
  let currentIndex = linksArr.indexOf(currentLink);
  let nextIndex;
  if (
    currentIndex < 7 &&
    event.deltaY > 0 &&
    window.pageYOffset < wrapper.clientHeight + wrapper.offsetTop - 800 &&
    window.pageYOffset > wrapper.offsetTop - 300 &&
    eventSum % 50 == 0
  ) {
    window.scrollTo(0, wrapper.offsetTop - 150);
    document.documentElement.style.overflow = "hidden";
    nextIndex = currentIndex + 1;
    console.log(1);
  } else if (
    currentIndex > 0 &&
    event.deltaY < 0 &&
    window.pageYOffset < wrapper.clientHeight + wrapper.offsetTop - 800 &&
    window.pageYOffset > wrapper.offsetTop - 300 &&
    eventSum % 50 == 0
  ) {
    window.scrollTo(0, wrapper.offsetTop - 150);
    document.documentElement.style.overflow = "hidden";
    nextIndex = currentIndex - 1;
    console.log(2);
  } else if (
    currentIndex <= 0 &&
    event.deltaY < 0 &&
    window.pageYOffset < wrapper.clientHeight + wrapper.offsetTop - 800 &&
    window.pageYOffset > wrapper.offsetTop - 300
  ) {
    document.documentElement.style.overflow = "visible";
    nextIndex = 0;
    currentIndex = 0;
    console.log(3);
  } else if (currentIndex >= 7 && event.deltaY > 0) {
    // nextIndex = 0
    // currentIndex = 0
    document.documentElement.style.overflow = "visible";
    currentIndex = 8;
    nextIndex = 7;
    console.log(4);
  } else {
    links.forEach((e) => {
      if (e.classList.contains("active")) {
        currentLink = e.getAttribute("data-link");
      }
    });
    nextIndex = currentIndex;
    console.log(5);
  }

  // console.log(`Current ${currentIndex}`);
  // console.log(`Next ${nextIndex}`);

  // Удаление класса active с прошлой ссылки
  links.forEach((el) => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    }
  });

  links[nextIndex].classList.add("active");
  ellipse.style.transform = `translateY(${links[nextIndex].offsetTop - 146}px)`;

  // Удаление класса active с прошлого контейнера
  containers.forEach((e) => {
    if (e.classList.contains("active")) {
      e.classList.remove("active");
    }
  });

  containers[nextIndex].classList.add("active");
});

$(function () {
  $(".slider").slick({
    arrows: true,
    slidesToShow: 2,
    draggable: false,
    variableWidth: true,
    speed: 400,
    appendArrows: $(".slider-detectors"),
    appendDots: $(".slider-line"),
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          variableWidth: false,
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          variableWidth: false,
          centerMode: false,
          centerPadding: 100,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

setTimeout(() => {
  let slides = document.querySelectorAll(".slider__item");
  let arrows = document.querySelectorAll(".slider-detectors > button");
  slides.forEach((e) => {
    if (e.classList.contains("slick-active")) {
      e.style.opacity = 1;
    }
  });
  arrows.forEach((e) => {
    e.addEventListener("click", () => {
      slides.forEach((e) => {
        if (e.classList.contains("slick-active")) {
          e.style.opacity = 1;
        } else {
          if (document.documentElement.clientWidth > 1600) {
            e.style.opacity = 0.4;
          }
        }
      });
    });
  });
}, 500);
// let navItem = document.querySelectorAll('.nav-item')
// navItem.forEach((item)=>{
//         item.addEventListener('mouseover',(e)=>{
//             if(e.target.classList.contains('item-drop') || e.target.classList.contains('item-title')){
//                 item.childNodes[3].classList.remove('hidden')
//             }
//         })
//         item.addEventListener('mouseout',(e)=>{
//             console.log(e.contains)
//             item.childNodes[3].classList.add('hidden')
//         })

//     }
// )

let search = document.querySelector(".search");
search.style.marginTop = "10px";
let searchInput = document.querySelector(".search-input");
search.addEventListener("click", () => {
  if (searchInput.classList.contains("input-hidden")) {
    searchInput.classList.remove("input-hidden");
    search.style.marginTop = "0px";
  }
  // else {
  //     searchInput.classList.add('input-hidden')
  //     search.style.marginTop = '10px'
  // }
});
