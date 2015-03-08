$(document).ready(function() {
    general.init();
});

general = {
    called: 0,
    stateOfImages: Array(),
    init: function() {
        general.alignMenu();
        $(window).resize(general.alignMenu);
        if (!navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i)) {
            general.checkBrowserAgent();
        }
        general.getAllImages();
    },
    getAllImages: function() {
        var images = $('#page img');
        $(images).each(function(index, value) {
            if (!value.complete) {
                general.stateOfImages.push(false);
                value.onload = function() {
                    general.preloadImages(index);
                };
            } else {
                general.stateOfImages.push(true);
            }
        });
        general.preloadImages();
    },
    preloadImages: function(index) {
        var ok = true;
        if (typeof index !== 'undefined') {
            general.stateOfImages[index] = true;
        }
        for (var i = 0; i < general.stateOfImages.length; i++) {
            if (general.stateOfImages[i] === false) {
                ok = false;
            }
        }
        if ((ok === true && general.called === 0)) {
            general.called = 1;
            $(window).resize();
            page.init();
            $('#navigation-menu').show('slide', {direction: 'rigth'}, 400);
        }
    },
    checkBrowserAgent: function() {
        var path_modifier = '';
        if (window.location.pathname.indexOf("pages") > 0) {
            path_modifier = '../../';
        }
        var height_document = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var min_height_allowed = 600;
        //var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); //Test if we are using a mobile device
        if (navigator.userAgent.match(/msie|trident|firefox/i)) {
            if (height_document < min_height_allowed) {
                window.location.replace(path_modifier + 'SmallScreen.html');
            }
        } else {
            //When zoom is greater than 100 we apply some corrections to force 100% zoom
            var zoom = detectZoom.zoom();
            var device = detectZoom.device();
            if (zoom > 1 || device > 1) {
                var zoom_detected = "";
                zoom > device ? zoom_detected = zoom : zoom_detected = device;
                $('body').css('zoom', ' ' + (200 - (zoom_detected * 100)) + '%');
                //$('body').css('-webkit-transform', 'scale(' + (2 - (zoom_detected)) + ',' + (2 - (zoom_detected)) + ') !important');
                $('body').css('-moz-transform', 'scale(' + (2 - (zoom_detected)) + ',' + (2 - (zoom_detected)) + ')');
            }

            //Zoom control in low resolution, we rescale the elements to fit the screen
            if (height_document < min_height_allowed) {
                /*630        ->95
                 height_document->x*/
                var zoom_level = (95 * height_document) / min_height_allowed;
                //$('body').css('MozTransform', 'scale(' + (zoom_level+5)/100 + ')');
                $('body').css('-moz-transform', 'scale(' + (70) / 100 + ',' + (70) / 100 + ')');
                $('body').css('zoom', ' ' + zoom_level + '%');

                var bgr_correction = 100 + (100 - zoom_level) * 2;
                var x = document.createElement("STYLE");
                var t = document.createTextNode(".vegas-background {zoom:" + bgr_correction + "%;-moz-transform:scale(" + bgr_correction / 100 + "," + bgr_correction / 100 + ");}");

                x.appendChild(t);
                document.head.appendChild(x);
                //window.location.replace(path_modifier + 'SmallScreen.html');
            } else {
                //When zoom is greater than 100 we apply some corrections to force 100% zoom
                var zoom = detectZoom.zoom();
                var device = detectZoom.device();
                if (zoom > 1 || device > 1) {
                    var zoom_detected = "";
                    zoom > device ? zoom_detected = zoom : zoom_detected = device;
                    $('body').css('zoom', ' ' + (200 - (zoom_detected * 100)) + '%');
                    //$('body').css('-webkit-transform', 'scale(2) !important');
                    $('body').css('-moz-transform', 'scale(' + (2 - (zoom_detected)) + ',' + (2 - (zoom_detected)) + ')');
                }
                //alert("zoom "+zoom, ",device "+device);
            }
        }
    },
    alignMenu: function() {
        var windowHeight = $('#page').outerHeight();
        var items = $('#navigation-menu .items').children('.item').length;
        var itemsHeight = $('#navigation-menu .item').height() * items;
        var position = (windowHeight / 2) - (itemsHeight / 2);
        $('#navigation-menu .items').css('top', position + 'px');
    },
    setBackground: function(url) {
        $.vegas('stop');
        $.vegas({
            src: url,
            fade: 700,
            loading: false
        });
    },
    setSlideShowBackground: function(urls) {
        $.vegas('slideshow', {
            delay: 4000,
            backgrounds: urls,
            loading: false,
            preload: true
        });
    } 
};