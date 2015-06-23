$(document).ready(function () {
    main.init();
});

main = {
    init: function () {
        $('.swipebox').swipebox();
        main.bindEvents();
        main.homeStart();
        $('#container .content1 .slide').hide();
    },
    menu: true,
    index: null,
    fullScreenOptions: {},
    centers: [],
    currentSlide: null,
    bindEvents: function () {
        $(".content-white nav .menuItem img").click(main.menuClick);
        $("#fullscreen .click").click(main.fullScreenClick);
        $("#container .content1 .slide .slideContent .image").hover(main.changeImageToReal, main.changeImageToColor);
        $('#container .content1 .slide .navigation .arrowDown').click(main.nextSlide);
        $('#container .content1 .slide .navigation .arrowUp').click(main.prevSlide);
    },
    homeStart: function () {
        var urlWhite = $('#container .content .slide-0').data('white');
        $('#container .content-white').css('background-image', 'url(' + urlWhite + ')');
        $('#page').fadeIn(700, function () {
            $('#fullbackground').fadeIn(1000, function () {
                $('#home .center .title, #home .center .separator, #home .center .text').hide();
                $('#home .center').animate({top: '50%'}, 1000, function () {
                    $('#home .center .title, #home .center .separator, #home .center .text').fadeIn(1000, function () {
                        $('#home .center .separator img').show(300);
                        $('#home .center .separator .line').eq(0).show('slide', {}, 300, function () {
                            $('#home .center .separator .line').eq(1).show('slide', {}, 300);
                        });
                        var left = screen.width - 230;
                        $('#container').animate({left: left + "px"}, 700, function () {
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
        if (main.index !== $(this).parent().index()) {
            if (main.index !== null) {
                var index = $(this).parent().index();
                $('#container .content1 .slide-' + main.index + ' .itemSlide').eq(main.currentSlide).animate({marginTop: screen.height + "px"}, 1000, function () {
                    $('#container .content1 .slide-' + main.index).hide();
                    main.index = index;
                    $('#container .content1 .slide-' + main.index).show(500);
                    main.changeSlide();
                });
            } else {
                main.index = $(this).parent().index();
                $('#container .content1 .slide-' + main.index).show();
                main.changeSlide();
            }
        }
    },
    changeSlide: function () {
        main.hideSlideContent();
        if (main.menu) {
            var left = $('#container').position().left;
            left = left - 650;
            $('#home .center').animate({top: '150%'}, 700, function () {
                $('#container').css('left', left + 'px');
                $("#container .content-white").css('left', '650px');
                $("#container .content-color").css('left', '115%');
                main.changeBackground();
            });
        } else {
            main.changeBackground();
        }
    },
    chooseSlide: function () {
        var color = false;
        if ($('#container .content .slide-' + main.index).parent().parent().hasClass("content-color")) {
            color = true;
        }
        main.currentSlide = 0;
        if (color) {
            $('#container .content-color').animate({left: '-75px'}, 700);
            $("#container .content-white").animate({left: '650px'}, 700, main.showContent);
        } else {
            $('#container .content-white').animate({left: '0'}, 700, main.showContent);
        }

        if (main.menu) {
            $("#fullscreen").effect("slide", {direction: "left"}, 1000);
            if (!color) {
                $('#container .content-color').delay(400).animate({left: '-75px'}, 700);
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
        main.calculateCenter();
        var height = screen.height;
        setTimeout(function () {
            $('#container .content1 .slide-' + main.index + ' .slideContent .slideLogo').css('margin-top', height + "px");
            $('#container .content1 .slide-' + main.index + ' .slideContent .title-slide').css('margin-top', height + "px");
            $('#container .content1 .slide-' + main.index + ' .slideContent .line').hide();
            $('#container .content1 .slide-' + main.index + ' .slideContent .textContent').css('margin-top', height + "px");

            $('#container .content1 .slide-' + main.index + ' .slideContent .image').css('margin-top', height + "px");
            $('#container .content1 .slide-' + main.index + ' .slideContent .image p').hide();

            $('#container .content1 .slide-' + main.index + ' .navigation').css('margin-top', "-215px"); //default margin-top: -65px
            $('#container .content1 .slide-' + main.index + ' .navigation .arrowDown img').css('margin-top', "150px");
            $('#container .content1 .slide-' + main.index + ' .navigation img').css('opacity', 0);
            $('#container .content1 .slide-' + main.index + ' .navigation .numbers').hide();

            $('#container .content1 .slide-' + main.index + ' .slideContent .itemSlide').hide();
        }, 100);
    },
    calculateCenter: function () {
        $('#container .content1 .slide-' + main.index + ' .slideContent .itemSlide').hide();
        main.centers = [];
        $('#container .content1 .slide-' + main.index + ' .slideContent .itemSlide').each(function () {
            $(this).show();
            main.centers.push($(this).height() / 2);
        });
    },
    showContent: function () {
        main.updateNavigation();
        $('#container .content1 .slide-' + main.index + ' .itemSlide').eq(main.currentSlide).animate({marginTop: "0px", opacity: 1}, 700);
        $('#container .content1 .slide-' + main.index + ' .slideContent .itemSlide').eq(main.currentSlide).show();
        $('#container .content .slide-' + main.index).animate({marginTop: '-' + main.centers[main.currentSlide] + 'px'}, 700);
        if ($('#container .content1 .slide-' + main.index + ' .itemSlide').eq(main.currentSlide).hasClass("text-slide") || $('#container .content1 .slide-' + main.index + ' .itemSlide').eq(main.currentSlide).hasClass("video-slide")) {
            $('#container .content1 .slide-' + main.index + ' .itemSlide').eq(main.currentSlide).find('.slideLogo').animate({marginTop: 0}, 1000);
            $('#container .content1 .slide-' + main.index + ' .itemSlide').eq(main.currentSlide).find('.title-slide').delay(500).animate({marginTop: 0}, 1000, function () {
                $('#container .content1 .slide-' + main.index + ' .itemSlide').eq(main.currentSlide).find('.line').show('slide', {}, 700);
            });
            $('#container .content1 .slide-' + main.index + ' .itemSlide').eq(main.currentSlide).find('.textContent').delay(1500).animate({marginTop: 0}, 1000, function () {
                main.showNavigation();
            });
        } else if ($('#container .content1 .slide-' + main.index + ' .itemSlide').eq(main.currentSlide).hasClass("images-slide") > 0) {
            var delay = 0;
            $('#container .content1 .slide-' + main.index + ' .itemSlide').eq(main.currentSlide).find('.image').each(function (index) {
                $(this).delay(delay).animate({marginTop: 0}, 700, function () {
                    if (index === 3) {
                        $(this).find('p').fadeIn(700, function () {
                            main.showNavigation();
                        });
                    } else {
                        $(this).find('p').fadeIn(700);
                    }
                });
                delay += 700;
            });
        }
    },
    showNavigation: function () {
        $('#container .content1 .slide-' + main.index + ' .navigation .arrowUp img').animate({opacity: 1});
        $('#container .content1 .slide-' + main.index + ' .navigation').animate({marginTop: '-65px'}, 700);
        $('#container .content1 .slide-' + main.index + ' .navigation .arrowDown img').delay(600).animate({opacity: 1, marginTop: 0}, 700);
        $('#container .content1 .slide-' + main.index + ' .navigation .numbers').delay(700).fadeIn(1000);
    },
    nextSlide: function () {
        if (main.currentSlide < ($('#container .content1 .slide-' + main.index + ' .itemSlide').length - 1)) {
            var top = $('#container .content1 .slide-' + main.index + ' .navigation').position().top;
            $('#container .content1 .slide-' + main.index + ' .navigation').css('top', top + "px");
            var height = screen.height;
            $('#container .content1 .slide-' + main.index + ' .itemSlide').eq(main.currentSlide).css('display', 'block');
            $('#container .content1 .slide-' + main.index + ' .itemSlide').eq(main.currentSlide).animate({marginTop: "-" + height + "px", opacity: 0}, 700, function () {
                $(this).hide();
                main.currentSlide++;
                main.showContent();
            });
        }
    },
    prevSlide: function () {
        if (main.currentSlide > 0) {
            var height = screen.height;
            $('#container .content1 .slide-' + main.index + ' .itemSlide').eq(main.currentSlide).css('display', 'block');
            $('#container .content1 .slide-' + main.index + ' .itemSlide').eq(main.currentSlide).animate({marginTop: height + "px", opacity: 0}, 700, function () {
                $(this).hide();
                main.currentSlide--;
                main.showContent();
            });
        }
    },
    updateNavigation: function () {
        var total = $('#container .content1 .slide-' + main.index + ' .itemSlide').length;
        $('#container .content1 .slide-' + main.index + ' .navigation .bigNumber').text(main.currentSlide + 1);
        $('#container .content1 .slide-' + main.index + ' .navigation .total').text(total);
    },
    fullScreenClick: function () {
        if ($('#fullscreen').hasClass('open')) {
            $('#fullscreen').removeClass('open');
            $('#container').animate({left: main.fullScreenOptions['leftPosition'] + 'px'}, 700);
            if (main.fullScreenOptions['openColor']) {
                $("#container .content-white").animate({left: '650px'}, 700);
            }
        } else {
            main.fullScreenOptions['openColor'] = false;
            if ($("#container .content-white").position().left === 650) {
                main.fullScreenOptions['openColor'] = true;
            }
            main.fullScreenOptions['leftPosition'] = $('#container').position().left;
            $("#container .content-white").animate({left: '0px'}, 700);
            $('#fullscreen').addClass('open');
            var left = screen.width - 230;
            $('#container').animate({left: left + 'px'}, 700);
        }
    },
    changeImageToReal: function () {
        var image = $(this).data('hover');
        $(this).children('a').children('img').attr('src', image);
    },
    changeImageToColor: function () {
        var image = $(this).data('image');
        $(this).children('a').children('img').attr('src', image);
    }
};