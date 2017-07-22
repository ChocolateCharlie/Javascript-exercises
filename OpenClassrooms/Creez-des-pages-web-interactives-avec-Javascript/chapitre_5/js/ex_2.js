document.addEventListener("keypress", function (e) {
	var divElt = document.querySelectorAll("div");
	divElt.forEach(function(div)
	{
		switch(String.fromCharCode(e.charCode).toUpperCase())
		{
			case 'R':
				div.style.backgroundColor = "red";
			break;
			case 'J':
				div.style.backgroundColor = "yellow";
			break;
			case 'V':
				div.style.backgroundColor = "green";
			break;
			case 'B':
				div.style.backgroundColor = "white";
			break;
		}
	});
});

