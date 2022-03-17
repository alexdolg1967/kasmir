// Подключение свайпера
//import Swiper, { Navigation, Pagination } from "swiper";
//Swiper.use([Navigation, Pagination]);
const mainSlider = new Swiper(".main-slider", {
    direction: "vertical",
    sliderPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    mousewheelControl: true,
    speed: 2400,
    parallax: true,
    pagination: {
        el: ".number .total",
        type: "custom",
        renderCustom: function (swiper, current, total) {
            let totalRes = total >= 10 ? total : `0${total}`;
            return totalRes;
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 50,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// slide Change

const curnum = document.querySelector(".number .current");
const pagcur = document.querySelector(".slider-pagination-current__num");

mainSlider.on("slideChange", function () {
    let index = mainSlider.realIndex + 1,
        indexRes = index >= 10 ? index : `0${index}`;
    curnum.innerHTML = indexRes;
    pagcur.innerHTML = indexRes;
});
