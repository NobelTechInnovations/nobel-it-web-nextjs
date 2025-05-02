import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Kit19Page() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Kit19
            </h1>
            <p className="max-w-[700px] text-white text-lg md:text-xl">
              Empower Your Sales, Marketing, Social Media, Communication and Productivity on One Seamless Platform!
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                All-in-One Business Solution
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed">
                Kit19 is your comprehensive business platform that combines sales, marketing, social media management, and team communication in one powerful solution.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon icon="mdi:check-circle" className="text-blue-600 w-6 h-6" />
                  <span className="text-gray-700">Streamlined Sales Management</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon icon="mdi:check-circle" className="text-blue-600 w-6 h-6" />
                  <span className="text-gray-700">Integrated Marketing Tools</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon icon="mdi:check-circle" className="text-blue-600 w-6 h-6" />
                  <span className="text-gray-700">Social Media Automation</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon icon="mdi:check-circle" className="text-blue-600 w-6 h-6" />
                  <span className="text-gray-700">Team Collaboration Features</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://ik.imagekit.io/nobeltech/kit19-dashboard.jpg"
                  alt="Kit19 Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Kit19?
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Experience the power of an integrated business platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Save Time",
                description: "Automate repetitive tasks and streamline your workflow",
                icon: "⏱️",
              },
              {
                title: "Increase Productivity",
                description: "All your tools in one place means less switching between apps",
                icon: "📈",
              },
              {
                title: "Better Collaboration",
                description: "Keep your team connected and working together seamlessly",
                icon: "🤝",
              },
            ].map((value, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm bg-white">
                <div className="text-4xl">{value.icon}</div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-gray-500 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="max-w-[700px] text-white md:text-xl">
              Get started with Kit19 today and experience the power of an integrated business platform.
            </p>
            <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 