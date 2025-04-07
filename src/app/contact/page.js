"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { initEmailJS, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '@/lib/emailjs';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    company: "",
    message: "",
    service: "",
  });

  const [formStatus, setFormStatus] = useState({
    message: "",
    type: "", // success or error
    isSubmitting: false,
  });

  // Initialize EmailJS when component mounts
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      message: "",
      type: "",
      isSubmitting: true,
    });

    // Send email using EmailJS with direct parameter passing for better control
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: "Nobel Tech Website Contact Form",
        to_name: "Nobel Tech Team",
        to_email: "nobeltechinnovations@gmail.com", // Hard-coded recipient
        user_name: formData.user_name,
        user_email: formData.user_email,
        phone: formData.phone || "Not provided", // Handle empty phone
        company: formData.company || "Not provided", // Handle empty company
        service: formData.service,
        message: formData.message,
        reply_to: formData.user_email
      },
      EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log("EmailJS success:", result.text);
      setFormStatus({
        message: "Thank you for your message! We'll get back to you soon.",
        type: "success",
        isSubmitting: false,
      });
      setFormData({
        user_name: "",
        user_email: "",
        phone: "",
        company: "",
        message: "",
        service: "",
      });
    })
    .catch((error) => {
      console.error('EmailJS error details:', error?.text || 'Unknown error', error);
      setFormStatus({
        message: `Error: ${error?.text || 'There was an error sending your message. Please try again later.'}`,
        type: "error",
        isSubmitting: false,
      });
    });
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Contact Hero */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Contact Us
            </h1>
            <p className="max-w-[700px] text-white text-lg md:text-xl">
              Get in touch with our team to discuss your project or ask questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
                Get In Touch
              </h2>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="text-sm font-medium leading-none">
                      Full Name
                    </label>
                    <input
                      id="user_name"
                      name="user_name"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      type="text"
                      placeholder="John Doe"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="user_email" className="text-sm font-medium leading-none">
                      Email
                    </label>
                    <input
                      id="user_email"
                      name="user_email"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium leading-none">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      type="tel"
                      placeholder="+1 (123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium leading-none">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      type="text"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium leading-none">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="it-consulting">IT Consulting</option>
                    <option value="web-development">Web Development</option>
                    <option value="cloud-services">Cloud Services</option>
                    <option value="cyber-security">Cyber Security</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="flex min-h-[120px] w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project, requirements, or questions..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {formStatus.message && (
                  <div
                    className={`mt-4 p-3 rounded-md ${
                      formStatus.type === "success"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-blue-600 mt-1 mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:nobeltechinnovations@gmail.com" className="text-blue-600 hover:underline">
                        nobeltechinnovations@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-blue-600 mt-1 mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+919828051996" className="text-blue-600 hover:underline">
                        +(91) 98280 51996
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-blue-600 mt-1 mr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold">Address</p>
                      <address className="not-italic">
                        Atulya Chordia Building<br />
                        Kamla Nehru Nagar<br />
                        Jaipur, Rajasthan, India
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">We&rsquo;re Here to Help</h3>
                <p className="mb-4">
                  Whether you&rsquo;re looking for IT consulting, web development, cybersecurity solutions, or any other digital service, our team is ready to assist you.
                </p>
                <p>
                  Fill out the form or contact us directly, and we&rsquo;ll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Jaipur Office</h3>
              <p className="text-gray-500 mb-4">Headquarters</p>
              <address className="not-italic mb-4 text-gray-700">
                Atulya Chordia Building<br />
                Kamla Nehru Nagar<br />
                Jaipur, Rajasthan<br />
                India
              </address>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Get directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="max-w-[700px] mx-auto mb-8 text-lg">
            Partner with Nobel Tech Innovation for innovative technology solutions that drive growth and efficiency.
          </p>
          <a
            href="tel:+919828051996"
            className="inline-flex h-10 items-center justify-center rounded-md bg-white text-blue-600 px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100"
          >
            Call Us Now
          </a>
        </div>
      </section>
    </main>
  );
} 