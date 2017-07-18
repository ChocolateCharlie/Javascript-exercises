function clic ()
{
	console.log("Clic !");
}

function infosClavier(e)
{
	console.log("Evenement clavier : " + e.type + ", touche : " + e.keyCode);
}

function infosSouris(e)
{
	console.log("Evenement souris : " + e.type + ", bouton " + getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

function getBoutonSouris (code)
{
	var bouton = "inconnu";

	switch (code)
	{
		case 0 :
			bouton = "gauche";
		break;
		case 1 :
			bouton = "milieu";
		break;
		case 2 :
			bouton = "droit";
		break;
	}

	return (bouton);
}



var boutonElt = document.getElementById("bouton");
boutonElt.addEventListener("click", clic);
boutonElt.removeEventListener("click", clic);
// Attention, la fonction ne doit pas être anonyme !

document.getElementById("bouton").addEventListener("click", function (e) {
	console.log("Evenement : " + e.type + ", texte de la cible : " + e.target.textContent);
});
// Remarque : avec une fonction anonyme le code est plus concis


document.addEventListener("keypress", function (e) {
	console.log("Vous avez appuye sur la touche " + String.fromCharCode(e.charCode));
});

document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier);

document.addEventListener("click", infosSouris);
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);


window.addEventListener("load", function() {
	console.log("Page entierement chargee.");
});

window.addEventListener("beforeunload", function (e) {
	var message = "On est bien ici !";
	e.returnValue = message;
	return (message);
});


document.addEventListener("click", function() {
	console.log("Gestionnaire document");
});
document.getElementById("para").addEventListener("click", function() {
	console.log("Gestionnaire paragraphe");
});
document.getElementById("propa").addEventListener("click", function (e) {
	console.log("Gestionnaire bouton");
	e.stopPropagation();
});


document.getElementById("interdit").addEventListener("click", function(e) {
	console.log("Continuez plutôt à lire le cours ;)");
	e.preventDefault();
});

