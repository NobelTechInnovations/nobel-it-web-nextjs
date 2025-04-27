"use client";

import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { initEmailJS, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '@/lib/emailjs';
import GoogleMap from "@/components/GoogleMap";
import { Icon } from '@iconify/react';

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
                    className={`mt-4 p-3 rounded-md ${formStatus.type === "success"
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
                  <div className="flex items-start space-x-2">
                    <div><Icon icon="fluent-color:mail-16" width="24" height="24" /></div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:nobeltechinnovations@gmail.com" className="text-blue-600 hover:underline">
                        nobeltechinnovations@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div><Icon icon="emojione-v1:mobile-phone" width="24" height="24" /></div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+919828051996" className="text-blue-600 hover:underline">+(91) 982 805 1996</a><br />
                      <a href="tel:+918079076815" className="text-blue-600 hover:underline">+(91) 807 907 6815</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div><Icon icon="logos:google-maps" width="16.75" height="24" /></div>
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
                  As a new startup founded in 2024, we&apos;re eager to collaborate with businesses of all sizes. Whether you need web development, IT consulting, or cybersecurity solutions, our team is ready to assist.
                </p>
                <p>
                  We&apos;re at the beginning of our journey and looking forward to growing alongside our clients. Fill out the form or contact us directly to start a conversation about your needs.
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
            Our Location
          </h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-12 gap-4">
                <div className="md:col-span-4 col-span-12">
                  <h3 className="text-xl font-bold mb-2">Jaipur Office</h3>
                  <p className="text-gray-500 mb-4">Headquarters (Est. 2024)</p>
                  <address className="not-italic mb-4 text-gray-700">
                    Chordias Atulya Building<br />
                    Kamla Nehru Nagar<br />
                    Jaipur, Rajasthan<br />
                    India
                  </address>
                </div>
                <div className="md:col-span-8 col-span-12">
                  <GoogleMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Join Us at the Start of Something Great
          </h2>
          <p className="max-w-[700px] mx-auto mb-8 text-lg">
            As we build our startup, we&apos;re looking for partners who are excited to innovate and grow together.
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