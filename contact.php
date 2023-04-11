<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo "Az oldal csak POST kéréssel érhető el!";
    exit;
}
if (isset($_POST['submit'])) {
    $to = "kardbence@gmail.com";
    $from = $_POST['email'];
    $targy = $_POST['targy'];
    $uzenet = $_POST['uzenet'];

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

    $headers = "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    $headers .= "Content-type: text/html\r\n";

    mail($to, $targy, $message, $headers);
    echo "Az üzenet sikeresen elküldve.";
}
?>