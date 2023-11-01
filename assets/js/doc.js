let view = document.querySelector(".view");
// navbar
function navbar() {
    view.classList.toggle("end-0");
    document.querySelector("body").classList.toggle("overflow-hidden");
};
function navbar2() {
    view.classList.toggle("end-0");
    document.querySelector("body").classList.remove("overflow-hidden");
};

$('.slider1').slick({
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                dots: true,
            }
        }
    ]
});

$('.slider2').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: '0',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        },
        {
            breakpoint: 768,
            settings: 'unslick',
        }
    ]
});

$('.slider3').slick({
    autoplay: true,
    centerMode: true,
    centerPadding: '270px',
    slidesToShow: 1,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
            }
        },
    ]
});

// back to top

let topIcon = document.getElementById("top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topIcon.style.display = "flex";
    }
    else {
        topIcon.style.display = "none";
    }
});

function up() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// preloader
const preloader = document.getElementById("preloader");
setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
    document.body.classList.remove("overflow-hidden")
}, 2000);



