export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* About Hero */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              About Nobel Tech Innovation
            </h1>
            <p className="max-w-[700px] text-white text-lg md:text-xl">
              Our story, mission, and the talented team behind our innovative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Story
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed">
                Nobel Tech Innovation was founded in 2020 with a vision to transform how businesses leverage technology to grow and succeed.
              </p>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed">
                What started as a small team of passionate developers has grown into a comprehensive tech consultancy, helping businesses of all sizes innovate and thrive in the digital landscape.
              </p>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed">
                Our journey has been marked by continuous learning, adaptation, and a commitment to excellence in everything we do.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full h-[400px] bg-gray-200 rounded-lg">
                {/* Placeholder for an image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xl">
                  Company History Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Mission
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              To empower businesses through innovative technology solutions that drive growth and success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Innovation",
                description: "We constantly explore new technologies and approaches to solve complex problems",
                icon: "💡",
              },
              {
                title: "Excellence",
                description: "We strive for excellence in every project, delivering high-quality solutions",
                icon: "🏆",
              },
              {
                title: "Partnership",
                description: "We form true partnerships with our clients, understanding their needs deeply",
                icon: "🤝",
              },
            ].map((value, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                <div className="text-4xl">{value.icon}</div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet Our Team
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              The talented professionals behind Nobel Tech Innovation
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {[
              {
                name: "John Doe",
                position: "Founder & CEO",
                bio: "15+ years of experience in tech leadership",
              },
              {
                name: "Jane Smith",
                position: "CTO",
                bio: "Expert in AI and cloud architecture",
              },
              {
                name: "Michael Johnson",
                position: "Lead Developer",
                bio: "Full-stack developer specializing in web applications",
              },
              {
                name: "Sarah Williams",
                position: "Design Director",
                bio: "Award-winning UX/UI designer",
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-gray-400">
                  Photo
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.position}</p>
                <p className="text-gray-500 text-center">{member.bio}</p>
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
              Join Our Journey
            </h2>
            <p className="max-w-[700px] text-white md:text-xl">
              Partner with Nobel Tech Innovation and transform your business with innovative solutions.
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
                <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
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