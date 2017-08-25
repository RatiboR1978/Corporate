$(function () {

    /* Кнопка для видео
    ========================*/
    var video = $("video"),
        pauseButton = $("#pause");
    pauseButton.bind('click', function() {
        if (video.get(0).paused) {
            video.get(0).play();
            $('.header__play').css({'background': 'url(img/pause.png) no-repeat'});

        } else {
            video.get(0).pause();
            $('.header__play').css({'background': 'url(img/play.png) no-repeat'});
        }
    });

    /* Wow.js
     ========================*/
    new WOW().init();


});