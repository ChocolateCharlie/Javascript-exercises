var valeurs = [11, 3, 7, 2, 9, 10];
var maximum = valeurs[0];

valeurs.forEach(function (valeur)
{
	if (valeur > maximum)
	{
		maximum = valeur;
	}
});

console.log(maximum);

