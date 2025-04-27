"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      {/* Footer Dots Pattern */}


      <div className="container px-4 md:px-6 mx-auto relative z-10 py-12">
        {/* Company Logo */}
        <div className="flex justify-center mb-12">
          <div className=" w-100 relative h-15 mr-2">
            <Image fill src="/logo_footer.png" alt="Nobel Tech Innovation" className="object-contain" />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Core Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Core Services</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400 hover:text-white transition-colors">
                  Web & Mobile App Development
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-white transition-colors">
                  Custom SaaS Solutions
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-white transition-colors">
                  WordPress & Shopify Expertise
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Tech Stack</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Backend: Laravel, Node.js, Go Lang, Python</li>
              <li className="text-gray-400">Frontend: React.js, Flutter</li>
              <li className="text-gray-400">Mobile: Native (iOS/Android), Cross-platform</li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="flex items-start space-x-3 mb-3">
              <div><Icon icon="logos:google-maps" width="16.75" height="24" /></div>
              <div>
                <p className="font-semibold text-gray-200">Address</p>
                <address className="text-gray-400 not-italic">
                  Atulya Chordia Building<br />
                  Kamla Nehru Nagar<br />
                  Jaipur, Rajasthan, India
                </address>
              </div>
            </div>
            <div className="flex items-start space-x-3 mb-3">
              <div><Icon icon="fluent-color:mail-16" width="24" height="24" /></div>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:nobeltechinnovations@gmail.com" className="text-gray-400 hover:text-blue-400 hover:underline">
                  nobeltechinnovations@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div><Icon icon="emojione-v1:mobile-phone" width="24" height="24" /></div>
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:+919828051996" className="text-gray-400 hover:text-blue-400 hover:underline">+(91) 982 805 1996</a><br />
                <a href="tel:+918079076815" className="text-gray-400 hover:text-blue-400 hover:underline">+(91) 807 907 6815</a>
              </div>
            </div>
          </div>

          {/* Newsletter Sign-up */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Don&apos;t miss out updates</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full p-3 bg-transparent border border-gray-700 text-white  focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="privacy-consent"
                  className="mt-1"
                />
                <label htmlFor="privacy-consent" className="text-sm text-gray-400">
                  I agree to the <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</Link> and give my permission to process my personal data for the purposes specified in the Privacy Policy
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-3 py-2 bg-blue-600 text-white font-medium  hover:bg-blue-700 transition-colors flex items-center"
                >
                  Send
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>



        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Nobel Tech Innovation. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms-conditions" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed right-6 bottom-6 bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;