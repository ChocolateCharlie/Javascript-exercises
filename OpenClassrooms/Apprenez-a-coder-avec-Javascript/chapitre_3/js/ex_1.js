var jour = prompt("Entrez un jour : ");
var reponse = "Demain, nous serons ";
switch (jour)
{
	case "lundi":
		console.log(reponse + "mardi.");
	break;
	case "mardi":
		console.log(reponse + "mercredi.");
	break;
	case "mercredi":
		console.log(reponse + "jeudi.");
	break;
	case "jeudi":
		console.log(reponse + "vendredi.");
	break;
	case "vendredi":
		console.log(reponse + "samedi.");
	break;
	case "samedi":
		console.log(reponse + "dimanche.");
	break;
	case "dimanche":
		console.log(reponse + "lundi.");
	break;
	default:
		console.log("Ce n'est pas un jour !");
	break;
}

