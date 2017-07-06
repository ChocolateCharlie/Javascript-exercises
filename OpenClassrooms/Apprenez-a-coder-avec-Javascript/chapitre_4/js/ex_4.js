var number = 0;

while ((number < 2) || (number > 9))
{
	number = Number(prompt("Entrez un nombre entre 2 et 9 : "));
}
console.log("Voici la table de multiplication de " + number + " :");
for (i = 1; i < 11; i++)
{
	console.log(number + " x " + i + " = " + (number * i));
}

