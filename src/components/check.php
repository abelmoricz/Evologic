<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  if (empty($_POST['email'])) {
    $errors[] = 'Email is empty';
  } else {
    $email = $_POST['email'];
    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
    }
  }

  if (empty($_POST['message'])) {
    $errors[] = 'Message is empty';
  } else {
    $message = $_POST['message'];
  }

  if (empty($_POST['message'])) {
    $name = "No Name";
  } else {
    $name = $_POST['name'];
  }

  if (empty($errors)) {
    $date = date('j, F Y h:i A');
    $emailBody = "
    <html>
    <head>
    <title>$email is contacting you</title>
    </head>
    <body style=\"background-color:#fafafa;\">
    <div style=\"padding:20px;\">
    Date: <span style=\"color:#888\">$date</span>
    <br>
    Email: <span style=\"color:#888\">$email</span>
    <br>
    Message: <div style=\"color:#888\">$message</div>
    </div>
    </body>
    </html>
    ";

//////// below unnecessary
    $headers = 	'From: Contact Form <contact@mydomain.com>' . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "MIME-Version: 1.0\r\n" .
    "Content-Type: text/html; charset=iso-8859-1\r\n";

    $to = 'contact@example.com';
    $subject = 'Contacting you';
///////////////////////////////////////

  $m = new PHPMailer;
  $m->isSMTP();                                      // Set mailer to use SMTP
  $m->SMTPAuth = true;                               // Enable SMTP authentication
  $m->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
  $m->Username = '';                 // SMTP username
  $m->Password = '';                           // SMTP password
  $m->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
  $m->Port = 587;
  $m->isHTML(true);                                  // Set email format to HTML

  $m->Subject = 'Contact form submited';
  $m->Body = 'From: ' . $name . ' (' . $email . ')<p>' . $message . '</p>';
  $m->FromName = 'Evologic Contact Form Submitted!';
  $m->addAddress('', '');     // Add a recipient

  if(!$m->send())
  {
  echo "Mailer Error: " . $mail->ErrorInfo;
  }
  else
  {
  echo "Message has been sent successfully";
  }
//////////////////////////
    if (mail($to, $subject, $emailBody, $headers)) {
      $sent = true;
    }
  }
}
?>

  <?php if (!empty($errors)) : ?>

{
  "status": "fail",
  "error":  <?php echo json_encode($errors) ?>
}
  <?php endif; ?>


  <?php if (isset($sent) && $sent === true) : ?>

{
  "status": "success",
  "message": "Your data was successfully submitted"
}
  <?php endif; ?>
