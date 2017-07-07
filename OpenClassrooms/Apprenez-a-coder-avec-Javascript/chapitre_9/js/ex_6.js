var Chien = {
    init: function (nom, race, taille)
	{
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },

    aboyer: function ()
	{
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25)
		{
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60)
		{
            aboiement = "Grrr ! Grrr !";
        }
        return (aboiement);
    }
};



var chien1 = Object.create(Chien);
chien1.init("Crockdur", "mâtin de Naples", 75);

var chien2 = Object.create(Chien);
chien2.init("Pupuce", "bichon", 22);

var chien3 = Object.create(Chien);
chien3.init("Médor", "labrador", 58);

var chiens = [];
chiens.push(chien1);
chiens.push(chien2);
chiens.push(chien3);

chiens.forEach(function (chien)
{
	console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm. Il aboie: " + chien.aboyer());
});

