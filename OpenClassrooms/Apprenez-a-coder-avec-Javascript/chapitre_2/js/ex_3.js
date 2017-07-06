var prixHT = Number(prompt("Entrez le prix HT :"));
var tauxTVA = 19.6 / 100;
var prixTTC = prixHT * (1 + tauxTVA);
console.log("Le prix TTC est de " + prixTTC + " euros");

