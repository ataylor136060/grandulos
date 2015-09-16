<?php
	session_start();
	include('getCartContents.php');
	
	$name = $_POST['name'];
	$price = $_POST['price'];
	$quantity = $_POST['quantity'];
	$price= floatval(substr($price, 1));
	/*
	 * check if the 'cart' session array was created
	 * if it is NOT, create the 'cart' session array
	 */
	if(empty($_SESSION['cart_items'])){
		echo '';
	} else {
		if(array_key_exists($name, $_SESSION['cart_items'])) {
			$item = $_SESSION['cart_items'][$name];
			$item['quantity'] = $quantity;
			$_SESSION['cart_items'][$name] = $item;
		}
	}
	getCartContents();
?>