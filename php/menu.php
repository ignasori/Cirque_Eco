<?php

function getMenu($path_) {
    if (empty($path_)) {
        $path = "";
    } else {
        $path = $path_;
    }

    echo '<div id="navigation-menu" style="display: none">
    <div class="items">
        <div class="item logo-arke">
            <a href="' . $path . 'index.html">
                <img alt="home_arke" src="' . $path . 'img/elements/home_Arke.jpg">
            </a>
        </div>
        <div class="item right-control">
            <img alt="right_control" src="' . $path . 'img/elements/Next_article.jpg">
        </div>
        <div class="item menu">
            <img alt="menu" src="' . $path . 'img/elements/Menu_Arke.jpg">
        </div>
        <div class="item left-control">
            <img alt="left_control" src="' . $path . 'img/elements/Previous_Article.jpg">
        </div>
        <div class="item information">
            <img alt="information" src="' . $path . 'img/elements/Info_Arke.jpg">
        </div>
    </div>
    <div class="item zoom">
        <img alt="information" src="' . $path . 'img/elements/Zoom.png">
    </div>
</div>';
}

?>
