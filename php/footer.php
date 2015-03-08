<?php

function getFooter($path_) {
    if (empty($path_)) {
        $path = "";
    } else {
        $path = $path_;
    }

    echo '<script src="' . $path . 'js/libs/detect-zoom.js" type="text/javascript"></script>
    </body>
</html>';
}

?>