<?php

if( isset($_POST['email'] ) && !empty($_POST['email']) ){
    $email = addslashes($_POST['email']);
    $message = addslashes($_POST['message']);

    //defino meu e-mail
    $to = 'gustavo.felipebc@gmail.com';
    $subject = 'Contato via site portfólio';
    $body = "Email: ". $email. "\r\n".
            "Mensagem: ". $message;
    $header = 'From: gustavofbc <gustavo.felipebc@gmail.com>'."\r\n"
              ."Reply-To:". $email."\r\n"
              ."X-Mailer:PHP/".phpversion();

    if(mail($to, $subject, $body, $header)){
        echo('Email enviado com sucesso!');
    } else {
        echo('O email não pode ser enviado');
    }
}

?>