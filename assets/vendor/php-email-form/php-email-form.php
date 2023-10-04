<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Replace with your actual receiving email address
    $to = 'info@example.com';
    
    // Sanitize user inputs to prevent email header injections
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    
    // Check if all required fields are filled
    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        // Compose the email message
        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
        
        $emailBody = "Name: $name\n";
        $emailBody .= "Email: $email\n";
        $emailBody .= "Subject: $subject\n";
        $emailBody .= "Message:\n$message";
        
        // Send the email
        if (mail($to, $subject, $emailBody, $headers)) {
            echo "Success! Your message has been sent.";
        } else {
            echo "Error: Unable to send the message. Please try again later.";
        }
    } else {
        echo "Error: All fields are required.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
</head>
<body>
    <h1>Contact Us</h1>
    <form method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        
        <label for="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required><br><br>
        
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea><br><br>
        
        <input type="submit" value="Send">
    </form>
</body>
</html>
