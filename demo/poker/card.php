<?php

	$symbol = strtoupper($_GET['symbol']);
	$value = substr($_GET['value'], 0, 16);
	$image = imagecreatefrompng('stuff/card.png');
	$background = imagecolorallocate($image,255,238,204);
	$foreground = imagecolorallocate($image,0,0,0);
	
		switch($symbol) {
		case strtoupper("Spades"):
			$symbol = "&spades;";
			$valueColor = imagecolorallocate($image, 0, 0, 0);
			break;
		case strtoupper("Hearts"):
			$symbol = "&hearts;";
			$valueColor = imagecolorallocate($image, 255, 0, 0);
			break;
		case strtoupper("Diamonds"):
			$symbol = "&diams;";
			$valueColor = imagecolorallocate($image, 255, 0, 0);
			break;
		case strtoupper("Clubs"):
			$symbol = "&clubs;";
			$valueColor = imagecolorallocate($image, 0, 0, 0);
			break;
		default: 
			$symbol = "No.";

	}


	imagefttext($image, 70, 0, 70, 185, $valueColor, "stuff/segoeui.ttf", $symbol);
	imagefttext($image, 30, 0, 10, 40, $valueColor, "stuff/segoeui.ttf", $value);

	header("Content-type: image/png");
	imagepng($image);
	imagedestroy($im);

?>		