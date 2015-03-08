<?php

function getHeader($path_) {
    if (empty($path_)) {
        $path = "";
    } else {
        $path = $path_;
    }

    echo '<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        
        <link rel="stylesheet" type="text/css" href="' . $path . 'css/colorbox.css">
        <link rel="stylesheet" type="text/css" href="' . $path . 'css/general_css.css">
        <link rel="stylesheet" type="text/css" href="' . $path . 'css/popups.css">
        <link rel="stylesheet" type="text/css" href="' . $path . 'js/libs/vegas/jquery.vegas.css">

        <script src="' . $path . 'js/libs/jquery-2.1.0.min.js" type="text/javascript"></script>
        <script src="' . $path . 'js/libs/jquery.velocity.min.js" type="text/javascript"></script>
        <script src="' . $path . 'js/libs/vegas/jquery.vegas.js" type="text/javascript"></script>
        <script src="' . $path . 'js/libs/jquery.colorbox-min.js" type="text/javascript"></script>
        <script src="' . $path . 'js/libs/jquery-ui-1.10.4.custom.min.js" type="text/javascript"></script>
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>

        <script src="' . $path . 'js/general_js.js" type="text/javascript"></script>
        <script src="' . $path . 'js/popups.js" type="text/javascript"></script>

        <title>Reisbureau at Home</title>
    </head>
    <body>';
}

?>