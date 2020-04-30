window.addEventListener("load",
    function (){
    let iopnMark = makeImage(brandingLogoIopnScr, brandingLogoIopnAlt, brandingLogoIopnHref);
    let libraryMark = makeImage(brandingLogoSrc, brandingLogoAlt, brandingLogoHref);
    let header = document.getElementsByTagName("header")[0];
    header.insertBefore(iopnMark, header.childNodes[0]);
    header.insertBefore(libraryMark, header.childNodes[0]);


    }, false );



