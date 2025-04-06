"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      {/* Footer Dots Pattern */}

      
      <div className="container px-4 md:px-6 mx-auto relative z-10 py-12">
        {/* Company Logo */}
        <div className="flex justify-center mb-12">
          <div className=" w-100 relative h-15 mr-2">
            <Image fill src="/logo_footer.png" alt="Clutch"  className="object-contain"/>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/managed-services" className="text-gray-400 hover:text-white transition-colors">
                  Managed Services
                </Link>
              </li>
              <li>
                <Link href="/services/it-consulting" className="text-gray-400 hover:text-white transition-colors">
                  IT Consulting & Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/cyber-security" className="text-gray-400 hover:text-white transition-colors">
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="text-gray-400 hover:text-white transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-services" className="text-gray-400 hover:text-white transition-colors">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link href="/services/network-connectivity" className="text-gray-400 hover:text-white transition-colors">
                  Network Connectivity
                </Link>
              </li>
              <li>
                <Link href="/services/erp-solutions" className="text-gray-400 hover:text-white transition-colors">
                  ERP Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/about/why-us" className="text-gray-400 hover:text-white transition-colors">
                  Why us
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about/partners" className="text-gray-400 hover:text-white transition-colors">
                  Partners & Certifications
                </Link>
              </li>
              <li>
                <Link href="/about/reviews" className="text-gray-400 hover:text-white transition-colors">
                  Reviews & Awards
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Case studies
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
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
                  I agree to the Privacy Policy and give my permission to process my personal data for the purposes specified in the Privacy Policy
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

        {/* CTA Button */}
        <div className="flex justify-center mb-12">
          <Link
            href="/contact"
            className="px-3 py-2 bg-blue-600 text-white font-medium  hover:bg-blue-700 transition-colors text-lg"
          >
            Schedule Consultation
          </Link>
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
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        className="absolute right-6 bottom-6 bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
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