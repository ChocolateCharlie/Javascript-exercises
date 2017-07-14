var infosElt = document.getElementById("infos");
var styleElt = getComputedStyle(document.getElementById("contenu"));

var pElt = document.createElement("p");
pElt.textContent = "Informations sur l'élément";
infosElt.appendChild(pElt);

var heightElt = document.createElement("li");
heightElt.textContent = "Hauteur : " + styleElt.height;
infosElt.appendChild(heightElt);

var widthElt = document.createElement("li");
widthElt.textContent = "Longueur : " + styleElt.width;
infosElt.appendChild(widthElt);

