function makeImage(src, alt, href){
    let divBranding = document.createElement('div');
    divBranding.classList.add("logo");
    divBranding.classList.add("admin_header");

    let aBranding = document.createElement('a');
    aBranding.setAttribute("href", href);

    let imgBranding = document.createElement('img');
    imgBranding.setAttribute("alt", alt);
    imgBranding.setAttribute("title", alt);
    imgBranding.setAttribute("src", src);

    aBranding.appendChild(imgBranding);
    divBranding.appendChild(aBranding);

    return divBranding;

}



window.addEventListener("load",
    function (){
    let iopnMark = makeImage(brandingLogoIopnScr, brandingLogoIopnAlt, brandingLogoIopnHref);
    let libraryMark = makeImage(brandingLogoSrc, brandingLogoAlt, brandingLogoHref);
    let header = document.getElementsByTagName("header")[0];
    header.insertBefore(iopnMark, header.childNodes[0]);
    header.insertBefore(libraryMark, header.childNodes[0]);


    }, false );



