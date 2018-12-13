<?php 
ini_set('display_startup_errors',1);
ini_set('display_errors',1);
error_reporting(E_ALL);

require 'vendor/phpmailer/class.phpmailer.php';
require 'vendor/phpmailer/PHPMailerAutoload.php';

$email = isset($_GET['mail']) ? $_GET['mail']: '';
$nome = isset($_GET['nome']) ? $_GET['nome']: '';
$assunto = isset($_GET['assunto']) ? $_GET['assunto']: '';
$body = isset($_GET['mengisagem']) ? $_GET['mensagem']: '';
// Inicia a classe PHPMailer
$mail = new PHPMailer();

// Define os dados do servidor e tipo de conex�o
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Define os dados do servidor e tipo de conex�o
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->IsSMTP(); // Define que a mensagem ser� SMTP
$mail->Host = "smtp.gmail.com";
$mail->SMTPAuth = true; // Usar autentica��o SMTP (obrigat�rio para smtp.seudom�nio.com.br)
$mail->Username = 'newsletter@5era.com'; // Usu�rio do servidor SMTP (endere�o de email)
$mail->Password = '=RmWm%39'; // Senha do servidor SMTP (senha do email usado)

// Define o remetente
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->From = "jvsadesign@gmail.com"; // Seu e-mail
$mail->Sender = "jvsadesign@gmail.com"; // Seu e-mail
$mail->FromName = "5 Era"; // Seu nome

// Define os destinat�rio(s)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->AddAddress($email);
$mail->AddReplyTo($email);
//$mail->AddAddress('e-mail@destino2.com.br');
//$mail->AddCC('ciclano@site.net', 'Ciclano'); // Copia
//$mail->AddBCC('fulano@dominio.com.br', 'Fulano da Silva'); // C�pia Oculta

// Define os dados t�cnicos da Mensagem
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->IsHTML(true); // Define que o e-mail ser� enviado como HTML
$mail->CharSet = 'utf-8'; // Charset da mensagem (opcional)

// Define a mensagem (Texto e Assunto)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$msg = "$assunto , $email, $nome, $body";

$mail->Subject  = $assunto; // Assunto da mensagem
$mail->Body = "$msg";
$mail->AltBody =  $assunto ;

// Define os anexos (opcional)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//$mail->AddAttachment("/home/login/documento.pdf", "novo_nome.pdf");  // Insere um anexo

// Envia o e-mail
$enviado = $mail->Send();

// Limpa os destinat�rios e os anexos
$mail->ClearAllRecipients();
$mail->ClearAttachments();

header("location:  index.html");
?>