"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="sticky top-0 bg-white z-50 ">
      <div className="container mx-auto px-4 max-w-6xl border-b border-gray-200">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
          <img src="/logo_nobel.png" alt="Clutch" className="h-10 mr-2" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                H.
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg  overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link href="/it-service" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">IT service</Link>
                  <Link href="/app-development" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">App Development</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                Solutions
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg  overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link href="/web-service" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Web Service</Link>
                  <Link href="/mobile-applications" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Mobile applications</Link>
                  <Link href="/cloud-services" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Cloud Services</Link>
                  <Link href="/cyber-security" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Cyber Security</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                Company
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg  overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link href="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About Us</Link>
                  <Link href="/team" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Our Team</Link>
                  <Link href="/careers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Careers</Link>
                </div>
              </div>
            </div>

            <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 font-medium">
              Case studies
            </Link>

            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
              Blog
            </Link>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg  overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link href="/whitepapers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Whitepapers</Link>
                  <Link href="/webinars" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Webinars</Link>
                  <Link href="/resources" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Resources</Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Client Support (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex flex-col items-end">
              <span className="text-sm text-gray-600">Client Support →</span>
              <span className="font-medium text-gray-600">+91 98280 51996</span>
            </div>
            <Link 
              href="/contact"
              className="px-3 py-2 bg-blue-600 text-white font-medium  hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2  text-gray-700 hover:bg-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 max-w-6xl">
            <nav className="flex flex-col space-y-4">
              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setActiveDropdown(activeDropdown === 'home' ? null : 'home')}
                >
                  <span>H.</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${activeDropdown === 'home' ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'home' && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link href="/home-1" className="block text-gray-600 hover:text-blue-600">Home 1</Link>
                    <Link href="/home-2" className="block text-gray-600 hover:text-blue-600">Home 2</Link>
                    <Link href="/home-3" className="block text-gray-600 hover:text-blue-600">Home 3</Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                >
                  <span>Solutions</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'solutions' && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link href="/it-consulting" className="block text-gray-600 hover:text-blue-600">IT Consulting</Link>
                    <Link href="/cloud-services" className="block text-gray-600 hover:text-blue-600">Cloud Services</Link>
                    <Link href="/cyber-security" className="block text-gray-600 hover:text-blue-600">Cyber Security</Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                >
                  <span>Company</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${activeDropdown === 'company' ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'company' && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link href="/about" className="block text-gray-600 hover:text-blue-600">About Us</Link>
                    <Link href="/team" className="block text-gray-600 hover:text-blue-600">Our Team</Link>
                    <Link href="/careers" className="block text-gray-600 hover:text-blue-600">Careers</Link>
                  </div>
                )}
              </div>

              <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Case studies
              </Link>

              <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium py-2">
                Blog
              </Link>

              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                >
                  <span>Resources</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'resources' && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link href="/whitepapers" className="block text-gray-600 hover:text-blue-600">Whitepapers</Link>
                    <Link href="/webinars" className="block text-gray-600 hover:text-blue-600">Webinars</Link>
                    <Link href="/resources" className="block text-gray-600 hover:text-blue-600">Resources</Link>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-600">Client Support</span>
                  <span className="font-medium text-gray-600">+91 9828051996</span>
                </div>
                <Link 
                  href="/contact"
                  className="block w-full text-center px-5 py-2.5 mt-2 bg-blue-600 text-white font-medium  hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 