function direBonjour(prenom, nom)
{
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

var prenom = prompt("Quel est votre prénom ?");
var nom = prompt("Quel est votre nom ?");
console.log(direBonjour(prenom, nom));

