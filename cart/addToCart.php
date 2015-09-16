<?php
	session_start();
	include('getCartContents.php');
	
	$name = $_POST['name'];
	$price = $_POST['price'];
	$price= floatval(substr($price, 1));
	/*
	 * check if the 'cart' session array was created
	 * if it is NOT, create the 'cart' session array
	 */
	if(empty($_SESSION['cart_items'])){
		$_SESSION['cart_items'] = array();
	}
	if(array_key_exists($name, $_SESSION['cart_items'])) {
		$item = $_SESSION['cart_items'][$name];
		$item['quantity'] += 1;
		$_SESSION['cart_items'][$name] = $item;
	} else {
		$item = array();
		$item['name']=$name;
		$item['price']=$price;
		$item['quantity']=1;
		$_SESSION['cart_items'][$name]=$item;
	}

	getCartContents();


?>