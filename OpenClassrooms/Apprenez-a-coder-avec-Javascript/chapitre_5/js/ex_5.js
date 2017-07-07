function aire(rayon)
{
	return (Math.pow(rayon, 2) * Math.PI);
}

function perimetre(rayon)
{
	return (2 * Math.PI * rayon);
}



var rayon = prompt("Entrez un rayon :")

console.log("Aire :", aire(rayon))
console.log("Périmètre :", perimetre(rayon))

