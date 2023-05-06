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




// Options slides
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
        1155: {
            direction: 'horizontal',
            slidesPerView: 3
        }
    }
});


// Slides (reviews)
const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // slidesPerView: 3,
    // slidesPerGroup: 2,
    // spaceBetween: 100,
    
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