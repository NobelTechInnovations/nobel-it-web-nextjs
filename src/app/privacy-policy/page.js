import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Privacy Policy
            </h1>
            <p className="max-w-[700px] text-white text-lg md:text-xl">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-bold text-2xl">1. Introduction</h2>
            <p className="font-medium text-lg mb-6">
              At Nobel Tech Innovation, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className='font-medium text-lg mb-6'>
              Please read this Privacy Policy carefully. By accessing or using our website or services, you acknowledge 
              that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
            </p>

            <h2 className="font-bold text-2xl">2. Information We Collect</h2>
            <p className='font-medium text-lg mb-2'>
              We may collect several types of information from and about users of our website and services, including:
            </p>
            <ul className='mb-6'>
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and other contact information.</li>
              <li><strong>Usage Information:</strong> Information about how you use our website and services.</li>
              <li><strong>Device Information:</strong> Information about your device, including IP address, browser type, and operating system.</li>
              <li><strong>Cookies and Similar Technologies:</strong> We use cookies and similar technologies to collect information about your browsing activities.</li>
            </ul>

            <h2 className="font-bold text-2xl">3. How We Use Your Information</h2>
            <p className='font-medium text-lg mb-2'>
              We may use the information we collect for various purposes, including to:
            </p>
            <ul className='mb-6'>
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you marketing and promotional communications (with your consent)</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            </ul>

            <h2 className="font-bold text-2xl">4. Disclosure of Your Information</h2>
            <p className='font-medium text-lg mb-2'>
              We may disclose your personal information in the following circumstances:
            </p>
            <ul className='mb-6'>
              <li><strong>To Service Providers:</strong> We may share your information with third-party vendors, service providers, and other contractors who perform services on our behalf.</li>
              <li><strong>For Legal Purposes:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              <li><strong>In Connection with a Business Transfer:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
            </ul>

            <h2 className="font-bold text-2xl">5. Data Security</h2>
            <p className='font-medium text-lg mb-6'>
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized or unlawful processing, accidental loss, destruction, or damage. However, please note that 
              no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="font-bold text-2xl">6. Your Rights</h2>
            <p className='font-medium text-lg mb-2'>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className='mb-6'>
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
            </ul>

            <h2 className="font-bold text-2xl">7. Children's Privacy</h2>
            <p className='font-medium text-lg mb-6'>
              Our services are not intended for individuals under the age of 16. We do not knowingly collect personal 
              information from children. If you are a parent or guardian and believe that your child has provided us 
              with personal information, please contact us.
            </p>

            <h2 className="font-bold text-2xl">8. Changes to This Privacy Policy</h2>
            <p className='font-medium text-lg mb-6'>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="font-bold text-2xl">9. Contact Us</h2>
            <p className="font-medium text-lg mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className='font-medium text-lg'>
              Email: <a href="mailto:nobeltechinnovations@gmail.com" className="text-blue-600 hover:underline">nobeltechinnovations@gmail.com</a><br />
              Phone: <a href="tel:+919828051996" className="text-blue-600 hover:underline">+91 98280 51996</a>
            </p>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Have Questions About Your Privacy?
            </h2>
            <p className="max-w-[700px] text-white md:text-xl">
              If you have any questions about our privacy policy or how we handle your data, please don't hesitate to contact us.
            </p>
            <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 