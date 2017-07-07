function calculer(a, operation, b)
{
	switch(operation)
	{
		case "+":
			return (a + b);
		break;
		case "-":
			return (a - b);
		break;
		case "*":
			return (a * b);
		break;
		case "/":
			return (a / b);
		break;
	}
}

console.log(calculer(4, "+", 6));
console.log(calculer(4, "-", 6));
console.log(calculer(2, "*", 0));
console.log(calculer(12, "/", 0));

