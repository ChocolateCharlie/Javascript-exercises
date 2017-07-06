var heure = Number(prompt("Entrez l'heure : "));
var minutes = Number(prompt("Entrez les minutes : "));
var secondes = Number(prompt("Entrez les secondes : "));
if ((secondes < 0) || (secondes >= 60) || (minutes < 0) || (minutes >= 60) || (heure < 0) || (heure >= 24))
{
	console.log("Il y a erreur dans la saisie.");
}
else
{
	secondes++;
	if (secondes === 60)
	{
		secondes = 0;
		minutes++;
	}
	if (minutes === 60)
	{
		minutes = 0;
		heure++;
	}
	if (heure === 24)
	{
		heure = 0;
	}
	
	console.log("Dans une seconde, il sera " + heure + "h" + minutes + "min" + secondes + "s.");
}

