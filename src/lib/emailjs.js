import { init } from '@emailjs/browser';

/**
 * EmailJS Configuration
 * 
 * Follow these steps to set up your EmailJS account:
 * 
 * 1. Create an account at https://www.emailjs.com/
 * 2. Create a new service (e.g., Gmail, Outlook, etc.)
 * 3. Create a new email template - important variables are:
 *    - {{user_name}} - The sender's name
 *    - {{user_email}} - The sender's email
 *    - {{reply_to}} - Reply-to address (same as user_email)
 *    - {{to_email}} - The recipient email 
 *    - {{from_name}} - Form source identifier
 *    - {{to_name}} - Recipient name
 *    - {{service}} - The selected service
 *    - {{message}} - The message content
 *    - {{phone}} - The phone number (optional - will be "Not provided" if empty)
 *    - {{company}} - The company name (optional - will be "Not provided" if empty)
 * 4. Get your Service ID, Template ID, and Public Key from your dashboard
 * 5. Replace the placeholder values below with your actual credentials
 */

// Initialize EmailJS
export function initEmailJS() {
  init(EMAILJS_PUBLIC_KEY);
}

// IMPORTANT: Replace these with your actual EmailJS values
// The current values are likely incorrect or incomplete
export const EMAILJS_SERVICE_ID = 'service_m4zx2g9'; 
export const EMAILJS_TEMPLATE_ID = 'template_e50z3rr';
export const EMAILJS_PUBLIC_KEY = '-2obUXwdr66b21Y9-'; // Fixed the public key

/**
 * TROUBLESHOOTING TIP:
 * 
 * If you see "The recipients address is empty" error:
 * 1. Make sure your template includes {{to_email}} variable
 * 2. Check your EmailJS template setting "Email To" field
 * 3. We've updated the code to directly pass to_email to fix this
 * 
 * For other issues:
 * 1. Check your EmailJS dashboard at https://dashboard.emailjs.com
 * 2. Verify your Public Key (should be ~24 characters)
 * 3. Make sure your service is active and properly configured
 */

/**
 * Template Structure Guide
 * 
 * When creating your EmailJS template, you can use the following structure:
 * 
 * Subject: New Contact Form Submission from {{user_name}}
 * 
 * Body:
 * From: {{from_name}}
 * To: {{to_name}} ({{to_email}})
 * Reply-To: {{reply_to}}
 * 
 * Name: {{user_name}}
 * Email: {{user_email}}
 * Phone: {{phone}}
 * Company: {{company}}
 * Service: {{service}}
 * 
 * Message:
 * {{message}}
 * 
 * --------------------------------------------
 * Sent via Nobel Tech Innovations Contact Form
 */

/*
IMPORTANT: FOLLOW THESE STEPS TO SET UP EMAILJS CORRECTLY:

1. Sign up for a free account at https://www.emailjs.com/
2. Create a new Email Service:
   - Go to "Email Services" tab and click "Add New Service"
   - Select "Gmail" or another provider and follow the instructions
   - Give your service a name and note the Service ID that appears (replace service_temp123 above)

3. Create an Email Template:
   - Go to "Email Templates" tab and click "Create New Template"
   - Design your template with the following variables:
     * {{user_name}} - The sender's name
     * {{user_email}} - The sender's email
     * {{service}} - The selected service
     * {{message}} - The message content
     * {{to_email}} - The recipient email (nobeltechinnovations@gmail.com)
   - Give your template a name and note the Template ID (replace template_temp123 above)

4. Get your keys:
   - Go to "Account" > "API Keys"
   - Copy your "Public Key" (replace temp123456789 above)
   - Copy your "User ID" (replace user_123456 above in the init function)

5. Once the above is complete, your form should work correctly without console errors.

For testing, you can use temporary values, but they won't actually send emails.
The real values should never be committed to a public repository for security reasons.
Consider using environment variables in production.
*/ 