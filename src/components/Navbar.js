"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 max-w-6xl border-b border-gray-200">
        <div className="flex justify-between items-center h-15">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-10">
              <Image src="/logo_nobel.png" alt="Nobel Tech Innovations" fill className="object-contain object-left" />
            </div>
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
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link href="/it-service" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">IT service</Link>
                  <Link href="/app-development" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">App Development</Link>
                </div>
              </div>
            </div>

            <div className="relative group static">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                Solutions
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Full Width Mega Menu */}
              <div className="absolute left-0 w-full mt-2 bg-white shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300" style={{ position: 'fixed', top: '80px' }}>
                <div className="border-t border-gray-100"></div>
                <div className="container mx-auto max-w-6xl px-4 py-8">
                  <div className="flex">
                    {/* Services Column */}
                    <div className="w-1/3">
                      <h3 className="font-bold text-lg mb-4">Services</h3>
                      <ul className="space-y-3">
                        <li><Link href="/managed-services" className="block text-gray-700 hover:text-blue-600">Managed Services</Link></li>
                        <li><Link href="/it-consulting" className="block text-gray-700 hover:text-blue-600">IT Consulting & Advisory</Link></li>
                        <li><Link href="/cyber-security" className="block text-gray-700 hover:text-blue-600">Cyber Security</Link></li>
                        <li><Link href="/web-development" className="block text-gray-700 hover:text-blue-600">Web Development</Link></li>
                        <li><Link href="/mobile-development" className="block text-gray-700 hover:text-blue-600">Mobile Development</Link></li>
                        <li><Link href="/cloud-services" className="block text-gray-700 hover:text-blue-600">Cloud Services</Link></li>
                      </ul>
                    </div>
                    
                    {/* Business Challenges Column */}
                    <div className="w-1/3 px-8 border-l border-gray-200">
                      <h3 className="font-bold text-lg mb-4">Business Challenges</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 border border-gray-100 hover:border-gray-300 rounded transition-colors">
                          <div className="mb-2 text-blue-600">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700">Digital Transformation</span>
                        </div>
                        
                        <div className="p-3 border border-gray-100 hover:border-gray-300 rounded transition-colors">
                          <div className="mb-2 text-blue-600">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700">Security</span>
                        </div>
                        
                        <div className="p-3 border border-gray-100 hover:border-gray-300 rounded transition-colors">
                          <div className="mb-2 text-blue-600">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700">Automation</span>
                        </div>
                        
                        <div className="p-3 border border-gray-100 hover:border-gray-300 rounded transition-colors">
                          <div className="mb-2 text-blue-600">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13 7H21M13 17H21M13 12H21M6 7V17M6 7L3 10M6 7L9 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700">Gaining Efficiency</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Industry Focus Column */}
                    <div className="w-1/3 pl-8 border-l border-gray-200">
                      <div className="flex items-center mb-4">
                        <h3 className="font-bold text-lg">Industry Focus</h3>
                        <div className="ml-4 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        <li><Link href="/industry-manufacturing" className="block text-gray-700 hover:text-blue-600">Industry Manufacturing</Link></li>
                        <li><Link href="/transportation-logistics" className="block text-gray-700 hover:text-blue-600">Transportation Logistics</Link></li>
                        <li><Link href="/healthcare" className="block text-gray-700 hover:text-blue-600">Healthcare</Link></li>
                        <li><Link href="/banks-insurance" className="block text-gray-700 hover:text-blue-600">Banks & Insurance</Link></li>
                        <li><Link href="/consulting-providers" className="block text-gray-700 hover:text-blue-600">Consulting Providers</Link></li>
                        <li><Link href="/non-profit" className="block text-gray-700 hover:text-blue-600">Non Profit</Link></li>
                        <li><Link href="/industry-focus" className="block text-blue-600 hover:text-blue-700 mt-3 text-sm">View all</Link></li>
                      </ul>
                    </div>
                  </div>
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
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
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
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
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
              className="px-5 py-2.5 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-200"
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
                     <Link href="/it-service" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">IT service</Link>
                     <Link href="/app-development" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">App Development</Link>
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
                  <div className="mt-2 ml-4 space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Services</h4>
                      <div className="space-y-2 ml-2">
                        <Link href="/managed-services" className="block text-gray-600 hover:text-blue-600">Managed Services</Link>
                        <Link href="/it-consulting" className="block text-gray-600 hover:text-blue-600">IT Consulting & Advisory</Link>
                        <Link href="/cyber-security" className="block text-gray-600 hover:text-blue-600">Cyber Security</Link>
                        <Link href="/web-development" className="block text-gray-600 hover:text-blue-600">Web Development</Link>
                        <Link href="/mobile-development" className="block text-gray-600 hover:text-blue-600">Mobile Development</Link>
                        <Link href="/cloud-services" className="block text-gray-600 hover:text-blue-600">Cloud Services</Link>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Business Challenges</h4>
                      <div className="space-y-2 ml-2">
                        <Link href="/digital-transformation" className="block text-gray-600 hover:text-blue-600">Digital Transformation</Link>
                        <Link href="/security" className="block text-gray-600 hover:text-blue-600">Security</Link>
                        <Link href="/automation" className="block text-gray-600 hover:text-blue-600">Automation</Link>
                        <Link href="/gaining-efficiency" className="block text-gray-600 hover:text-blue-600">Gaining Efficiency</Link>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Industry Focus</h4>
                      <div className="space-y-2 ml-2">
                        <Link href="/industry-manufacturing" className="block text-gray-600 hover:text-blue-600">Industry Manufacturing</Link>
                        <Link href="/transportation-logistics" className="block text-gray-600 hover:text-blue-600">Transportation Logistics</Link>
                        <Link href="/healthcare" className="block text-gray-600 hover:text-blue-600">Healthcare</Link>
                        <Link href="/banks-insurance" className="block text-gray-600 hover:text-blue-600">Banks & Insurance</Link>
                        <Link href="/consulting-providers" className="block text-gray-600 hover:text-blue-600">Consulting Providers</Link>
                        <Link href="/non-profit" className="block text-gray-600 hover:text-blue-600">Non Profit</Link>
                      </div>
                    </div>
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
                  className="block w-full text-center px-5 py-2.5 mt-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
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