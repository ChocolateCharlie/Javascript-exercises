function compterElements(propriete)
{
	return (document.querySelectorAll(propriete).length);
}



console.log(compterElements("p"));
console.log(compterElements(".adjectif"));
console.log(compterElements("p .adjectif"));
console.log(compterElements("p > .adjectif"));

