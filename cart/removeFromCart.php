<?php
	session_start();
	include 'getCartContents.php';
	$name = $_POST['name'];
	$price = $_POST['price'];
	$price= floatval(substr($price, 1));
	/*
	 * check if the 'cart' session array was created
	 * if it is NOT, create the 'cart' session array
	 */
	if(empty($_SESSION['cart_items'])){
		echo '<p>The cart is empty, nothing to remove.</p>';
	} else {
		if(array_key_exists($name, $_SESSION['cart_items'])) {
			unset($_SESSION['cart_items'][$name]);
		}
		getCartContents();
		
	}
	


?>