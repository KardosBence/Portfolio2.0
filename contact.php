<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo "Az oldal csak POST kéréssel érhető el!";
    exit;
}
if (isset($_POST['submit'])) {
    $to = "kardbence@gmail.com"; // az e-mail cím, ahova az üzenetet küldeni szeretnéd
    $from = $_POST['email']; // a felhasználó által megadott email cím
    $targy = $_POST['targy']; // a felhasználó által megadott üzenet tárgya
    $uzenet = $_POST['uzenet']; // a felhasználó által megadott üzenet

    // az email üzenet formátuma
    $message = "
    <html>
    <head>
    <title>Új üzenet a kapcsolat űrlapon keresztül</title>
    </head>
    <body>
    <p><strong>E-mail cím:</strong> " . $from . "</p>
    <p><strong>Üzenet tárgya:</strong> " . $targy . "</p>
    <p><strong>Üzenet:</strong><br>" . $uzenet . "</p>
    </body>
    </html>
    ";

    // Az email fejléce
    $headers = "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    $headers .= "Content-type: text/html\r\n";

    // Elküldi az e-mailt
    mail($to, $targy, $message, $headers);
    echo "Az üzenet sikeresen elküldve.";
}
?>