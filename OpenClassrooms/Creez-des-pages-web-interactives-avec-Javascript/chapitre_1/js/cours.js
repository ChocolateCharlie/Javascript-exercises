var head = document.head;
console.log(head);

var body = document.body;
console.log(body);

if (document.body.nodeType === document.body.ELEMENT_NODE)
{
	console.log("Body est un noeud élément.");
}
else
{
	console.log("Body est un noeud textuel.");
}

for (var i = 0; i < document.body.childNodes.length; i++)
{
	console.log(document.body.childNodes[i]);
}

var h1 = document.body.childNodes[1];
console.log(h1.parentNode);

console.log(document.parentNode);

