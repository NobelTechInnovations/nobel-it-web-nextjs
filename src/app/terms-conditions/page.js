import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Terms & Conditions
            </h1>
            <p className="max-w-[700px] text-white text-lg md:text-xl">
              Please read these terms and conditions carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-bold text-2xl">1. Introduction</h2>
            <p className="font-meduium text-lg mb-6">
              Welcome to Nobel Tech Innovations (&quot;Nobel Tech,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of our website, including any content, functionality, and services offered on or through <a href="http://www.nobeltechinnovations.com" className="text-blue-600 hover:underline">www.nobeltechinnovations.com</a> (the &quot;Site&quot;).
            </p>

            <h2 className="font-bold text-2xl">2. Acceptance of Terms</h2>
            <p className="font-meduium text-lg mb-6">
              By accessing or using the Site, you agree to these Terms. If you do not agree to all the terms and conditions, you should not use the Site.
            </p>

            <h2 className="font-bold text-2xl">3. Changes to Terms</h2>
            <p className="font-meduium text-lg mb-6">
              We may revise and update these Terms from time to time. All changes are effective immediately when we post them and apply to all access to and use of the Site thereafter.
            </p>

            <h2 className="font-bold text-2xl">4. User Conduct</h2>
            <p className="font-meduium text-lg mb-6">
              You must not misuse our Site or attempt to gain unauthorized access to our Site, the server on which our Site is stored, or any server, computer, or database connected to our Site.
            </p>

            <h2 className="font-bold text-2xl">5. Intellectual Property</h2>
            <p className="font-meduium text-lg mb-6">
              All content on the Site, including text, graphics, logos, icons, images, software, and other materials, is the property of Nobel Tech or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>

            <h2 className="font-bold text-2xl">6. Limitation of Liability</h2>
            <p className="font-meduium text-lg mb-6">
              Nobel Tech will not be liable for any damages of any kind arising from the use of the Site, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
            </p>

            <h2 className="font-bold text-2xl">7. Termination</h2>
            <p className="font-meduium text-lg mb-6">
              We may suspend or terminate your access to the Site with or without cause at any time and effective immediately.
            </p>

            <h2 className="font-bold text-2xl">8. Governing Law</h2>
            <p className="font-meduium text-lg mb-6">
              These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law provisions.
            </p>

            <h2 className="font-bold text-2xl">9. Contact Information</h2>
            <p className="font-meduium text-lg mb-6">
              For any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: <a href="mailto:nobeltechinnovations@gmail.com" className="text-blue-600 hover:underline">nobeltechinnovations@gmail.com</a><br />
              Phone: <a href="tel:+919828051996" className="text-blue-600 hover:underline">+91 982 805 1996</a>
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
              Have Questions?
            </h2>
            <p className="max-w-[700px] text-white md:text-xl">
              If you have any questions about our terms and conditions, please don&apos;t hesitate to contact us.
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