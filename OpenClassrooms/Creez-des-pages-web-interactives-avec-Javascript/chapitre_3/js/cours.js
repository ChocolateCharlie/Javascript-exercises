// Modifier le contenu HTML de la liste
document.getElementById("langages").innerHTML += '<li id = "c">C</li>';

// Vider un élément
// document.getElementById("langages").innerHTML = "";

// Modifier le contenu textuel du titre
document.querySelector("h1").textContent += " de programmation";

// Définir l'attibut "id" du titre
document.querySelector("h1").setAttribute("id", "titre");

// Manipuler les classes
var titreElt = document.querySelector("h1");
titreElt.classList.remove("debut");
titreElt.classList.add("titre");
console.log(titreElt);

// Ajouter un nouvel élément
var pythonElt = document.createElement("li");
pythonElt.id = "python";
pythonElt.textContent = "Python";
document.getElementById("langages").appendChild(pythonElt);

// Une autre manière de définir le contenu textuel : noeud fils
var rubyElt = document.createElement("li");
rubyElt.id = "ruby";
rubyElt.appendChild(document.createTextNode("Ruby"));
document.getElementById("langages").appendChild(rubyElt);

// Une autre manière d'insérer le noeud : avant un autre
var perlElt = document.createElement("li");
perlElt.id = "perl";
perlElt.textContent = "Perl";
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));

// Encore une autre manière d'insérer le noeud : position exacte
document.getElementById("langages").insertAdjacentHTML("afterBegin", '<li id = "javascript">Javascript</li>');

// Remplacer un noeud
var bashElt = document.createElement("li");
bashElt.id = "bash";
bashElt.textContent = "Bash";
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));

// Supprimer un noeud
document.getElementById("langages").removeChild(document.getElementById("bash"));

/*
** Exercice : ajout d'un paragraphe
*/
document.getElementById("langages").insertAdjacentHTML("afterend", '<p>En voici une <a href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation">liste</a> plus complète.</p>');

