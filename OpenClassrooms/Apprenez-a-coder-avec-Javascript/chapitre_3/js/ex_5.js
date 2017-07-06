var mois = Number(prompt("Entrez un mois sous forme de nombre : "));
if (((mois < 8) && (mois % 2)) || (mois === 8) || ((mois > 8) && !(mois % 2)))
{
		console.log("Il y a 31 jours dans ce mois.");
}
else if (mois === 2)
{
		console.log("Il y a 28 jours dans ce mois.");
}
else
{
		console.log("Il y a 30 jours dans ce mois.");
}

