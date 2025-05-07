"use client";

import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { initEmailJS, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '@/lib/emailjs';

export default function ContactForm() {
  const formRef = useRef();
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  // Initialize EmailJS when component mounts
  useEffect(() => {
    try {
      initEmailJS();
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Error initializing EmailJS:', error);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormStatus({ 
      submitting: true, 
      success: false, 
      error: false, 
      message: 'Sending your message...' 
    });

    // Get form values
    const name = formRef.current.querySelector('[name="user_name"]').value;
    const email = formRef.current.querySelector('[name="user_email"]').value;
    const service = formRef.current.querySelector('[name="service"]').value;
    const message = formRef.current.querySelector('[name="message"]').value;
    const phone = formRef.current.querySelector('[name="phone"]')?.value || '';
    
    // Log the values being used
    console.log('Form submission with:', {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: EMAILJS_TEMPLATE_ID,
      publicKey: EMAILJS_PUBLIC_KEY ? 'Key exists' : 'Key missing',
      name, email, service, message, phone
    });

    // EmailJS service configuration - use send method for more direct parameter passing
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: "Nobel Tech Website Contact Form",
        to_name: "Nobel Tech Team",
        to_email: "nobeltechinnovations@gmail.com", // Hard-coded recipient
        user_name: name,
        user_email: email,
        phone: phone || "Not provided", // Handle null/empty phone number
        reply_to: email,  // Set reply-to as the user's email
        service: service,
        message: message
      },
      EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log('EmailJS success result:', result);
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully.'
      });
      // Reset form
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS error details:', error?.text || 'Unknown error', error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: `Error: ${error?.text || 'There was an error sending your message. Please try again later.'}`
      });
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="user_name"
          placeholder="Full Name"
          required
          className="w-full p-3 bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
      </div>
      <div>
        <input
          type="email"
          name="user_email"
          placeholder="Email Address"
          required
          className="w-full p-3 bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (Optional)"
          className="w-full p-3 bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
        />
      </div>
      <div>
        <select 
          name="service"
          required
          className="w-full p-3 bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <option value="" className="bg-blue-600">Select Service</option>
          <option value="buzzkit-crm" className="bg-blue-600">BuzzKit CRM</option>
          <option value="it-consulting" className="bg-blue-600">IT Consulting</option>
          <option value="web-development" className="bg-blue-600">Web Development</option>
          <option value="cloud-services" className="bg-blue-600">Cloud Services</option>
          <option value="cyber-security" className="bg-blue-600">Cyber Security</option>
        </select>
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full p-3 bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
        ></textarea>
      </div>
      
      {formStatus.message && (
        <div className={`p-3 text-sm ${formStatus.error ? 'bg-red-500/50' : formStatus.success ? 'bg-green-500/50' : 'bg-blue-500/50'}`}>
          {formStatus.message}
        </div>
      )}
      
      <div>
        <button 
          type="submit"
          disabled={formStatus.submitting}
          className={`w-full px-3 py-2 bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors ${formStatus.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {formStatus.submitting ? 'Sending...' : 'Submit Request'}
        </button>
      </div>
    </form>
  );
} 