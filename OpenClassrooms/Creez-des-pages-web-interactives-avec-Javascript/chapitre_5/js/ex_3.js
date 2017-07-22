document.querySelector("button").addEventListener("click", function ()
	{
		var nouveauDessert = document.createElement("li");
		nouveauDessert.textContent = prompt("Quel est ce dessert ?");
		nouveauDessert.addEventListener("click", function (e)
		{
			var nouveauNom = prompt("Modifiez le nom du dessert :", e.target.textContent);
			e.target.textContent = nouveauNom;
		});
		document.getElementById("desserts").appendChild(nouveauDessert);
	});

