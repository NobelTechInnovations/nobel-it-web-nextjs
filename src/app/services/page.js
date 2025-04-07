import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col mt-4">
      {/* Hero Section */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="relative py-5 md:py-5 overflow-hidden bg-white border-b border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-[#212529]">
                Comprehensive IT services for businesses
              </h1>
             
            </div>
            
          </div>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="container mx-auto px-4 max-w-6xl py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700">
              As a startup ourselves, we understand what it takes to build a business from the ground up. We offer tailored IT services that meet the unique needs of growing businesses without breaking the bank.
            </p>
          </div>
          <div>
            <p className="text-lg text-gray-700">
              Founded in 2024, we bring fresh perspectives and modern approaches to technology solutions. We&apos;re small enough to care deeply about every client, but skilled enough to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

     

      {/* Simplifying IT Section */}
      <section className="text-white">
        <div className="mx-auto py-12 px-16 bg-[#212529] max-w-6xl">
          <div className="container">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div>
                <div className="uppercase text-sm font-medium mb-4">OUR SERVICES</div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Startup-friendly<br />technology solutions.
                </h2>
              </div>
              <div className="hidden md:block">
                {/* Triangle dots pattern */}
                <div className="w-64 h-64 relative">
                  <div className="absolute inset-0">
                    {Array.from({ length: 100 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="w-2 h-2 bg-white rounded-full opacity-30 absolute"
                        style={{ 
                          top: `${Math.floor(i / 10) * 20}px`, 
                          left: `${(i % 10) * 20}px`,
                          opacity: i % 20 === 0 ? 0 : (i % 10 === 0 ? 0.2 : 0.4)
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Managed Services Card */}
            <div className="bg-white p-8 rounded-sm">
              <div className="w-12 h-12 mb-6 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Managed Services</h3>
              <p className="text-gray-600 mb-6">
                Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.
              </p>
             
            </div>

            {/* IT Consulting Card */}
            <div className="bg-white p-8 rounded-sm">
              <div className="w-12 h-12 mb-6 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">IT Consulting & Advisory</h3>
              <p className="text-gray-600 mb-6">
                The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth.
              </p>
              
            </div>

            {/* Cyber Security Card */}
            <div className="bg-white p-8 rounded-sm">
              <div className="w-12 h-12 mb-6 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cyber Security</h3>
              <p className="text-gray-600 mb-6">
                Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.
              </p>
             
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Web Development Card */}
            <div className="bg-white p-8 rounded-sm">
              <div className="w-12 h-12 mb-6 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6">
                Our web development services can help you establish an impactful online presence and reach your target audience effectively.
              </p>
             
            </div>

            {/* Mobile Development Card */}
            <div className="bg-white p-8 rounded-sm">
              <div className="w-12 h-12 mb-6 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Mobile Development</h3>
              <p className="text-gray-600 mb-6">
                We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms.
              </p>
             
            </div>

            {/* Cloud Services Card */}
            <div className="bg-white p-8 rounded-sm">
              <div className="w-12 h-12 mb-6 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Services</h3>
              <p className="text-gray-600 mb-6">
                With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.
              </p>
             
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Software Development Card */}
            <div className="bg-white p-8 rounded-sm">
              <div className="w-12 h-12 mb-6 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Software Development</h3>
              <p className="text-gray-600 mb-6">
                From a custom CRM to Transportation Management System, we&apos;ve built it all.
              </p>
             
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#212529]">Why choose services from Nobel Tech Innovation?</h2>
              <p className="text-lg text-gray-700 mb-8">
                As a new startup founded in 2024, we bring fresh energy and innovative approaches to the table. We understand the challenges of growing businesses because we&apos;re experiencing them too. Our services are flexible, affordable, and designed to scale with your needs—whether you&apos;re just starting out or looking to take your business to the next level.
              </p>
              <Link 
                href="/contact" 
                className="px-4 py-2 bg-blue-600 text-white font-medium inline-block hover:bg-blue-700 transition-colors"
              >
                Get in touch
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Grow Together</h2>
              <p className="text-gray-100 text-lg mb-8">
                As a new startup ourselves, we understand the journey you&apos;re on. Partner with Nobel Tech Innovation for technology solutions that help you build, scale, and succeed.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/contact" 
                  className="px-3 py-2 bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors"
                >
                  Schedule a Consultation
                </Link>
                <Link 
                  href="/about" 
                  className="px-3 py-2 bg-transparent border border-white text-white font-medium hover:bg-white/10 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Request a Free Consultation</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 