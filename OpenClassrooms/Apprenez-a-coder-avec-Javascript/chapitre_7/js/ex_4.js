var compte = {
	titulaire: "Alex",
	solde: 0,

	crediter: function(valeur)
	{
		this.solde += valeur;
	},

	debiter: function(valeur)
	{
		this.solde -= valeur;
	},

	decrire: function()
	{
		return ("Titulaire: " + this.titulaire + ", solde: " + this.solde + " .");
	}
};



console.log(compte.decrire());

compte.crediter(200);
compte.debiter(150);

console.log(compte.decrire());

