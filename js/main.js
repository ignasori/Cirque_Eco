$(document).ready(function () {
    main.init();
});

main = {
    init: function () {
        main.bindEvents();
        main.homeStart();
    },
    menu: true,
    index: null,
    bindEvents: function () {
        $(".content-white nav .menuItem img").click(main.menuClick);
        $("#fullscreen .click").click(main.fullScreenClick);
    },
    homeStart: function () {
        var urlWhite = $('#container .content .slide-0').data('white');
        $('#container .content-white').css('background-image', 'url(' + urlWhite + ')');
        $('#page').fadeIn(700, function () {
            $('#fullbackground').fadeIn(1000, function () {
                $('#home .center .title, #home .center .separator, #home .center .text').hide();
                $('#home .center').animate({top: '50%'}, 700, function () {
                    $('#home .center .title, #home .center .separator, #home .center .text').fadeIn(700, function () {
                        $('#container').animate({left: "80%"}, 700, function () {
                            var time = 0;
                            $(".content-white nav .menuItem").each(function () {
                                $(this).find('img').delay(time).animate({height: "62px", width: "58px"}, 700);
                                time += 500;
                            });
                        });
                    });
                });
            });
        });
    },
    menuClick: function () {
        main.index = $(this).parent().index();
        if (main.menu) {
            $('#home .center').animate({top: '150%'}, 700, function () {
                $('#container').css('left', '30%');
                $("#container .content-white").css('left', '50%');
                $("#container .content-color").css('left', '115%');
                main.changeBackground();
            });
        } else {
            main.changeBackground();
        }
        //main.hideSlideContent();
    },
    chooseSlide: function () {
        var color = false;
        if ($('#container .content .slide-' + main.index).parent().parent().hasClass("content-color")) {
            color = true;
        }

        if (color) {
            $('#container .content-color').animate({left: '-45px'}, 700);
            $("#container .content-white").animate({left: '50%'}, 700, main.showContent);
        } else {
            $('#container .content-white').animate({left: '0'}, 700, main.showContent);
        }

        if (main.menu) {
            $("#fullscreen").effect("slide", {direction: "left"}, 1000);
            if (!color) {
                $('#container .content-color').delay(400).animate({left: '-45px'}, 700);
            }
        }
        main.menu = false;
    },
    changeBackground: function () {
        var urlWhite = $('#container .content .slide-' + main.index).data('white');
        var urlColor = $('#container .content .slide-' + main.index).data('color');
        var urlBackground = $('#container .content .slide-' + main.index).data('background');
        if (main.menu) {
            $('#container .content-color.content1').css('background-image', 'url(' + urlColor + ')');
            //$('#fullbackground').css('background-image', 'url(' + urlBackground + ')');
            //$('#fullbackground').fadeIn(1000);
        } else {
            $('#container .content-color.content2').css('background-image', 'url(' + urlColor + ')');
            $('#container .content-color.content2').fadeIn(1000, function () {
                $(this).hide();
                $('#container .content-color.content1').css('background-image', 'url(' + urlColor + ')');
            });
        }
        $('#fullbackground2').css('background-image', 'url(' + urlBackground + ')');
        $('#fullbackground2').fadeIn(1000, function () {
            $('#fullbackground').css('background-image', 'url(' + urlBackground + ')');
            $(this).hide();
        });
        $('#container .content-white.content1').css('background-image', 'url(' + urlWhite + ')');
        main.chooseSlide();
    },
    hideSlideContent: function () {
        var margin = $('#container .content .slide-' + main.index).height() / 2;
        $('#container .content .slide-' + main.index).css('margin-top', '-' + margin + 'px');
        setTimeout(function () {
            $('#container .content1 .slide-' + main.index + ' .slideContent .slideLogo').css('margin-top', '120%');
            $('#container .content1 .slide-' + main.index + ' .slideContent .title-slide').css('margin-top', '100%');
            $('#container .content1 .slide-' + main.index + ' .slideContent .line').hide();
            $('#container .content1 .slide-' + main.index + ' .slideContent .textContent').css('margin-top', '100%');
            $('#container .content1 .slide-' + main.index + ' .navigation').css('margin-top', '-130px');
            $('#container .content1 .slide-' + main.index + ' .navigation .arrowDown img').css('margin-top', '100%');
            $('#container .content1 .slide-' + main.index + ' .navigation img').hide();
            $('#container .content1 .slide-' + main.index + ' .navigation .numbers').hide();
        }, 100);
    },
    showContent: function () {
        
    },
    fullScreenClick: function () {
        if ($('#fullscreen').hasClass('open')) {
            $('#fullscreen').removeClass('open');
            $('#container').animate({left: '30%'}, 700);
        } else {
            $('#fullscreen').addClass('open');
            $('#container').animate({left: '110%'}, 700);
        }
    }
};