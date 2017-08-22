$(function () {
    var video = $("video"),
        pauseButton = $("#pause");
    pauseButton.bind('click', function() {
        if (video.get(0).paused) {
            video.get(0).play();
            $('.header__play').css({'background': 'url(../img/pause.png)'});

        } else {
            video.get(0).pause();
            $('.header__play').css({'background': 'url(../img/play.png)'});
        }
    });





});