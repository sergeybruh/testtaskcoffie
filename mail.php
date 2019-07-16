<?php

// //$recepient = "wedi2007@gmail.com";
// $recepient = "380977087503@yandex.ua";
// $fromwho = "info@okcoffee.com.ua";
// $sitename = "BOGUSLAVSKY COFFEE LENDING";

// $name = trim($_GET["name"]);
// $phone = trim($_GET["phone"]);
// $email = trim($_GET["email"]);
// $text = trim($_GET["text"]);

// $pagetitle = "Новая заявка с сайта \"$sitename\"";
// $message = "Имя: $name \nТелефон: $phone \nEmail: $email \nТекст: $text";
// mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $fromwho");

?>
<!-- 
info12345

info@okcoffee.com.ua	
mail.adm.tools

Порт SMTP сервера: 25 или 2525 или 465 (SMTP+SSL) -->
<?php
require_once "SendMailSmtpClass.php";
 
$mailSMTP = new SendMailSmtpClass('info@okcoffee.com.ua', 'info12345', 'ssl://mail.adm.tools', 'info@okcoffee.com.ua', 465);
  

$recepient = "koffe_boguslavskiy@ukr.net";
$fromwho = "info@okcoffee.com.ua";
$sitename = "BOGUSLAVSKY COFFEE LENDING";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);
$email = trim($_GET["email"]);
$text = trim($_GET["text"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name  <br> Телефон: $phone  <br> Email: $email <br> Текст: $text";


$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; 	// кодировка письма
$headers .= "From: okcoffee <info@okcoffee.com.ua>\r\n";   			// от кого письмо
$result =  $mailSMTP->send($recepient, $pagetitle, $message, $headers); // отправляем письмо
$resul2 =  $mailSMTP->send("uspehmtl@mail.ru", $pagetitle, $message, $headers);
$resul3 =  $mailSMTP->send("wedi2007@gmail.com", $pagetitle, $message, $headers); // отправляем письмо
if($result === true)
{
    echo "Письмо успешно отправлено";
}
else {
	echo "Ошибка отправки: " . $result;
}
?>