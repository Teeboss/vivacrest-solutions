# VivaCrest Solutions - cPanel Deployment Guide

This guide provides step-by-step instructions for deploying the VivaCrest Solutions application to cPanel hosting.

## Prerequisites

- cPanel hosting account with PHP support
- Domain or subdomain configured
- FTP client (FileZilla, WinSCP) or cPanel File Manager access
- Node.js installed locally (for building)

## Step 1: Build the Production Bundle

The production build has already been created in the `dist` folder. If you need to rebuild:

```bash
npm run build
```

This creates an optimized production bundle in the `dist` directory.

## Step 2: Prepare Files for Upload

You need to upload the following to your cPanel:

### From the `dist` folder:

- `index.html`
- `.htaccess` (important for SPA routing)
- `assets/` folder (contains all CSS and JS files)

### From the project root:

- `api/` folder (contains `contact.php` for the contact form)
- `public/images/` folder (if using local images - note: your app currently uses external URLs)

## Step 3: Upload to cPanel

### Option A: Using cPanel File Manager

1. **Log in to cPanel**
   - Access your hosting provider's cPanel

2. **Navigate to File Manager**
   - Click on "File Manager" in the Files section

3. **Go to the correct directory**
   - For root domain: Navigate to `public_html`
   - For subdomain: Navigate to `public_html/subdomain-name` or the subdomain's root folder

4. **Upload files**
   - Click "Upload" button
   - Upload all files from the `dist` folder
   - Upload the `api` folder from your project root
   - Ensure `.htaccess` is uploaded (enable "Show Hidden Files" if needed)

5. **Set permissions**
   - Right-click on `api/contact.php`
   - Set permissions to `644` (read/write for owner, read for others)

### Option B: Using FTP Client (FileZilla)

1. **Connect to your server**
   - Host: Your domain or FTP server address
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21 (or 22 for SFTP)

2. **Navigate to the correct directory**
   - Remote site: `public_html` (or your subdomain folder)

3. **Upload files**
   - Drag and drop all files from the `dist` folder to the remote directory
   - Upload the `api` folder
   - Ensure `.htaccess` is transferred (enable "Show hidden files" in FileZilla settings)

4. **Verify transfer**
   - Check that all files are uploaded successfully
   - Verify file sizes match

## Step 4: Configure the Contact Form

The contact form uses `api/contact.php`. You may need to configure email settings:

1. **Edit contact.php** (if needed)
   - Update the recipient email address
   - Configure SMTP settings if your host requires it

2. **Test the contact form**
   - Submit a test message
   - Check if emails are being received

## Step 5: Verify Deployment

Visit your domain/subdomain and check:

- ✅ Homepage loads correctly
- ✅ All navigation links work (Services, Platform, Industries, Contact)
- ✅ Dark/light theme toggle works
- ✅ Images and icons display properly
- ✅ Contact form submits successfully
- ✅ Responsive design works on mobile
- ✅ No console errors in browser DevTools

## Troubleshooting

### Issue: 404 errors when navigating to routes

**Solution:** Ensure `.htaccess` file is uploaded and `mod_rewrite` is enabled on your server.

### Issue: Contact form not sending emails

**Solutions:**

- Check `contact.php` has correct permissions (644)
- Verify your hosting supports PHP mail function
- Check spam folder for test emails
- Contact your hosting provider about email sending restrictions

### Issue: Assets not loading (CSS/JS)

**Solutions:**

- Clear browser cache
- Check that `assets` folder is uploaded correctly
- Verify file paths in browser DevTools Network tab

### Issue: Images not displaying

**Solutions:**

- Your app currently uses external Google image URLs, so this shouldn't be an issue
- If using local images, ensure `public/images` folder is uploaded

### Issue: White screen or blank page

**Solutions:**

- Check browser console for JavaScript errors
- Verify `index.html` is in the root of your deployment directory
- Ensure all files from `dist/assets` are uploaded

## Directory Structure on cPanel

Your final directory structure should look like:

```
public_html/                    (or your subdomain folder)
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   └── (other asset files)
└── api/
    └── contact.php
```

## Post-Deployment Checklist

- [ ] Site loads at your domain
- [ ] All pages/sections are accessible
- [ ] Theme toggle works
- [ ] Contact form sends emails
- [ ] Mobile responsive design works
- [ ] No console errors
- [ ] SSL certificate is active (https://)
- [ ] Performance is acceptable

## Updating the Site

To update your site after making changes:

1. Run `npm run build` locally
2. Upload the new files from `dist` folder
3. Clear browser cache to see changes

## Additional Notes

- **SSL Certificate:** Ensure your domain has an SSL certificate installed in cPanel for HTTPS
- **Performance:** Consider enabling Cloudflare or cPanel's built-in caching for better performance
- **Backups:** Regularly backup your site files through cPanel's backup feature

## Support

If you encounter issues:

1. Check cPanel error logs (Metrics → Errors)
2. Contact your hosting provider's support
3. Review browser console for client-side errors
