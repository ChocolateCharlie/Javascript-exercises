var mots = [];
var nouveau = "";

while (nouveau != "stop")
{
	 nouveau = prompt("Entrez un mot :");
	 mots.push(nouveau);
}

mots.forEach(function (mot)
{
	console.log(mot);
});

