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
    leftPosition: null,
    bindEvents: function () {
        $(".content-white nav .menuItem img").click(main.menuClick);
        $("#fullscreen .click").click(main.fullScreenClick);
        $("#container .content1 .slide .slideContent .image").hover(main.changeImageToReal, main.changeImageToColor);
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
        main.hideSlideContent();
    },
    chooseSlide: function () {
        var color = false;
        if ($('#container .content .slide-' + main.index).parent().parent().hasClass("content-color")) {
            color = true;
        }

        if (color) {
            $('#container .content-color').animate({left: '-45px'}, 700);
            $("#container .content-white").animate({left: '650px'}, 700, main.showContent);
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
        var height = $('#page').height();
        setTimeout(function () {
            $('#container .content1 .slide-' + main.index + ' .slideContent .slideLogo').css('margin-top', height + "px");
            $('#container .content1 .slide-' + main.index + ' .slideContent .title-slide').css('margin-top', height + "px");
            $('#container .content1 .slide-' + main.index + ' .slideContent .line').hide();
            $('#container .content1 .slide-' + main.index + ' .slideContent .textContent').css('margin-top', height + "px");

            $('#container .content1 .slide-' + main.index + ' .slideContent .image').css('margin-top', height + "px");
            $('#container .content1 .slide-' + main.index + ' .slideContent .image p').hide();

            $('#container .content1 .slide-' + main.index + ' .navigation').css('margin-top', "-" + height + "px"); //default margin-top: -65px
            $('#container .content1 .slide-' + main.index + ' .navigation .arrowDown img').css('margin-top', height + "px");
            $('#container .content1 .slide-' + main.index + ' .navigation img').hide();
            $('#container .content1 .slide-' + main.index + ' .navigation .numbers').hide();
        }, 100);
        var delay = ((main.menu) ? 1500 : 800);
        setTimeout(function () {
            main.showContent(0);
        }, delay);
    },
    showContent: function (slide) {
        if ($('#container .content1 .slide-' + main.index + ' .itemSlide.text-slide').length > 0) {
            $('#container .content1 .slide-' + main.index + ' .itemSlide').eq(slide).find('.slideLogo').animate({marginTop: 0}, 700);
            $('#container .content1 .slide-' + main.index + ' .itemSlide').eq(slide).find('.title-slide').delay(300).animate({marginTop: 0}, 700);
            $('#container .content1 .slide-' + main.index + ' .itemSlide').eq(slide).find('.line').delay(800).show('slide', {}, 400);
            $('#container .content1 .slide-' + main.index + ' .itemSlide').eq(slide).find('.textContent').delay(900).animate({marginTop: 0}, 700, function () {
                 main.showNavigation();
            });
        } else if ($('#container .content1 .slide-' + main.index + ' .itemSlide.images-slide').length > 0) {
            var delay = 0;
            $('#container .content1 .slide-' + main.index + ' .itemSlide').eq(slide).find('.image').each(function (index) {
                $(this).delay(delay).animate({marginTop: 0}, 700, function () {
                    if(index === 3){
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
        $('#container .content1 .slide-' + main.index + ' .navigation img').delay(200).fadeIn(700);
        $('#container .content1 .slide-' + main.index + ' .navigation').animate({marginTop: '-65px'}, 700);
        $('#container .content1 .slide-' + main.index + ' .navigation .arrowDown img').animate({marginTop: 0}, 700);
        $('#container .content1 .slide-' + main.index + ' .navigation .numbers').delay(1350).fadeIn(700);
    },
    fullScreenClick: function () {
        if ($('#fullscreen').hasClass('open')) {
            $('#fullscreen').removeClass('open');
            $('#container').animate({left: main.leftPosition + 'px'}, 700);
        } else {
            main.leftPosition = $('#container').position().left;
            $('#fullscreen').addClass('open');
            $('#container').animate({left: '110%'}, 700);
        }
    },
    changeImageToReal: function () {
        var image = $(this).data('hover');
        $(this).children('img').attr('src', image);
    },
    changeImageToColor: function () {
        var image = $(this).data('image');
        $(this).children('img').attr('src', image);
    }
 };
