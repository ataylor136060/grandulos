<?php
	function getCartContents() {
		if(empty($_SESSION['cart_items'])){
			echo 'Your shopping cart is empty. Visit the menu to order some items.';
		} else {
			$removeItemButton = '<button class="cart_remove_item_button" type="button">Remove Item</button>';
			$total = 0.00;
			echo '<table id="shopping_cart_table"><tr><th>Item</th><th>Price</th><th>Quantity</th><th>Subtotal</th><th></th></tr>';
			foreach($_SESSION['cart_items'] as $item) {
				$name = $item['name'];
				$price = $item['price'];
				$quantity = $item['quantity'];
				$sub = $quantity * $price;
				$total += $sub;
				echo "<tr><td class=\"cart_menu_item_name\">{$name}</td><td class=\"cart_menu_item_price\">{$price}</td><td class=\"cart_menu_item_quantity\"><input class=\"cart_menu_item_quantity_input\" type=\"text\" value=\"{$quantity}\"></td><td>{$sub}</td><td>{$removeItemButton}</td></tr>";
			}
			echo '</table>';
			echo '<p>Total: $';
			echo $total;
			echo '</p>';
		}
	}
?>