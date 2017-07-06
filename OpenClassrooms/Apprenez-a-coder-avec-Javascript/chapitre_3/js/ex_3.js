var note = Number(prompt("Entrez votre moyenne : "));
if (note < 10)
{
	console.log("Vous êtes recalé.");
}
else if (note < 12)
{
	console.log("Vous êtes reçu, sans mention.");
}
else
{
	console.log("Bravo, vous avez décroché la mention!");
}

