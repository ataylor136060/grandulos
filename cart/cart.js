window.onload = init();

function init() {
	document.getElementById("shopping_cart_button").addEventListener("click", toggleShoppingCart);
}

function updateItemQuantity() {
	var httpRequest = new XMLHttpRequest();
	var url = "/cart/updateItemQuantity.php";
	
	var menuItem = this.parentNode;
	var name = "";
	var quantity = "";
	
	for(i=0;i<menuItem.childNodes.length;i++) {
		if(menuItem.childNodes[i].className == "cart_menu_item_name") {
			name = menuItem.childNodes[i].innerHTML;
		}
	}
	
	for(i=0;i<menuItem.childNodes.length;i++) {
		if(menuItem.childNodes[i].className == "cart_menu_item_quantity") {
			var table_element = menuItem.childNodes[i];
			for(j=0;j<table_element.childNodes.length;j++) {
				if(table_element.childNodes[j].className == "cart_menu_item_quantity_input") {
					quantity = table_element.childNodes[j].value;
				}
			}
		}
		
	}
	
	var variables = "name=" + name + "&quantity=" + quantity;
	httpRequest.open("POST", url, true);
	httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	httpRequest.onreadystatechange = function() {
		if(httpRequest.readyState == 4 && httpRequest.status == 200) {
			var return_data = httpRequest.responseText;
			updateShoppingCart(return_data);
		}
	}
	httpRequest.send(variables);
}

function removeFromCart() {
	var httpRequest = new XMLHttpRequest();
	var url = "/cart/removeFromCart.php";
	
	var menuItem = this.parentNode.parentNode;
	var name = "";
	var price = "";
	for(i=0;i<menuItem.childNodes.length;i++) {
		if(menuItem.childNodes[i].className == "cart_menu_item_name") {
			name = menuItem.childNodes[i].innerHTML;
		}
	}
	
	var variables = "name=" + name + "&price=" + price;
	httpRequest.open("POST", url, true);
	httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	httpRequest.onreadystatechange = function() {
		if(httpRequest.readyState == 4 && httpRequest.status == 200) {
			var return_data = httpRequest.responseText;
			updateShoppingCart(return_data);
		}
	}
	httpRequest.send(variables);
}

function refreshShoppingCart() {
	var httpRequest = new XMLHttpRequest();
	var url = "../cart/getCart.php";
	var variables = "";
	httpRequest.open("POST", url, true);
	httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	httpRequest.onreadystatechange = function() {
		if(httpRequest.readyState == 4 && httpRequest.status == 200) {
			var return_data = httpRequest.responseText;
			updateShoppingCart(return_data);
		}
	}
	httpRequest.send(variables);
}

function updateShoppingCart(newCart) {
	var cart = document.getElementById("shopping_cart");
	var header = "<h1>Shopping Cart</h1>";
	cart.innerHTML = header + newCart;
	
	//Add event Listeners
	var elementList = document.getElementsByClassName("cart_menu_item_quantity");
	for(i=0;i<elementList.length;i++) {
		elementList[i].addEventListener("change", updateItemQuantity);
	}
	
	var elementList = document.getElementsByClassName("cart_remove_item_button");
	for(i=0;i<elementList.length;i++) {
		elementList[i].addEventListener("click", removeFromCart);
	}
	
	document.getElementById("shopping_cart_button").addEventListener("click", toggleShoppingCart);
}

function toggleShoppingCart() {
	var cart = document.getElementById("shopping_cart");
	var content = document.getElementById("content");
	var display = cart.style.display;
	
	if(display == "block") {
		cart.style.display = "none";
		content.style.width = "auto";
		
	} else {
		refreshShoppingCart();
		cart.style.display = "block";
		content.style.width = "calc(100% - 350px)";
	}
}

function get_firstChild(n) {
	y = n.firstChild;
	while(y.nodeType != 1) {
		y = y.nextSibling;
	}
	return y;
}

function get_nextSibling(n) {
	y = n.nextSibling;
	while(y.nodeType != 1) {
		y = y.nextSibling;
	}
	return y;
}