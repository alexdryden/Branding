window.addEventListener("load",
    function (){
    let libraryMark = makeImage(brandingLogoSrc, brandingLogoAlt, brandingLogoHref);
    let header = document.getElementsByTagName("header")[0];
    header.insertBefore(libraryMark, header.childNodes[0]);


    }, false );



