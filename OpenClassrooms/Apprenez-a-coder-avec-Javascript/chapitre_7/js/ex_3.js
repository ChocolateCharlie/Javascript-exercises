var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {
	rayon: r,
	
	perimetre: function()
	{
		return (2 * Math.PI * this.rayon);
	},
	
	aire: function()
	{
		return (Math.PI * Math.pow(this.rayon, 2));
	}
};



console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());

