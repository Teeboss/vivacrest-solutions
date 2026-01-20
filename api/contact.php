<?php
/**
 * Contact Form Handler
 * Accepts POST requests from the contact form and sends email notifications
 */

// Set headers for CORS and JSON response
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Please use POST.'
    ]);
    exit();
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate input
if (!$data) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid JSON data'
    ]);
    exit();
}

// Extract and sanitize form data
$name = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$email = isset($data['email']) ? trim(strip_tags($data['email'])) : '';
$message = isset($data['message']) ? trim(strip_tags($data['message'])) : '';

// Validation
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

if (empty($message)) {
    $errors[] = 'Message is required';
} elseif (strlen($message) < 10) {
    $errors[] = 'Message must be at least 10 characters long';
}

// Return validation errors
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Validation failed',
        'errors' => $errors
    ]);
    exit();
}

// Configure email settings
$to = 'info@vivacrest.com'; // Change this to your email address
$subject = 'New Contact Form Submission from ' . $name;

// Create email body
$emailBody = "New contact form submission:\n\n";
$emailBody .= "Name: " . $name . "\n";
$emailBody .= "Email: " . $email . "\n";
$emailBody .= "Message:\n" . $message . "\n\n";
$emailBody .= "---\n";
$emailBody .= "Submitted on: " . date('Y-m-d H:i:s') . "\n";
$emailBody .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";

// Email headers
$headers = "From: noreply@vivacrest.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mailSent = mail($to, $subject, $emailBody, $headers);

if ($mailSent) {
    // Optional: Save to database or log file
    // saveToDatabase($name, $email, $message);
    
    // Optional: Log to file
    $logEntry = date('Y-m-d H:i:s') . " - Contact from: $name ($email)\n";
    file_put_contents(__DIR__ . '/contact_log.txt', $logEntry, FILE_APPEND);
    
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your message! We will get back to you soon.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send message. Please try again later.'
    ]);
}

// Optional: Function to save to database
// function saveToDatabase($name, $email, $message) {
//     $servername = "localhost";
//     $username = "your_db_username";
//     $password = "your_db_password";
//     $dbname = "your_db_name";
//     
//     try {
//         $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
//         $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//         
//         $stmt = $conn->prepare("INSERT INTO contacts (name, email, message, created_at) VALUES (:name, :email, :message, NOW())");
//         $stmt->bindParam(':name', $name);
//         $stmt->bindParam(':email', $email);
//         $stmt->bindParam(':message', $message);
//         $stmt->execute();
//         
//         $conn = null;
//         return true;
//     } catch(PDOException $e) {
//         error_log("Database error: " . $e->getMessage());
//         return false;
//     }
// }
?>
