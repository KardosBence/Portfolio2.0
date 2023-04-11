<?php

$to = 'kardbence@gmail.com';
$subject = $_POST['targy'];
$message = $_POST['uzenet'];
$name = $_POST['Név'];
$headers = "From: " . $_POST['email'] . "\r\n";
mail($to, $subject, $message, $name, $headers);
echo ("Az üzenet sikeresen elküldve! " . $name . "<br> Your message: <b>");
echo $subject;
echo "</b>, megkaptam </br> Válaszüzenetet 24 órán belül elküldöm. <br><br> További szép napot kívánok! <br> -Kardos Bence";
?>