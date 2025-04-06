import Link from 'next/link';

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Services Hero */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Our Services
            </h1>
            <p className="max-w-[700px] text-white text-lg md:text-xl">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Web Development",
                description: "Custom websites and web applications built with cutting-edge technologies to deliver exceptional user experiences.",
                features: [
                  "Responsive design for all devices",
                  "E-commerce solutions",
                  "Content management systems",
                  "Progressive web applications",
                  "Website maintenance and support"
                ],
                icon: "🌐"
              },
              {
                title: "Mobile Applications",
                description: "Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.",
                features: [
                  "Native iOS development",
                  "Native Android development",
                  "Cross-platform solutions",
                  "App Store optimization",
                  "Ongoing maintenance and updates"
                ],
                icon: "📱"
              },
              {
                title: "UI/UX Design",
                description: "User-centered design services that create intuitive, visually appealing interfaces that delight users.",
                features: [
                  "User research and testing",
                  "Wireframing and prototyping",
                  "Visual design",
                  "Interaction design",
                  "Design systems"
                ],
                icon: "🎨"
              },
              {
                title: "AI Solutions",
                description: "Harness the power of artificial intelligence to automate processes, gain insights, and create new capabilities.",
                features: [
                  "Machine learning integration",
                  "Natural language processing",
                  "Computer vision",
                  "Predictive analytics",
                  "AI-powered chatbots"
                ],
                icon: "🤖"
              },
              {
                title: "Cloud Services",
                description: "Scalable, secure, and reliable cloud infrastructure and services for your business applications.",
                features: [
                  "Cloud migration",
                  "Infrastructure as code",
                  "Serverless architecture",
                  "DevOps automation",
                  "24/7 monitoring and support"
                ],
                icon: "☁️"
              },
              {
                title: "Digital Transformation",
                description: "End-to-end digital transformation services to modernize your business processes and technology stack.",
                features: [
                  "Digital strategy consulting",
                  "Legacy system modernization",
                  "Process automation",
                  "Data integration",
                  "Change management"
                ],
                icon: "🔄"
              }
            ].map((service, index) => (
              <div key={index} className="flex flex-col space-y-4 p-6 border rounded-lg shadow-sm">
                <div className="text-4xl mb-2">{service.icon}</div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
                <ul className="space-y-2 mt-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 mr-2 text-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Process
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              How we deliver exceptional results for our clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {[
              {
                step: "Discovery",
                description: "We begin by understanding your business needs, goals, and challenges through in-depth consultation.",
                icon: "🔍"
              },
              {
                step: "Planning",
                description: "Our team creates a detailed roadmap with timelines, milestones, and deliverables for your project.",
                icon: "📝"
              },
              {
                step: "Development",
                description: "We build your solution using agile methodologies, with regular updates and feedback sessions.",
                icon: "⚙️"
              },
              {
                step: "Deployment",
                description: "Once approved, we launch your solution with comprehensive testing and quality assurance.",
                icon: "🚀"
              },
            ].map((process, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-2">{process.icon}</div>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mt-2">{process.step}</h3>
                <p className="text-gray-500 text-center">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Client Success Stories
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              See what our clients have to say about working with Nobel Tech Innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {[
              {
                quote: "Nobel Tech Innovation transformed our outdated systems into a streamlined digital solution that increased our efficiency by 40%.",
                name: "Alex Johnson",
                company: "Global Enterprises Inc.",
                image: "testimonial1"
              },
              {
                quote: "Their mobile app development expertise helped us reach new customers and increase our revenue by 25% within the first six months.",
                name: "Maria Garcia",
                company: "Retail Solutions Co.",
                image: "testimonial2"
              },
            ].map((testimonial, index) => (
              <div key={index} className="flex flex-col p-6 bg-white border rounded-lg shadow-sm">
                <div className="flex-1">
                  <svg className="h-8 w-8 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-lg text-gray-600 mb-6">{testimonial.quote}</p>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center text-gray-400">
                    Photo
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
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
              Get in touch with our team to discuss how our services can help you achieve your goals.
            </p>
            <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 