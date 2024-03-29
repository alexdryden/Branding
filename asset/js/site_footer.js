let footer_logo_src = $("meta[name='asset:Library_Vert']").attr("content");
let footer_html = `
<div class="footer-library">
                                <div class="row">
                                                        <div class="column footer-library_right">
                                                                <p>ABOUT</p>
                                                                <div>
                                                                        <ul>
                                                                                <li><a href="https://iopn.library.illinois.edu/iopn-mission/">About IOPN</a></li>
                                                                                <li><a href="https://iopn.library.illinois.edu/advisory-board/">Advisory Board</a></li>
                                                                                <li><a href="https://iopn.library.illinois.edu/policies/">Policies</a></li>
                                                                                <li><a href="https://iopn.library.illinois.edu/news/">IOPN News</a></li>
                                                                                <li><a href="https://iopn.library.illinois.edu/contact/">Contact</a></li>
                                                                                <li><a href="https://iopn.library.illinois.edu/policies/#accessibility">Accessibility</a></li>
                                                                        </ul>
                                                                </div>

                                                        </div>
                                                        <div class="column footer-library_right">
                                                                <p>PUBLISHING WITHOUT WALLS</p><p>
                                                                </p><div>
                                                                        <ul>
                                                                                <li><a href="https://iopn.library.illinois.edu/publishing-without-walls">About PWW</a></li>
                                                                                <li><a href="https://iopn.library.illinois.edu/books/pww/about">About PWW</a></li>
                                                                                <li><a href="https://iopn.library.illinois.edu/books/pww/catalog">PWW Catalog</a></li>
                                                                                <li><a href="https://pww.afro.illinois.edu">AFRO-PWW Project</a></li>

                                                                        </ul>
                                                                </div>


                                                        </div>
                                                        <div class="column footer-library_right">
                                                                <p>WINDSOR &amp; DOWNS</p>
                                                                <div>
                                                                        <ul>
                                                                                <li><a href="https://iopn.library.illinois.edu/windsor-downs-press/">About Windsor and Downs</a></li>
                                                                                <li><a href="https://iopn.library.illinois.edu/books/windsor-downs/catalog">Windsor and Downs Catalog</a></li>
                                                                        </ul>
                                                                </div>


                                                        </div>

                                                        <div class="column footer-library_right">
                                                                <p>IOPN JOURNALS</p>
                                                                <div>
                                                                        <ul>
                                                                                <li><a href="https://iopn.library.illinois.edu/iopn-journals/">About IOPN Journals</a></li>
                                                                                <li><a href="https://iopn.library.illinois.edu/journals/">IOPN Journals Catalog</a></li>
                                                                        </ul>
                                                                </div>
                                                        </div>
                                </div>
                        </div>

`;

$(document).ready(function () {
    $('body').append(footer_html)
});
