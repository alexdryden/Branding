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