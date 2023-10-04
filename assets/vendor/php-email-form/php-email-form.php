<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Replace with your email address where you want to receive emails
    $to_email = 'info@cubittax.com';

    try {
        // Get form data
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        // Validate the data (you can add more validation if necessary)
        if (empty($name) || empty($email) || empty($subject) || empty($message)) {
            throw new Exception('Please fill out all fields.');
        }

        // Compose the email message
        $headers = "From: $email";
        $message_body = "Name: $name\n";
        $message_body .= "Email: $email\n";
        $message_body .= "Subject: $subject\n\n";
        $message_body .= "Message:\n$message";

        // Send the email
        if (mail($to_email, $subject, $message_body, $headers)) {
            echo 'OK';
        } else {
            throw new Exception('Error sending email.');
        }
    } catch (Exception $e) {
        echo 'Error: ' . $e->getMessage();
    }
} else {
    // Handle non-POST requests (e.g., direct access to this PHP file)
    echo 'Invalid request.';
}
?>