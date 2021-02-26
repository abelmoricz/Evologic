

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

  if (empty($_POST['name'])) {
    $name = 'No Name';
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
    I'm Interested in: <span style=\"color:#888\">$message</span>
    </div>
    </body>
    </html>
    ";

  }
}

//////////////////////////////

  require_once'libs/PHPMailerAutoload.php';
  $m = new PHPMailer;
  $m->isSMTP();                                      // Set mailer to use SMTP
  $m->SMTPAuth = true;                               // Enable SMTP authentication
  $m->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
  $m->Username = 'evologic.technology@gmail.com';                 // SMTP username
  $m->Password = 'Evologic2020@';                           // SMTP password
  $m->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
  $m->Port = 587;
  $m->isHTML(true);                                  // Set email format to HTML

  $m->Subject = 'Contact form submited';
  $m->Body = $emailBody;
  $m->FromName = 'Evologic Contact Form Submitted!';
  $m->addAddress('abel.moricz.2@gmail.com', '');     // Add a recipient

if (empty($errors)) {
  if($m->send()) {
  $sent=true;
  }
  else {
  $sent=false;
  }
}
///////////////////////////

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
