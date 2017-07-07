/*
** Comptage du nombre de voyelles
*/
function compterNbVoyelles(mot)
{
	var nbVoyelles = 0;
	var tailleMot = mot.length;
	var motMajuscule = mot.toUpperCase();
	
	for (var i = 0; i < tailleMot; i++)
	{
		if ((motMajuscule.charAt(i) === "A")
		 || (motMajuscule.charAt(i) === "E")
		 || (motMajuscule.charAt(i) === "I")
		 || (motMajuscule.charAt(i) === "O")
		 || (motMajuscule.charAt(i) === "U")
		 || (motMajuscule.charAt(i) === "Y"))
		{
			nbVoyelles++;
		}
	}

	return (nbVoyelles);
}

/*
** Conversion en "leet speak" d'un mot
*/
function convertirEnLeetSpeak(mot)
{
	var nouveauMot = "";
	
	for (var i = 0; i < mot.length; i++)
	{
		nouveauMot += trouverLettreLeet(mot.charAt(i));
	}
	
	return (nouveauMot);
}

/*
** Inversion du mot
*/
function inverser(mot)
{
	var nouveauMot = "";

	for (var i = mot.length - 1; i >= 0; i--)
	{
		nouveauMot += mot.charAt(i);
	}
	
	return (nouveauMot);
}

/*
** Convertir en "leet speak" une lettre
*/
function trouverLettreLeet(c)
{
	var cMaj = c.toUpperCase();
	
	switch(cMaj)
	{
		case 'A':
			return ('4');
		break;
		case 'B':
			return ('8');
		break;
		case 'E':
			return ('3');
		break;
		case 'L':
			return ('1');
		break;
		case 'O':
			return ('0');
		break;
		case 'S':
			return ('5');
		break;
		default:
			return (c);
		break;
	}
}



var mot = prompt("Entrez votre mot : ");

console.log("Le mot " + mot + " contient " + mot.length + " lettres.");
console.log("Il s'écrit en minuscules " + mot.toLowerCase() + " .");
console.log("Il s'écrit en majuscules " + mot.toUpperCase() + " .");
console.log("Il comporte " + compterNbVoyelles(mot) + " voyelles et " + (mot.length - compterNbVoyelles(mot)) + " consonnes.");
console.log("Il s'écrit à l'envers : " + inverser(mot) + " .");

if (mot.toUpperCase() === inverser(mot).toUpperCase())
{
	console.log("C'est un palindrome.");
}
else
{
	console.log("Ce n'est pas un palindrome.");
}

console.log("Il s'écrit en leet speak : " + convertirEnLeetSpeak(mot) + " .");

