

var swiper = new Swiper(".latest-swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".button-left",
        prevEl: " .button-right",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
        390: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        820: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".post", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 34,
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        390: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        820: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 34,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 38,
        },
    },
});


var swiper2 = new Swiper(".testiomonial-slider", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-top",
        prevEl: ".swiper-button-bottom",
    },
});

var swiper2 = new Swiper(".testiomonial-slider-thumb", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-top",
        prevEl: ".swiper-button-bottom",
    },
    thumbs: {
        swiper: swiper2,
    },
});
var swiper = new Swiper(".testimonial-home2", {
    loop: false,
    slidesPerView: 1,
    navigation: {
        clickable: true,
        nextEl: ".button-left",
        prevEl: " .button-right",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        820: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
var swiper = new Swiper(".post-blog", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".awards-testimonial", {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 177,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        820: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".about-testimonial", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        450: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
       
        768: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
var swiper = new Swiper(".service-testimonial", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 177,
    breakpoints: {
        390: {
            slidesPerView: 1,
            spaceBetween: 177,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        820: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 177,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 177,
        },
    },
});
var swiper = new Swiper(".service-swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        390: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },
});
var swiper = new Swiper(".related-swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".button-left",
        prevEl: " .button-right",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        390: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        500: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
var swiper = new Swiper(".swiper-leadteam", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {

        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 66,
        },
    },
});



var swiper = new Swiper(".mainslider", {
    autoplay: {
        delay: 6000,
    },
    slidesPerView: 1,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".slide", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    speed: 500,
    spaceBetween: 60,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper =  new Swiper(".image-about", {
    loop:false,
    slidesPerView: 1,
    spaceBetween:0,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        550: {
            slidesPerView: 2,
            spaceBetween: 17,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 17,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 17,
        },
    },
});