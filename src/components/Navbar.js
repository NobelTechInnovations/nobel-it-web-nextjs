"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // Use useEffect to handle client-side operations after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -60; // Adjust this value based on your navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 border-b border-gray-200">
        <div className="flex justify-between items-center h-15">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-10">
              <Image src="/logo_nobel.png" alt="Nobel Tech Innovations" fill className="object-contain object-left" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group flex items-center space-x-5">
              <button onClick={() => scrollToSection('home')} className="flex items-center text-gray-700 hover:text-blue-600 font-semibold">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="flex items-center text-gray-700 hover:text-blue-600 font-semibold">
                About
              </button>
              <button onClick={() => scrollToSection('products')} className="flex items-center text-gray-700 hover:text-blue-600 font-semibold">
                Products
              </button>
              <button onClick={() => scrollToSection('services')} className="flex items-center text-gray-700 hover:text-blue-600 font-semibold">
                Services   
              </button>
              <button onClick={() => scrollToSection('technologies')} className="flex items-center text-gray-700 hover:text-blue-600 font-semibold">
                Tech Stack
              </button>
              <button onClick={() => scrollToSection('whychoose')} className="flex items-center text-gray-700 hover:text-blue-600 font-semibold">
                Why us
              </button>
              <button onClick={() => scrollToSection('contact')} className="flex items-center px-3 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors rounded">
                Schedule A Meeting
              </button>
            </div>
          </nav>

          {/* Client Support (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex flex-col items-end">
              <span className="text-sm text-gray-600">Client Support</span>
              <Link href="tel:+919828051996" className="font-medium text-gray-600">+91 98280 51996</Link>
            </div>
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

      {/* Mobile Navigation - Only render on client-side */}
      {isClient && mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 max-w-6xl">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-blue-600 font-medium py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-blue-600 font-medium py-2">
                About
              </button>
              <button onClick={() => scrollToSection('products')} className="text-left text-gray-700 hover:text-blue-600 font-medium py-2">
                Products
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-blue-600 font-medium py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('technologies')} className="text-left text-gray-700 hover:text-blue-600 font-medium py-2">
                Tech Stack
              </button>
              <button onClick={() => scrollToSection('whychoose')} className="text-left text-gray-700 hover:text-blue-600 font-medium py-2">
                Why us
              </button>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-600">Client Support</span>
                  <Link href="tel:+919828051996" className="font-medium text-gray-600">+91 98280 51996</Link>
                </div>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-center px-5 py-2.5 mt-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors rounded"
                >
                  Schedule A Meeting
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 