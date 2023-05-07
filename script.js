// Tabs +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function openTab(evt, TabFunction) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Parodo norimą tab pagal id
    document.getElementById(TabFunction).style.display = "flex";
    evt.currentTarget.className += " active";
}

// First load tab
document.getElementById("register").style.display = "flex";

// Options slides ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 5000,
},

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
        768: {
            direction: 'horizontal',
            slidesPerView: 1
        },

        1155: {
            slidesPerView: 3
        }
    }
});

// Slides (reviews)++++++++++++++++++++++++++++++++++++++++++++++++++++
const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    autoplay: {
        delay: 5000,
    },

    pagination: {
      el: '.swiper-pagination1',
    },

    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1155: {
            slidesPerView: 3,
            slidesPerGroup: 2,
        },
    },
});

//   NAV+++++++++++++++++++++++++++++++++++++++++++++++++++=
const burger = document.getElementById("burger")
const sideNav = document.querySelector(".mobile-nav")
const links = document.getElementsByClassName("link")
const mobs = document.getElementsByClassName("mob")

burger.addEventListener("click", function(){

    this.classList.toggle("rotateZ")
    sideNav.classList.toggle("transformY")
})

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){

        // rmove active class
        for(var link of links) {
            link.classList.remove("active")
        }

        // adds active class to link
        this.classList.add("active")
    })
}

// closes mob-nav when cliked on link
for(var i = 0; i < mobs.length; i++){
    mobs[i].addEventListener("click", function(){

        sideNav.classList.toggle("transformY")
        burger.classList.remove("rotateZ")

    })
}