var mots = [
	{
		terme: "Procrastination",
		definition: "Tendance pathologique à remettre systématiquement au lendemain"
	},
	{
		terme: "Tautologie",
		definition: "Phrase dont la formulation ne peut être que vraie"
	},
	{
		terme: "Oxymore",
		definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
	}
];

var listeElt = document.createElement("dl");
document.getElementById("contenu").appendChild(listeElt);

mots.forEach(function(mot)
{
	var termeElt = document.createElement("dt");
	var strongElt = document.createElement("strong");

	strongElt.textContent = mot.terme;

	termeElt.appendChild(strongElt);
	listeElt.appendChild(termeElt);

	var definitionElt = document.createElement("dd");

	definitionElt.textContent = mot.definition;

	listeElt.appendChild(definitionElt);
});

