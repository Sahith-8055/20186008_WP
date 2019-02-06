var catalog = {
	"products": [{
			"ti": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue",
			"description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution",
			"image": "1.jpeg",
			"quantity":"10"
		},
		{
			"ti": "Mi A2 4GB + 64GB | 6GB + 128GB",
			"description": "15.2cm (5.99) large display",
			"image": "2.jpeg",
			"quantity":"20"
		},
		{
			"ti": "Apple iphone 32GB",
			"description": "11.4 cm(4.7)display",
			"image": "3.jpeg",
			"quantity":"30"
		},
		{
			"ti": "red mi note 6 pro",
			"description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ",
			"image": "4.jpeg",
			"quantity":"40"
		}
	]
};

var i = 0;
console.log(catalog);
load(i);
document.getElementById('left').disabled = true;

function myClick(side) {
	if (side === 'right' && i <= catalog.products.length - 2) {
	    i++;
	} else {
	    i--;
	}

	if (i === 0) {
	    document.getElementById('left').disabled = true;
	    load(i);
	} else if (i === catalog.products.length - 1) {
		document.getElementById('right').disabled = true;
		load(i);
	} else {
		document.getElementById('left').disabled = false;
		document.getElementById('right').disabled = false;
		load(i);
	}
}

function load(index) {
	console.log(index);
	document.getElementById("im").innerHTML = '<img class="img-responsive" style="height: 30em; width: 20em;" src="' + catalog.products[index].image + '" alt="Mobile Phone">';
	document.getElementById("titledescription").innerHTML = catalog.products[index].ti;
	document.getElementById("quantitydescription").innerHTML = catalog.products[index].quantity;
	document.getElementById("productdescription").innerHTML = catalog.products[index].description;
}


$(document).ready(function(){
    $("#edit").click(function(){
        $("#form1").toggle();
    });
});
