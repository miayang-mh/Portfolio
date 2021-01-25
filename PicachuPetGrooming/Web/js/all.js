
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    // 幻燈片少於多少，則居中幻燈片!!!
    // slidesPerGroup: 1,
    // 一次一個
    // spaceBetween: 0,
    // spaceBetween 燈片之間距離=> margin-right:30px
    centeredSlidesBounds: true,
    centeredSlides: true,
    // centeredSlides: true, 居中
    grabCursor: true,
    // 滑鼠變手
    loop: true,
    // 自動循環
    



    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },





    // 分頁器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // 前進退後鈕
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
