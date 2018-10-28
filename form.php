<?php

    $assunto = $_POST['assunto'];
    $corpo = "
    Nome:" $_POST['nome']."
    Sobrenome:" $_POST['sobrenome']."
    Email:" $_POST['mail']."
    Assunto:" $_POST['assunto']."
    Telefone:" $_POST['telefone']."
    Mensagem:" $_POST['mensagem']."
";

    mail('diegodirosaki@Gmail.com', $assunto, $corpo, 'From: diegosgomes27@gmail.com');

?>