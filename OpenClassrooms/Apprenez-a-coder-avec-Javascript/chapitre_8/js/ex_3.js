var CompteBancaire = {
	initCB: function(titulaire, somme)
	{
		this.titulaire = titulaire;
		this.somme = somme;
	},

	decrire: function()
	{
		return("Titulaire : " + this.titulaire + ", solde : " + this.somme + " euros");
	},

	debiter: function(valeur)
	{
		this.somme -= valeur;
	}
};



var CompteEpargne = Object.create(CompteBancaire);

CompteEpargne.initCE = function (titulaire, somme, taux)
{
	this.initCB(titulaire, somme);
	this.taux = taux;
};

CompteEpargne.crediter = function(valeur)
{
	this.somme += valeur;
}

CompteEpargne.ajouterInterets = function()
{
	this.somme += (this.somme * this.taux);
}



var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);

var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);



console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));

compte1.debiter(montant);
compte2.crediter(montant);
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());

