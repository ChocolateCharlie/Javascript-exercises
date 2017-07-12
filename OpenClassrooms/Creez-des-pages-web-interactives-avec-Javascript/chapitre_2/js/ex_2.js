function infosLiens()
{
	var listeLiens = document.getElementsByTagName("a");
	console.log(listeLiens.length);

	if (listeLiens.length > 0)
	{
		console.log(listeLiens[0].getAttribute("href"));
		console.log(listeLiens[listeLiens.length - 1].href);
	}
}

function possede(id, attr)
{
	var elt = document.getElementById(id);
	if (elt === null)
	{
		console.log("Aucun élément ne possède l'identifiant " + id);
	}
	else
	{
		console.log(elt.classList.contains(attr));
	}
}



infosLiens();

possede("saxophone", "bois");
possede("saxophone", "cuivre");
possede("trompette", "cuivre");
possede("contrebasse", "cordes");

