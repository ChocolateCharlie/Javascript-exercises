var mousquetaires = ["Athos", "Portos", "Aramis"];

for (var i = 0; i < mousquetaires.length; i++)
{
	console.log(mousquetaires[i]);
}

mousquetaires.push("D'Artagnan");

mousquetaires.forEach(function (mousquetaire)
{
	console.log(mousquetaire);
});

