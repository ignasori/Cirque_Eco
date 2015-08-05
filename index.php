<?php
if (!empty($_POST['ajax']) && $_POST['ajax']) {
    require_once './php/sendMail.php';
    getData();
} else {
    include './php/header.php';
    ?>
    <div id="page">
        <div id="fullbackground" data-startbackground="img/images/bg-frontpage.jpg"></div>
        <div id="fullbackground2"></div>
        <div class="background-slideshow-show">
            <div class="navigation">
                <div class="prev navs">
                    <img src="img/icons/popup-slideshow-previous.png">
                </div>
                <div class="next navs">
                    <img src="img/icons/popup-slideshow-next.png">
                </div>
            </div>
        </div>
        <section id="home">
            <!--<div class="background left "></div>
            <div class="background right"></div>-->
            <div class="center">
                <div class="logo"><img src="img/icons/Logo_Cirque_Eco.png" alt="crique-eco-logo"></div>
                <div class="title">
                    <h1>ENTERTAIMENT THAT DOESN'T COST THE EARTH!</h1>
                </div>
                <div class="separator">
                    <div class="line"></div>
                    <img src="img/icons/green_leaf.png" alt="leaf">
                    <div class="line"></div>
                </div>
                <div class="text">
                    <p>"As a performance duo Dream State Circus travel to many different communities worldwide, bringing circus colour, fun, and entertainment everywhere we go"</p>
                    <a href="#" class="openContactForm">Contact Form</a>
                </div>
            </div>
        </section>
        <div id="fullscreen">
            <div class="click"></div>
        </div>
        <div id="container">
            <div class="content-color content1">
                <!--
               *******************************
               SLIDES WITH BACKGROUND IN COLOR
               *******************************
                -->
                <div class="content">
                    <div class="slide slide-1" data-white="img/images/bg-menu-2.png" data-color="img/images/bg-logo2.png" data-background="img/images/background01.jpg">
                        <?php require_once './slides/slide1.php'; ?>
                    </div>
                    <div class="slide slide-3" data-white="img/images/bg-menu-4.png" data-color="img/images/bg-logo4.png" data-background="img/images/background02.jpg">
                        <?php require_once './slides/slide3.php'; ?>
                    </div>
                    <div class="slide slide-5" data-white="img/images/bg-menu-6.png" data-color="img/images/bg-logo6.png" data-background="img/images/background03.jpg">
                        <?php require_once './slides/slide5.php'; ?>
                    </div>
                </div>
            </div>
            <div class="content-color content2"></div>
            <div class="content-white content2"></div>
            <div class="content-white content1">
                <nav>
                    <div class="menuItem item-1">
                        <img src="img/icons/iconmenu_1.png" alt="menuIcon"/>
                    </div>
                    <div class="menuItem item-2">
                        <img src="img/icons/iconmenu_2.png" alt="menuIcon"/>
                    </div>
                    <div class="menuItem item-3">
                        <img src="img/icons/iconmenu_3.png" alt="menuIcon"/>
                    </div>
                    <div class="menuItem item-4">
                        <img src="img/icons/iconmenu_4.png" alt="menuIcon"/>
                    </div>
                    <div class="menuItem item-5">
                        <img src="img/icons/iconmenu_5.png" alt="menuIcon"/>
                    </div>
                    <div class="menuItem item-6">
                        <img src="img/icons/iconmenu_6.png" alt="menuIcon"/>
                    </div>
                </nav>
                <!--
                *****************************
                SLIDES WITH BACKGROUND WHITE
                *****************************
                -->
                <div class="content">
                    <div class="slide slide-0" data-white="img/images/bg-menu-1.png" data-color="img/images/bg-logo1.png" data-background="img/images/background05.jpg">
                        <?php require_once './slides/slide0.php'; ?>
                    </div>
                    <div class="slide slide-2" data-white="img/images/bg-menu-3.png" data-color="img/images/bg-logo3.png" data-background="img/images/background04.jpg">
                        <?php require_once './slides/slide2.php'; ?>
                    </div>
                    <div class="slide slide-4" data-white="img/images/bg-menu-5.png" data-color="img/images/bg-logo5.png" data-background="img/images/background03.jpg">
                        <?php require_once './slides/slide4.php'; ?>
                    </div>
                </div>
            </div>
        </div>

    <?php include './php/contactForm.php'; ?>

    </div>
    <?php include './php/footer.php';
}
?>
