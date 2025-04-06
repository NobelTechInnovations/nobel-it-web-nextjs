// Uncomment if using Image component from Next.js
// import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Nobel Tech Innovation
            </h1>
            <p className="max-w-[700px] text-white text-lg md:text-xl">
              Transforming ideas into innovative technological solutions
            </p>
            <div className="space-x-4">
              <button className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                Our Services
              </button>
              <button className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Expertise
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how we can help transform your business
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Web Development",
                description: "Build responsive and user-friendly websites with cutting-edge technologies",
                icon: "🌐",
              },
              {
                title: "Mobile Applications",
                description: "Create powerful mobile experiences for iOS and Android platforms",
                icon: "📱",
              },
              {
                title: "AI Solutions",
                description: "Implement artificial intelligence to automate and optimize processes",
                icon: "🤖",
              },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Nobel Tech
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed">
                We are a team of passionate technologists dedicated to creating innovative solutions that drive business growth and digital transformation.
              </p>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed">
                With expertise in web development, mobile applications, and AI solutions, we're committed to delivering high-quality products that exceed expectations.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full h-[300px] bg-gray-200 rounded-lg">
                {/* Placeholder for an image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xl">
                  Company Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Ready to Innovate?
            </h2>
            <p className="max-w-[700px] text-white md:text-xl">
              Let's discuss how Nobel Tech Innovation can transform your ideas into reality.
            </p>
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Nobel Tech Innovation</h3>
              <p className="text-gray-400">Transforming ideas into innovative technological solutions</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@nobeltechinnovation.com</li>
                <li>+1 (123) 456-7890</li>
                <li>123 Innovation Street, Tech City</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400">© 2024 Nobel Tech Innovation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
