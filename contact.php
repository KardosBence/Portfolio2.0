<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $to = 'kardbence@gmail.com';
    $subject = $_POST['targy'];
    $message = $_POST['uzenet'];
    $headers = "From: " . $_POST['email'] . "\r\n";
    
    if (mail($to, $subject, $message, $headers)) {
        echo "Az üzenet sikeresen elküldve!";
    } else {
        echo "Az üzenet küldése sikertelen.";
    }
}
?>