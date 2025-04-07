"use client";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailJSTest() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Replace these with your actual EmailJS values
    const serviceId = 'service_m4zx2g9';
    const templateId = 'template_e50z3rr';
    const publicKey = 'IcYcd_bCK5ASUSf69'; // This appears to be incomplete, get the complete key

    // Get form values directly
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;
    const phone = form.current.phone?.value || '';

    // Log form data for debugging
    console.log('Form data:', {
      name,
      email,
      message,
      phone
    });

    // Using send instead of sendForm for more direct control
    emailjs.send(
      serviceId,
      templateId,
      {
        from_name: "EmailJS Test Form",
        to_name: "Nobel Tech Team",
        to_email: "nobeltechinnovations@gmail.com", // Hard-coded recipient
        user_name: name,
        user_email: email,
        phone: phone || "Not provided", // Handle null/empty phone
        reply_to: email,  // Set reply-to as the user's email
        message: message
      },
      publicKey
    )
      .then((result) => {
        console.log('Success!', result.text);
        alert('Message sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        console.error('Failed:', error);
        alert('Failed to send message: ' + (error.text || 'Unknown error'));
      });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">EmailJS Test Form</h2>
      <form ref={form} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input 
            type="text" 
            name="user_name" 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            name="user_email" 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input 
            type="text" 
            name="phone" 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea 
            name="message" 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          ></textarea>
        </div>
        <div>
          <button 
            type="submit" 
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Test Email
          </button>
        </div>
      </form>
      <div className="mt-4 text-sm text-gray-500">
        <p>Note: This is a simple test form for EmailJS. Check the console for debug information.</p>
      </div>
    </div>
  );
} 