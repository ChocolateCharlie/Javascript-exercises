// getElementsByTagName
var titresElts = document.getElementsByTagName("h2");
console.log(titresElts[0]);
console.log(titresElts.length);

//getElementsByClassName
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++)
{
	console.log(merveillesElts[i]);
}

// getElementById
console.log(document.getElementById("nouvelles"));

// querySelectorAll
console.log(document.querySelectorAll("#antiques > .existe").length);

// querySelector
console.log(document.querySelector("p"));

// textContent
console.log(document.getElementById("contenu").textContent);

// getAttribute
console.log(document.querySelector("a").getAttribute("href"));
console.log(document.querySelector("ul").id);

// hasAttribute
if (document.querySelector("a").hasAttribute("target"))
{
	console.log("Le premier lien possède l'attribut target.");
}
else
{
	console.log("Le premier lien ne possède pas l'attribut target.");
}

// classList
var classes = document.getElementById("antiques").classList;
console.log(classes.length);
console.log(classes[0]);

// contains
if (document.getElementById("antiques").classList.contains("merveilles"))
{
	console.log("L'élément identifié par antiques possède la classe merveille");
}
else
{
	console.log("L'élément identifié par antiques ne possède pas la calsse merveille");
}

