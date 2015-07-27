<?php

require_once('php/libs/PHPMailer/PHPMailerAutoload.php');

function getData() {
    $post = $_POST;
    //var_dump($post);
    if(!empty($post['email'])) {
        $emailContent = "Name: " . $post['name'] . "\n";
        $emailContent .= "Email: " . $post['email'] . "\n";
        $emailContent .= "Question: " . $post['question'];
        $result = [];

        if(sendSingleMail($emailContent)) {
            $result['status'] = 'ok';
        } else {
            $result['status'] = 'fail';
        }
        echo json_encode($result);
    }
}

function sendSingleMail($contentMail) {
    $mail = new PHPMailer;
    $mail->IsSMTP();
    //$mail->SMTPDebug = 1;
    
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 465;
    $mail->Username = 'user';
    $mail->Password = 'password';

    $mail->From = 'ignasori94@gmail.com';
    $mail->FromName = 'Cirque Eco';
    $mail->addAddress('ignasori94@gmail.com', 'Cirque Eco');

    //$mail->isHTML(true);

    $mail->Subject = 'Contact Form Cirque Eco';
    $mail->Body = $contentMail;
    
    if (!$mail->send()) {
        return false;
    } else {
        return true;
    }
}
