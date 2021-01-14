$(document).ready(function () {

    $('.dropdown').click(function (event) {
        /* Act on the event */
        event.preventDefault();

        // 讓點擊到的 dropdown找到父元素 ，再找裡面的 P 判斷收闔
        $(this).parent().find('p').slideToggle();

        // 自己以外的 p 隱藏起來
        $(this).parent().siblings().find('p').slideUp();
    });
});