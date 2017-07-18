function clic ()
{
	nb_clics ++;
	document.getElementById("compteurClics").textContent = nb_clics;
}



var nb_clics = 0;

document.getElementById("clic").addEventListener("click", clic);
document.getElementById("desactiver").addEventListener("click", function() {
	document.getElementById("clic").removeEventListener("click", clic);
});

