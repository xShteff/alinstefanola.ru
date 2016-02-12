<?php
	$folderName = 'sigs'; 
	$images = scandir($folderName);
    $random = mt_rand(2, count($images) - 1);
    $ext = pathinfo($folderName . '/' . $images[$random], PATHINFO_EXTENSION);

    switch($ext){
    	case 'png':
    		$image = imagecreatefrompng($folderName . '/' . $images[$random]);
    		header("Content-Type: image/png");
    		imagepng($image);
    		break;
    	case 'jpg':
    		$image = imagecreatefromjpeg($folderName . '/' . $images[$random]);
    		header("Content-Type: image/jpeg");
    		imagejpeg($image);
    		break;
    	case 'gif':
			$img = fread(fopen($folderName . '/' . $images[$random],'r'),filesize($folderName . '/' . $images[$random]));
			header("Content-Type: image/gif"); 
			echo $img; 
    		break;
    	case 'jpeg':
    		$image = imagecreatefromjpeg($folderName . '/' . $images[$random]);
    		header("Content-Type: image/jpeg");
    		imagejpeg($image);
    		break;
    }
?>