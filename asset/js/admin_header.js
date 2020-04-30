window.addEventListener("load", function () {
    let divBranding = document.createElement('div');
    divBranding.classList.add("logo");
    divBranding.classList.add("admin_header");

    let aBranding = document.createElement('a');
    aBranding.setAttribute("href", brandingLogoHref);

    let imgBranding = document.createElement('img');
    imgBranding.setAttribute("alt", brandingLogoAlt);
    imgBranding.setAttribute("title", brandingLogoAlt);
    imgBranding.setAttribute("src", brandingLogoSrc);

    aBranding.appendChild(imgBranding);
    divBranding.appendChild(aBranding);



    let header = document.getElementsByTagName("header")[0];
    header.insertBefore(divBranding, header.childNodes[0]);}, false );
