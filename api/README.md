# Contact Form PHP Backend

This directory contains the PHP backend script for handling contact form submissions.

## Setup Instructions

### 1. PHP Server Configuration

The contact form requires a PHP server to process submissions. You have several options:

#### Option A: Deploy to a PHP Hosting Provider

- Upload the `api/contact.php` file to your web hosting server
- Ensure the server has PHP 7.0+ installed
- Update the email address in `contact.php` (line 78) to your actual email

#### Option B: Local Development with PHP Built-in Server

```bash
# Navigate to your project root
cd c:\Dev-2\vivacrest-solutions

# Start PHP server on port 8000
php -S localhost:8000
```

Then update the fetch URL in `Contact.tsx` to:

```typescript
const response = await fetch('http://localhost:8000/api/contact.php', {
```

#### Option C: Use XAMPP/WAMP/MAMP

- Install XAMPP, WAMP, or MAMP
- Copy your project to the `htdocs` folder
- Access via `http://localhost/vivacrest-solutions`

### 2. Email Configuration

**Important**: The PHP `mail()` function requires a properly configured mail server.

#### For Production:

- Most web hosting providers have mail servers pre-configured
- Just update the `$to` email address in `contact.php`

#### For Local Development:

You have two options:

**Option 1**: Use a mail service like SendGrid, Mailgun, or AWS SES

- Install the appropriate PHP library (e.g., `composer require sendgrid/sendgrid`)
- Update the email sending code in `contact.php`

**Option 2**: Use a fake SMTP server for testing (recommended for development)

- Install [MailHog](https://github.com/mailhog/MailHog) or [Mailtrap](https://mailtrap.io/)
- Configure PHP to use the SMTP server

### 3. Update the API Endpoint

In `components/Contact.tsx`, update line 70 with your actual PHP endpoint:

```typescript
// For production
const response = await fetch('https://yourdomain.com/api/contact.php', {

// For local PHP server
const response = await fetch('http://localhost:8000/api/contact.php', {

// For XAMPP/WAMP
const response = await fetch('http://localhost/vivacrest-solutions/api/contact.php', {
```

### 4. CORS Configuration

The PHP script includes CORS headers to allow requests from your React app. If you need to restrict access:

Update line 7 in `contact.php`:

```php
// Allow all origins (current)
header('Access-Control-Allow-Origin: *');

// Or restrict to your domain
header('Access-Control-Allow-Origin: https://yourdomain.com');
```

## Features

✅ **Form Validation**: Server-side validation for all fields  
✅ **Email Notifications**: Sends email to configured address  
✅ **CORS Support**: Allows cross-origin requests  
✅ **Error Handling**: Comprehensive error messages  
✅ **Logging**: Optional file logging of submissions  
✅ **Security**: Input sanitization and validation

## Optional Enhancements

### Database Storage

Uncomment the database function at the bottom of `contact.php` and configure your database credentials to store submissions in a database.

### Rate Limiting

Add rate limiting to prevent spam:

```php
// Add at the top of contact.php
session_start();
$max_requests = 5;
$time_window = 3600; // 1 hour

if (!isset($_SESSION['form_submissions'])) {
    $_SESSION['form_submissions'] = [];
}

// Clean old submissions
$_SESSION['form_submissions'] = array_filter(
    $_SESSION['form_submissions'],
    fn($time) => time() - $time < $time_window
);

if (count($_SESSION['form_submissions']) >= $max_requests) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Too many requests']);
    exit();
}

$_SESSION['form_submissions'][] = time();
```

## Testing

1. Start your React dev server: `npm run dev`
2. Start your PHP server (if local)
3. Navigate to the contact section
4. Fill out and submit the form
5. Check for success message
6. Verify email was received (or check logs)

## Troubleshooting

**Form submission fails with network error:**

- Ensure PHP server is running
- Check the API endpoint URL in `Contact.tsx`
- Check browser console for CORS errors

**Email not sending:**

- Verify mail server configuration
- Check PHP error logs
- Consider using a third-party email service

**CORS errors:**

- Update `Access-Control-Allow-Origin` header in `contact.php`
- Ensure your React app URL is allowed
