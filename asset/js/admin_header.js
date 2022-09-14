let library_header_logo= $("meta[name='asset:library_header_image']").attr("content");
let header_html = `
<div class="admin_header logo" id="branding">
    <map id="lib-shared-header-wordmark-online__map__small">
        <area shape="rect" coords="0,0,15,20" href="https://illinois.edu" alt="Block I">
        <area shape="rect" coords="25,0,200,20" href="https://www.library.illinois.edu" alt="University Library">
    </map>
    <img usemap="#lib-shared-header-wordmark-online__map__small" src="`+library_header_logo+`" alt="University of Illinois Library">
    </div>`

$(document).ready(function () {
    $("header:first").prepend(header_html)
});


