<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit();
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request data.']);
    exit();
}

$name    = isset($data['name'])    ? trim(strip_tags($data['name']))    : '';
$email   = isset($data['email'])   ? trim(strip_tags($data['email']))   : '';
$message = isset($data['message']) ? trim(strip_tags($data['message'])) : '';

$errors = [];
if (empty($name))                                       $errors[] = 'Name is required';
if (empty($email))                                      $errors[] = 'Email is required';
elseif (!filter_var($email, FILTER_VALIDATE_EMAIL))     $errors[] = 'Invalid email format';
if (empty($message))                                    $errors[] = 'Message is required';
elseif (strlen($message) < 10)                          $errors[] = 'Message must be at least 10 characters';

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode('. ', $errors)]);
    exit();
}

// ── WhatsApp notification via CallMeBot ───────────────────────────────────────
// To activate: on WhatsApp send "I allow callmebot to send me messages" to
// +34 644 71 20 84 — you will receive your personal API key in reply.
$wa_phone  = '2349063545405';
$wa_apikey = 'YOUR_CALLMEBOT_APIKEY'; // replace after activation

$wa_text = urlencode(
    "📩 New enquiry on VivaCrest\n\n" .
    "Name: {$name}\n" .
    "Email: {$email}\n\n" .
    "Message:\n{$message}\n\n" .
    "Received: " . date('d M Y, H:i') . " WAT"
);

$wa_url = "https://api.callmebot.com/whatsapp.php?phone={$wa_phone}&text={$wa_text}&apikey={$wa_apikey}";

$ch = curl_init($wa_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_exec($ch);
curl_close($ch);
// ─────────────────────────────────────────────────────────────────────────────

$log = date('Y-m-d H:i:s') . " - {$name} ({$email})\n";
file_put_contents(__DIR__ . '/contact_log.txt', $log, FILE_APPEND);

http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Thank you! Your message has been received. We will get back to you shortly.'
]);
?>
