
window.addEventListener("load", function () {




    let firstArea = document.createElement("area");
    let secondArea = document.createElement("area");

    firstArea.setAttribute("shape", "rect");
    firstArea.setAttribute("coords", "0,0,15,20");
    firstArea.setAttribute("href", "https://illinois.edu");
    firstArea.setAttribute("alt", "Block I");

    secondArea.setAttribute("shape", "rect");
    secondArea.setAttribute("coords", "25,0,200,20");
    secondArea.setAttribute("href", "https://www.library.illinois.edu");
    secondArea.setAttribute("alt", "University Library");

    let libraryMap = document.createElement("map");
    libraryMap.appendChild(firstArea);
    libraryMap.appendChild(secondArea);

    let libraryImg = document.createElement('img');
    libraryImg.setAttribute("usemap", "#lib-shared-header-wordmark-online__map__small");
    libraryImg.setAttribute("src", brandingLogoSrc);

    let brandingDiv = document.createElement('div');
    brandingDiv.className = "iopn_header_omekas_s";

    brandingDiv.appendChild(libraryMap);
    brandingDiv.appendChild(libraryImg);

    let body = document.getElementsByTagName('body')[0];
    body.insertBefore(brandingDiv, body.childNodes[0]);


}, false);