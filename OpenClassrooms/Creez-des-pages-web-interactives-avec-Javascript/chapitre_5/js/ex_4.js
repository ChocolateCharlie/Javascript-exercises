var questions = [
	{
		enonce : "Combien font 2+2 ?",
		reponse : "2+2 = 4"
	},
	{
		enonce : "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
		reponse : "1492"
	},
	{
		enonce : "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
		reponse : "La lettre N"
	}
];



var contenuElt = document.getElementById("contenu");
var i = 1;



questions.forEach(function(question)
{
	var questionElt = document.createElement("p");

	var titreElt = document.createElement("strong");
	titreElt.textContent = "Question " + i + " : ";

	var enonceElt = document.createElement("i");
	enonceElt.textContent = question.enonce;

	var afficherReponseElt = document.createElement("div");

	var boutonElt = document.createElement("button");
	boutonElt.textContent = "Afficher la réponse";
	boutonElt.addEventListener("click", function()
	{
		var reponseElt = document.createElement("p");
		reponseElt.textContent = question.reponse;
		reponseElt.style.display = "inline";
		afficherReponseElt.innerHTML = "";
		afficherReponseElt.appendChild(reponseElt);
	});
	afficherReponseElt.appendChild(boutonElt);

	questionElt.appendChild(titreElt);
	questionElt.appendChild(enonceElt);
	questionElt.appendChild(afficherReponseElt);

	contenuElt.appendChild(questionElt);
	i++;
});

