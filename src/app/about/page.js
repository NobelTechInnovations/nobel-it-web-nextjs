import Link from 'next/link';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* About Hero */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#6161FF]">
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
                Nobel Tech Innovation was founded in early 2024 with a vision to bring fresh, innovative technology solutions to growing businesses.
              </p>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed">
                As a new startup, we combine our founder&apos;s industry expertise with cutting-edge technologies to deliver solutions that are both affordable and effective for businesses at any stage.
              </p>
              <p className="mt-4 text-gray-500 md:text-xl/relaxed">
                Though we&apos;re just beginning our journey, we&apos;re driven by a passion for technology and a commitment to helping other startups and small businesses thrive in the digital landscape.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full h-[400px] bg-gray-200 rounded-lg">
                {/* Placeholder for an image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xl">
                  Our Startup Journey Image
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
              To democratize access to quality technology solutions, helping startups and small businesses compete and succeed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Accessibility",
                description: "We make enterprise-level technology accessible to businesses of all sizes and budgets",
                icon: "🚪",
              },
              {
                title: "Agility",
                description: "As a startup ourselves, we move quickly and adapt to deliver what our clients need",
                icon: "🏃",
              },
              {
                title: "Growth",
                description: "We grow alongside our clients, learning and evolving with every project",
                icon: "🌱",
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
              The passionate founders behind Nobel Tech Innovation
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              {
                name: "Raj Sharma",
                position: "Founder & CEO",
                bio: "Former tech consultant with a passion for helping small businesses succeed",
              },
              {
                name: "Priya Patel",
                position: "Lead Developer",
                bio: "Full-stack developer with experience in modern web frameworks",
              },
              {
                name: "Amit Kumar",
                position: "Design Lead",
                bio: "UI/UX designer focused on creating intuitive, user-friendly experiences",
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#6161FF]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              Grow With Us
            </h2>
            <p className="max-w-[700px] text-white md:text-xl">
              As we build our startup, we&apos;re looking to partner with businesses who share our vision for innovation and growth.
            </p>
            <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
              Start Your Journey Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 