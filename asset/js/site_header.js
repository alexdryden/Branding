
window.addEventListener("load", function () {




    let firstArea = document.createElement("area");
    let secondArea = document.createElement("area");

    firstArea.setAttribute("shape", "rect");
    firstArea.setAttribute("coords", "0,0,15,20");
    firstArea.setAttribute("href", "https://illinois.edu");
    firstArea.setAttribute("alt", "Block I");
    firstArea.setAttribute("title", "University of Illinois");


    secondArea.setAttribute("shape", "rect");
    secondArea.setAttribute("coords", "25,0,200,20");
    secondArea.setAttribute("href", "https://www.library.illinois.edu");
    secondArea.setAttribute("alt", "University Library");
    secondArea.setAttribute("title", "University Library");

    let libraryMap = document.createElement("map");
    libraryMap.appendChild(firstArea);
    libraryMap.appendChild(secondArea);
    libraryMap.setAttribute("id", "lib-shared-header-wordmark-online__map__small")


    let libraryImg = document.createElement('img');
    libraryImg.setAttribute("usemap", "#lib-shared-header-wordmark-online__map__small");
    libraryImg.setAttribute("src", brandingLogoSrc);
    libraryImg.setAttribute("alt", "University of Illinois Library");


    let brandingDiv = document.createElement('div');
    brandingDiv.className = "iopn_header_omekas_s";
    brandingDiv.id = "branding";




    brandingDiv.appendChild(libraryMap);
    brandingDiv.appendChild(libraryImg);

    let body = document.getElementsByTagName('body')[0];

    body.insertBefore(brandingDiv, body.childNodes[0]);







}, false);


// <div  class="iopn_header_common iopn_header_omekas_s">
//     <img usemap="#lib-shared-header-wordmark-online__map__small" src="<?php echo $this->assetUrl('img/library.png') ?>"></img>
//     <map name="lib-shared-header-wordmark-online__map__small">
//     <area shape="rect" coords="0,0,15,20" href="https://illinois.edu" alt="Block I">
//     <area shape="rect" coords="25,0,200,20" href="https://www.library.illinois.edu" alt="Illinois Library">
//     </map>
//     <a id="iopn_mark" href="https://iopn.library.illinois.edu">
//     <img src="<?php echo $this->assetUrl('img/iopn.png') ?>" alt="Illinois Open Publishing Network">
//     </a>
//     </div>