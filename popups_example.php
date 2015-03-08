<?php

include './php/header.php';
getHeader('');
?>
<style type="text/css" scoped>
    #page {
        background-color: #7ab3dd;
    }
    a {
        font-size: 48px;
        color: blue;
        text-decoration: underline;
        cursor: pointer;
    }
</style>
<div id="page">
    <a onclick="popup.getPopup('.video-text')">Video and Text</a><br><br>
    <a onclick="popup.getPopup('.onlyfoto')">Foto</a><br><br>
    <a onclick="popup.getPopup('.foto-text')">Foto and Text</a><br><br>
    <a onclick="popup.getPopup('.onlymap')">Map</a><br><br>
    <a onclick="popup.getPopup('.onlyslideshow')">Slideshow</a><br><br>
    <a onclick="popup.getPopup('.slideshow-text')">Slideshow and Text</a><br><br>
    <a onclick="popup.getPopup('.double-text')">Double Text</a><br><br>
    <a onclick="popup.getPopup('.simple-text')">Simple Text</a><br><br>
    <a onclick="popup.getPopup('.onlyvideo')">Video</a><br><br>
    <a href="index.html">BACK TO MENU</a>
</div>

<div class="popups">
    <!-- POPUPS -->

    <!-- VIDEO AND TEXT POPUP -->
    <div class="popup video-text">
        <div class="block">
            <div class="video">
                <iframe width="525" height="300" src="//www.youtube.com/embed/JVg3NIdSJVU" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="text">
                <div class="title title-red">
                    Video and Text
                </div>
                <div class="explication normal-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </div>
        </div>
    </div>

    <!-- FOTO POPUP -->
    <div class="popup onlyfoto">
        <div class="block">
            <div class="image">
                <img alt="popupimage" src="img/img1.jpg">
            </div>
        </div>
    </div>

    <!-- FOTO AND TEXT POPUP -->
    <div class="popup foto-text">
        <div class="block">
            <div class="image">
                <img alt="popupimage" src="img/img1.jpg">
            </div>
            <div class="text">
                <div class="title title-red">
                    Foto and Text
                </div>
                <div class="explication normal-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </div>
        </div>
    </div>

    <!-- MAP POPUP -->
    <div class="popup onlymap">
        <div class="block">
            <div id="map" markers="20.628455,-87.067655" zoom="8"></div>
        </div>
    </div>

    <!-- SLIDESHOW POPUP -->
    <div class="popup onlyslideshow">
        <div class="block">
            <div class="images">
                <img alt="popupimage" src="img/img1.jpg">
                <img alt="popupimage" src="img/thumb01.jpg">
                <img alt="popupimage" src="img/thumb02.jpg">
                <img alt="popupimage" src="img/thumb03.jpg">
                <img alt="popupimage" src="img/thumb04.jpg">
            </div>
            <div id="slideNavigation">
                <div class="item">
                    <img alt="pointActive" src="img/elements/slide_Active.png">
                </div>
                <div class="item">
                    <img alt="pointInactive" src="img/elements/slide_Inactive.png">
                </div>
            </div>
        </div>
    </div>

    <!-- SLIDESHOW AND TEXT POPUP -->
    <div class="popup slideshow-text">
        <div class="block">
            <div class="images">
                <img alt="popupimage" src="img/img1.jpg">
                <img alt="popupimage" src="img/thumb01.jpg">
                <img alt="popupimage" src="img/thumb02.jpg">
                <img alt="popupimage" src="img/thumb03.jpg">
                <img alt="popupimage" src="img/thumb04.jpg">
            </div>
            <div id="slideNavigation">
                <div class="item">
                    <img alt="pointActive" src="img/elements/slide_Active.png">
                </div>
                <div class="item">
                    <img alt="pointInactive" src="img/elements/slide_Inactive.png">
                </div>
            </div>
            <div class="text">
                <div class="title title-red">
                    SlideShow and Text
                </div>
                <div class="explication normal-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </div>
        </div>
    </div>

    <!-- DOUBLE TEXT POPUP -->
    <div class="popup double-text">
        <div class="block">
            <div class="text">
                <div class="title title-red">
                    Double Text
                </div>
                <div class="explications">
                    <div class="explication normal-text left">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> <br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div class="explication normal-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- SIMPLE TEXT POPUP -->
    <div class="popup simple-text">
        <div class="block">
            <div class="text">
                <div class="title title-red">
                    Simple Text
                </div>
                <div class="explication normal-text left">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> <br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </div>
        </div>
    </div>
    
    <!-- VIDEO POPUP -->
    <div class="popup onlyvideo">
        <div class="block">
            <div class="video">
                <iframe width="525" height="300" src="//www.youtube.com/embed/JVg3NIdSJVU" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    </div>

    <!-- END POPUPS -->
</div>
<?php

include './php/footer.php';
getFooter('');
?>
