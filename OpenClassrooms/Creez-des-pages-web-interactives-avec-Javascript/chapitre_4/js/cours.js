var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";

pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";

var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle);
console.log(stylePara.color);

