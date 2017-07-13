var journaux = ["http://lemonde.fr",
		"http://lefigaro.fr",
		"http://liberation.fr"];

journaux.forEach(function(lien)
{
	var lienElt = document.createElement("a");
	lienElt.href = lien;
	lienElt.textContent = lien;
	document.getElementById("contenu").appendChild(lienElt);
	document.getElementById("contenu").appendChild(document.createElement("br"));
});

