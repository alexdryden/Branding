footer_html = `
<footer class="footer-library container">
    <div class="row">
        <div class="column footer-library_left" >
            <div>Main Library Information Desk</div>
            <div>(217) 333 -2290</div>
            <div>1408 W. Gregory Dr.</div>
            <div>Urbana, IL 61801</div>
        </div>

        <div class="column ">
            <div class="footer-library_i-mark">
                <img id="i-mark" usemap="#lib-shared-footer-wordmark-online__map__small" src="">

                <map name="lib-shared-footer-wordmark-online__map__small">
                    <area shape="rect" coords="0,0,200,40" href="https://illinois.edu" alt="Block I">
                    <area shape="rect" coords="0,50,300,100" href="https://www.library.illinois.edu" alt="Illinois Library">
                </map>


            </div>
            <div class="footer-library_copyright text-center" role="img" aria-label="Creative Commons License: BY NC 4.0">
                <img id="cc_image" src="">
                <img id="by_image" src="">
                <img id="nc_image" src="">





            </div>

        </div>

        <div class="column footer-library_right">
            <nav>
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
            </nav>

        </div>
</footer>
`;




window.addEventListener("load", function () {



    let div  = document.createElement('div');
    div.innerHTML = footer_html;
    let body = document.getElementsByTagName("body")[0];
    body.insertAdjacentElement("afterend", div);}, false );

window.addEventListener("load", function () {

    let iMarkImg = document.getElementById("i-mark");
    iMarkImg.setAttribute("src", iMarkSrc);

    let ccImage = document.getElementById("cc_image");
    ccImage.setAttribute("src", ccImageSrc);

    let byImage = document.getElementById("by_image");
    byImage.setAttribute("src", byImageSrc);


    let ncImage = document.getElementById("nc_image");
    ncImage.setAttribute("src", ncImageSrc);},false);

    // let footer = document.getElementsByTagName("footer")[0];
    // footer.remove();
