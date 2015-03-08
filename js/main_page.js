page = {
    currentPosition: 1,
    blocks: 0,
    blocksToShow: [1, 2, 3],
    blocksToHide: [],
    init: function() {
        page.blocks = $('#categories').children('.block').length;
        page.checkControls();
        page.setImageBackground();
        $('#logo').css('width', $('#page').outerWidth() - 65 + 'px');
        $('#content').css('width', $('#page').outerWidth() - 65 + 'px');
        $('#logo').fadeIn(500, function() {
            page.showContent(false);
        });
    },
    setImageBackground: function() {
        var images = $('#page .background-images').children('img');
        general.setBackground(images.attr('src'));
    },
    manageBlocks: function(direcction) {
        if (direcction === 0) { // Right
            var lastBlockShown = page.blocksToShow[page.blocksToShow.length - 1];
            page.blocksToHide = page.blocksToShow;
            page.blocksToShow = [];
            var count = 1;
            while (count < 4) {
                lastBlockShown++;
                if (lastBlockShown <= page.blocks) {
                    page.blocksToShow.push(lastBlockShown);
                    count++;
                } else {
                    count = 4;
                }
            }
        } else { // Left
            var firstBlockShown = page.blocksToShow[0];
            page.blocksToHide = page.blocksToShow;
            page.blocksToShow = [];
            var count = 1;
            while (count < 4) {
                firstBlockShown--;
                if (firstBlockShown >= 1) {
                    page.blocksToShow.push(firstBlockShown);
                    count++;
                } else {
                    count = 4;
                }
            }
        }
        page.blocksToShow.sort();
        page.blocksToHide.sort();
    },
    showContent: function(reverse) {
        var count = page.blocksToShow[0];
        var last = page.blocksToShow[page.blocksToShow.length - 1];
        loop();
        function loop() {
            if (page.blocksToShow.length === 1) {
                page.currentPosition = 2;
            }
            var position = page.calculatePosition();
            if (reverse === true) {
                switch (page.currentPosition) {
                    case 1:
                        $(".block:nth-child(" + count + ")").velocity({right: position + 'px'}, 700);
                        break;
                    case 2:
                        $(".block:nth-child(" + count + ")").delay(400).velocity({right: position + 'px'}, 700);
                        break;
                    case 3:
                        $(".block:nth-child(" + count + ")").delay(200).velocity({right: position + 'px'}, 700);
                        break;
                }
            } else {
                $(".block:nth-child(" + count + ")").velocity({right: position + 'px'}, 700);
            }
            setTimeout(function() {
                if (count < last) {
                    count++;
                    loop();
                } else {
                    page.currentPosition = 1;
                    setTimeout(function() {
                        page.showText();
                    }, 600);
                }
            }, 100);
        }
    },
    calculatePosition: function() {
        var windowWidth = $(document).outerWidth();
        var windowCenter = windowWidth / 2;
        var blockWidth = $('.block').first().outerWidth();
        var margin = 10;
        switch (page.currentPosition) {
            case 1: //left
                page.currentPosition = 2;
                return windowCenter + (blockWidth / 2) + margin-32;
            case 2: // center
                page.currentPosition = 3;
                return windowCenter - (blockWidth / 2)-32;
            case 3: // right
                page.currentPosition = 1;
                return windowCenter - (blockWidth / 2) - margin - blockWidth-32;
        }
    },
    showText: function() {
        $.each(page.blocksToShow, function(key, value) {
            $(".block:nth-child(" + value + ") .text, #navigation-categories").slideDown(700);
        });
        setTimeout(function() {
            $.each(page.blocksToHide, function(key, value) {
                $(".block:nth-child(" + value + ") .text").hide();
            });
        }, 700);
    },
    rightContent: function() {
        page.manageBlocks(0);
        $("#navigation-categories").slideUp(400);
        setTimeout(function() {
            page.checkControls();
            var block = $('.block').outerWidth(true);
            var position = (block * 2) + $('#page').outerWidth() + 20;
            $.each(page.blocksToHide, function(key, value) {
                $(".block:nth-child(" + value + ")").velocity({right: position + 'px'}, 700);
                position -= block;
            });
            page.showContent(false);
        }, 400);
    },
    leftContent: function() {
        page.manageBlocks(1);
        $("#navigation-categories").slideUp(400);
        setTimeout(function() {
            page.checkControls();
            var block = $('.block').outerWidth(true);
            var position = block + 80;
            $.each(page.blocksToHide, function(key, value) {
                $(".block:nth-child(" + value + ")").velocity({right: '-' + position + 'px'}, 700);
                position += block;
            });
            page.showContent(true);
        }, 400);
    },
    checkControls: function() {
        $('#navigation-categories .left-control').unbind('click');
        $('#navigation-categories .right-control').unbind('click');
        if (page.blocksToShow[0] === 1) {
            var src = $('#navigation-categories .left-control img').attr('src').replace("nav_Left.jpg", "nav_Left_Trans.png");
            $('#navigation-categories .left-control img').attr('src', src);
        } else {
            var src = $('#navigation-categories .left-control img').attr('src').replace("nav_Left_Trans.png", "nav_Left.jpg");
            $('#navigation-categories .left-control').on('click', page.leftContent);
            $('#navigation-categories .left-control img').attr('src', src);
        }
        if (page.blocksToShow[page.blocksToShow.length - 1] === page.blocks) {
            var src = $('#navigation-categories .right-control img').attr('src').replace("nav_Right.jpg", "nav_Right_Trans.png");
            $('#navigation-categories .right-control img').attr('src', src);
        } else {
            var src = $('#navigation-categories .right-control img').attr('src').replace("nav_Right_Trans.png", "nav_Right.jpg");
            $('#navigation-categories .right-control').on('click', page.rightContent);
            $('#navigation-categories .right-control img').attr('src', src);
        }
    }
};
