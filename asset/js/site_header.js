
let header_logo_href = $("meta[name='asset:library_header_image']").attr("content");

let header_html = `
<div class="iopn_header_omekas_s" id="branding">
    <map id="lib-shared-header-wordmark-online__map__small">
        <area shape="rect" coords="0,0,15,20" href="https://illinois.edu" alt="Block I" title="University of Illinois">
        <area shape="rect" coords="25,0,200,20" href="https://www.library.illinois.edu" alt="University Library" title="University Library">
    </map>
    <img usemap="#lib-shared-header-wordmark-online__map__small" src="`+header_logo_href+`" alt="University of Illinois Library">
</div>`

$(document).ready(function () {
    //should be the skip nav link, but they aren't named constantly on front and back ends to target directly

    let freedom_header = $("header.main-header" )
    if(freedom_header.length !== 0) {
        freedom_header.prepend(header_html)
    } else {
        $( header_html ).insertAfter( "a[href='#content']" );
    }
});
