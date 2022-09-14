let footer_logo_src = $("meta[name='asset:Library_Vert']").attr("content");
let footer_html = `
<div class="footer-library">
    <div class="row">
        <div class="column footer-library_left" >
            <div>Main Library Information Desk</div>
            <div>(217) 333 -2290</div>
            <div>1408 W. Gregory Dr.</div>
            <div>Urbana, IL 61801</div>
        </div>

        <div class="column ">
            <div class="footer-library_i-mark">
                <img id="i-mark" usemap="#lib-shared-footer-wordmark-online__map__small" src="`+footer_logo_src +`" alt="University of Illinois Library">

                <map name="lib-shared-footer-wordmark-online__map__small">
                    <area shape="rect" coords="0,0,200,40" href="https://illinois.edu" alt="Block I">
                    <area shape="rect" coords="0,50,300,100" href="https://www.library.illinois.edu" alt="Illinois Library">
                </map>


            </div>
            <div class="footer-library_copyright text-center">
                <a href="https://www.library.illinois.edu/geninfo/free-and-open-use-of-online-public-domain-reproductions-metadata-and-digitization-requests/">Library Policy on Free and Open Use of Online Public Domain Reproductions</a>
            </div>

        </div>

        <div class="column footer-library_right">
            <div>
                <ul>
                    <li>
                        <a href="https://www.vpaa.uillinois.edu/resources/web_privacy">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="https://guides.library.illinois.edu/usersdisabilities">Accessibility</a>

                    </li>
                    <li>
                        <a href="https://www.library.illinois.edu/staff/">Library Staff Website</a>

                    </li>

                </ul>
            </div>

        </div>
</div>
`;

$(document).ready(function () {
    $('body').append(footer_html)
});
