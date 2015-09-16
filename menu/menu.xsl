<?xml version = "1.0"?>

<!-- Transformation of Menu information into HTML5 -->
<xsl:stylesheet version = "1.0"                       
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<!-- write XML declaration and DOCTYPE DTD information -->
	<xsl:output method="html" doctype-system="about:legacy-compat" />

	<!-- match document root -->
	<xsl:template match = "/">  
		<html>
			<head>
				<meta charset="utf-8"/>
				<link rel="stylesheet" type="text/css" href="../main.css"/>
				<link rel="stylesheet" type="text/css" href="menu.css"/>
				<link rel="stylesheet" type="text/css" href="../resources/fonts/gothic.css" />
				<link rel="stylesheet" type="text/css" href="../resources/fonts/vlad.css" />
				<script type="text/javascript" src="menu.js" defer="defer"/>
				<script type="text/javascript" src="/main.js" defer="defer"/>
				<script src="../resources/jquery-1.11.2.js"></script>
				<title>Menus</title>    
			</head>
			<body>
				<img id="shopping_cart_button" src="/resources/cart.png" alt="Shopping Cart"/>
				<header>
					<div id="headBar">
						<div id="navCont">
							<nav>
								<ul class="nav">
									<li><a href="/menu/menu.xml"><h3>Menu</h3></a></li> 
									<li><a href="/specials/specials.html"><h3>Specials</h3></a></li>
									<li class="logo"><a href="/index.html"><img src="/resources/drawing.png"/></a></li> 
									<li><a href="/gifts/gifts.html"><h3>Gift Cards</h3></a></li> 
									<li><a href="/contact/contact.html"><h3>Contact</h3></a></li> 
								</ul>
							</nav>
						</div><!--End of nav Conntainer-->
					</div><!--End of Head Bar Container-->
				</header>
				<div id="main_content">
					<div id="shopping_cart">
						<h1>Shopping Cart</h1>
						<p>Your shopping cart is empty.</p>
					</div>
					<div id="content">
						<xsl:apply-templates/>
					</div>
				</div>
				<div class="divider">
					<img id="divider1" src="/resources/divider.jpg" />
				</div>
			</body>
		</html>
	</xsl:template>
	
	<!-- match menu -->          
	<xsl:template match="/menus/menu">
		<div class="menu">
			<h1><xsl:value-of select="title"/></h1>
			<xsl:for-each select = "menuItems/*">
				<div class="menu_item">
					<h3 class="menu_item_name">
						<xsl:value-of select="name"/>
					</h3>
					<p>
						<img>
							<xsl:attribute name ="src">
								<xsl:value-of select="image"/>
							</xsl:attribute>
						</img>
						<xsl:value-of select = "longDesc"/>
					</p>
					<span class="pop_up">
						<p class="menu_item_price"><xsl:value-of select = "price"/></p>
						<button class="add_to_cart">Add To Cart</button>
						<h4>Nutrition</h4>
						<p>Calories: <xsl:value-of select = "nutrition/calories"/></p>
						<p>Fat: <xsl:value-of select = "nutrition/fat"/></p>
						<p>Sugar: <xsl:value-of select = "nutrition/sugar"/></p>
						
					</span>
				</div>
			</xsl:for-each>
		</div>
	</xsl:template>
</xsl:stylesheet>