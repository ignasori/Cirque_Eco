popup = {
    currentImage: 0,
    previousImage: -1,
    timeOut: 0,
    getPopup: function(selector) {
        $.colorbox({
            html: $('.popup' + selector).clone()
        });
        if (selector.indexOf("onlymap") >= 0) {
            $(document).bind('cbox_complete', function() {
                popup.addMapPopup();
                $(document).unbind('cbox_complete');
            });
        } else if (selector.indexOf("onlyslideshow") >= 0) {
            popup.manageSlideShow("onlyslideshow");
        } else if (selector.indexOf("slideshow-text") >= 0) {
            popup.manageSlideShow("slideshow-text");
        }
    },
    addMapPopup: function() {
        $('.popup.onlymap .block #map').eq(1).hide();
        var mapOptions = {
            streetViewControl: false
        };
        var map = new google.maps.Map($('.popup.onlymap .block #map').get(1), mapOptions);
        var bounds = new google.maps.LatLngBounds();
        var markers = $('.popup.onlymap .block #map').attr('markers');
        markers = markers.split(";");
        $.each(markers, function(key, value) {
            var coordinates = value.split(',');
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(coordinates[0], coordinates[1]),
                map: map
            });
            bounds.extend(marker.position);
        });
        map.fitBounds(bounds);
        var listener = google.maps.event.addListener(map, "idle", function() {
            $('.popup.onlymap .block #map').eq(1).show();
            google.maps.event.trigger(map, 'resize');
            if (typeof $('.popup.onlymap .block #map').attr('zoom') !== 'undefined') {
                var zoom = $('.popup.onlymap .block #map').attr('zoom');
                if (zoom !== "") {
                    map.setZoom(parseInt(zoom));
                } else {
                    map.setZoom(10);
                }
            } else {
                map.setZoom(10);
            }
            google.maps.event.removeListener(listener);
        });
    },
    manageSlideShow: function(selector) {
        $(document).bind('cbox_complete', function() {
            popup.animateSlideShow('.popup.'+selector);
            popup.manageSlider('.popup.'+selector);
            $(document).unbind('cbox_complete');
            $(document).bind('cbox_cleanup', function() {
                popup.hideAllSlideImages('.popup.'+selector);
                $(document).unbind('cbox_cleanup');
            });
        });
    },
    manageSlider: function(selector) {
        var srcActive = '';
        var srcInactive = '';
        if ($('#slideNavigation .item img').attr('src').indexOf('Inactive') >= 0) {
            srcInactive = $('#slideNavigation .item img').attr('src');
            srcActive = $('#slideNavigation .item img').attr('src').replace("slide_Inactive.png", "slide_Active.png");
        } else {
            srcActive = $('#slideNavigation .item img').attr('src');
            srcInactive = $('#slideNavigation .item img').attr('src').replace("slide_Active.png", "slide_Inactive.png");
        }
        $(selector).eq(1).find('#slideNavigation .item').remove();
        var images = $(selector).eq(1).find('.images').children('img').length;
        for (var i = 0; i < images; i++) {
            var item = '<div class="item">';
            if (i === popup.currentImage) {
                item += '<img alt="pointActive" src="' + srcActive + '">';
            } else {
                item += '<img alt="pointInactive" src="' + srcInactive + '">';
            }
            item += '</div>';
            $(selector).eq(1).find("#slideNavigation").append(item);
        }
        popup.alignSlideNavigation(selector);
    },
    alignSlideNavigation: function(selector) {
        var popupWidth = $(selector).eq(1).find('.block .images img').outerWidth();
        var slideWidth = $(selector).eq(1).find('#slideNavigation').outerWidth();
        var position = (popupWidth / 2) - (slideWidth / 2) + 15;
        $(selector).eq(1).find('#slideNavigation').css('left', position + 'px');
    },
    animateSlideShow: function(selector) {
        $(selector).eq(1).find('.images img').eq(popup.currentImage).fadeTo(500, 1);
        setTimeout(function() {
            popup.manageSlider(selector);
        }, 250);
        $(selector).eq(1).find(".images img").eq(popup.previousImage).fadeTo(500, 0, function() {
            var images = $(selector).eq(1).find('.images').children('img').length;
            popup.previousImage = popup.currentImage;
            if (popup.currentImage < images - 1) {
                popup.currentImage++;
            } else {
                popup.currentImage = 0;
            }
            popup.timeOut = setTimeout(function() {
                popup.animateSlideShow(selector);
            }, 3000);
        });
    },
    hideAllSlideImages: function(selector) {
        var images = $(selector).eq(1).find('.images').children('img').length;
        for (var i = 0; i < images; i++) {
            $(selector).eq(1).find('.images img').css('opacity', 0);
        }
        popup.currentImage = 0;
        popup.previousImage = -1;
        clearTimeout(popup.timeOut);
    }
};