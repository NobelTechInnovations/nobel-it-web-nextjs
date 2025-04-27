import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import InfiniteCarousel from '../components/InfiniteCarousel';



export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="container mx-auto px-2">
        <div className="relative py-20 md:py-20 overflow-hidden bg-white border-b border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-[#212529]">
                Nobel Tech Innovations: Empowering Your Digital Transformation
              </h1>
              <p className=" text-lg text-gray-600">
                Welcome to Nobel Tech Innovations, your trusted partner for comprehensive IT solutions and business management services. We specialize in delivering cutting-edge technology solutions tailored to meet the unique needs of businesses in the Indian market. Our commitment to innovation, quality, and customer satisfaction sets us apart as a leading IT service provider.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <a href="#contact" className="rounded px-3 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                  Schedule a Free Consultation
                </a>
                <a href="#services" className="rounded px-3 py-2 bg-blue-100 text-blue-800 font-medium hover:bg-gray-200 transition-colors">
                  Services
                </a>
              </div>
            </div>
            <div className="relative lg:flex justify-end h-[500px] order-1 lg:order-2">
              {/* Using Next.js Image component with proper dimensions */}
              <Image
                src="https://ik.imagekit.io/nobeltech/2149241221_0hdyQW3L5.jpg?updatedAt=1745652428377"
                alt="Office environment"
                className="rounded-lg object-cover shadow-lg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* Google clutch */}
      <section  className="container mx-auto px-4">
        <div className="py-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center">
                <span className="text-sm text-gray-600">COMING SOON ON</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-lg font-bold mr-2">Clutch</span>
                <div className="flex">
                  <span className="text-xs text-gray-600">SEEKING REVIEWS</span>
                </div>
              </div>
              <div className="flex mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-yellow-400"
                  >
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="text-3xl font-bold text-gray-900">3 <span className="text-sm text-gray-700 mt-1">Months</span>
              </div>
              <div className="text-sm text-gray-600">In Business (Since 2024)</div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="text-3xl font-bold text-gray-900">90<span className="text-2xl">%</span></div>
              <div className="text-sm text-gray-600">Client Satisfaction Goal</div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="text-3xl font-bold text-gray-900">5 <span className="text-sm text-gray-700 mt-1">Projects</span></div>
              <div className="text-sm text-gray-600">Successfully Launched</div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="text-3xl font-bold text-gray-900">3 <span className="text-sm text-gray-700 mt-1">Mins</span></div>
              <div className="text-sm text-gray-600">Average Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Our Journey</span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
                  Our Story
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Nobel Tech Innovation emerged in early 2024 with a bold vision: to revolutionize how growing businesses access and implement technology solutions.At Nobel Tech Innovations, we are driven by a passion for technology and a dedication to helping businesses thrive in the digital age.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our team of experienced professionals brings a wealth of knowledge and expertise in various IT domains, ensuring that we provide the best possible solutions to our clients.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Whether you are a startup looking to establish a strong digital presence or an established enterprise seeking to optimize your operations, we are here to support you every step of the way.
                </p>
              </div>

            </div>
            <div className="relative lg:flex justify-end h-[500px] order-1 lg:order-2">
              {/* Using Next.js Image component with proper dimensions */}
              <Image
                src="https://ik.imagekit.io/nobeltech/2149241210_bzR7QmM3W.jpg?updatedAt=1745655943166"
                alt="Office environment"
                className="rounded-lg object-cover shadow-lg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="w-full py-16 md:py-24 lg:py-32 relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ik.imagekit.io/nobeltech/17380_1e7noDDT55.jpg?updatedAt=1745658374019"
            alt="Services background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <span className="text-white font-semibold text-sm tracking-wider uppercase">Our Services</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Our Services
            </h2>
            <p className="max-w-[700px] text-white text-lg leading-relaxed">
              Our comprehensive suite of IT services is designed to address a wide range of business needs. Here are some of the key services we offer:
            </p>
          </div>
          <div className="grid grid-cols-12 gap-8 mt-8">
            {[
              {
                title: "Web Software Development",
                description: "We specialize in creating robust and scalable web applications that meet your business requirements. Our team of skilled developers works closely with you to understand your needs and deliver high-quality, user-friendly web solutions. Whether you need a custom web application or a complete e-commerce platform, we have the expertise to bring your ideas to life.",
                icon: <Icon icon="emojione-v1:laptop-computer" width="64" height="64" />,
                color: "bg-purple-50 text-purple-600",
              },
              {
                title: "Mobile Software Development",
                description: "In today's mobile-first world, having a strong mobile presence is crucial. Our mobile software development services include both native and cross-platform app development. We use the latest technologies and frameworks to create intuitive, feature-rich mobile applications that provide an exceptional user experience. Whether you need an iOS or Android app, we can help you reach your target audience effectively.",
                icon: <Icon icon="material-icon-theme:android" width="64" height="64" />,
                color: "bg-blue-50 text-blue-600",
              },
              {
                title: "SaaS Software Development",
                description: "Leverage the power of Software as a Service (SaaS) to streamline your business operations and enhance productivity. Our SaaS development services include custom SaaS application development, integration with existing systems, and ongoing maintenance and support. We help you build scalable, secure, and user-friendly SaaS solutions that drive your business forward.",
                icon: <Icon icon="logos:node-sass" width="64" height="64" />,
                color: "bg-green-50 text-green-600",
              },
              {
                title: "WordPress Development",
                description: "Enhance your WordPress website with custom themes and plugins tailored to your specific needs. Our team of WordPress experts can develop custom themes that reflect your brand identity and provide a seamless user experience. We also offer plugin customization services to extend the functionality of your WordPress site, ensuring that it meets all your requirements.",
                icon: <Icon icon="skill-icons:wordpress" width="64" height="64" />,
                color: "bg-green-50 text-green-600",
              },
              {
                title: "Shopify Development",
                description: "Looking to build an online store? Our Shopify development services can help you create a powerful, user-friendly e-commerce platform that drives sales and customer engagement. We specialize in custom Shopify store development, theme customization, and integration with third-party tools and services. Whether you are starting from scratch or looking to revamp your existing store, we can help you achieve your e-commerce goals.",
                icon: <Icon icon="logos:shopify" width="64" height="64" />,
                color: "bg-green-50 text-green-600",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 glass_effect lg:col-span-4 group relative overflow-hidden rounded-2xl p-8 hover:shadow-xl transition-all duration-300 bg-white border border-gray-100"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <div className="block mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Our Technology Section */}
      <section id="technologies" className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
              Technologies We Work With
            </h2>
            <p className="max-w-[700px] text-gray-600 text-lg leading-relaxed">
              At Nobel Tech Innovations, we stay at the forefront of technological advancements to ensure that we provide the best possible solutions to our clients. Here are some of the key technologies we work with:
            </p>
          </div>
          <InfiniteCarousel />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="whychoose" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              There are several reasons why Nobel Tech Innovations is the right choice for your IT needs:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Expertise & Experience",
                description: "Our team brings years of industry experience and technical expertise to every project.",
                icon: <Icon icon="mdi:account-tie" width="64" height="64" className="text-blue-600" />,
              },
              {
                title: "Innovative Solutions",
                description: "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive edge.",
                icon: <Icon icon="mdi:lightbulb-on" width="64" height="64" className="text-blue-600" />,
              },
              {
                title: "Customer-Centric Approach",
                description: "Your success is our priority. We work closely with you to understand and meet your specific needs.",
                icon: <Icon icon="mdi:account-group" width="64" height="64" className="text-blue-600" />,
              },
              {
                title: "Quality Assurance",
                description: "We maintain high standards of quality in every aspect of our service delivery.",
                icon: <Icon icon="mdi:check-circle" width="64" height="64" className="text-blue-600" />,
              },
              {
                title: "Cost-Effective",
                description: "We offer competitive pricing without compromising on quality or service standards.",
                icon: <Icon icon="mdi:currency-usd" width="64" height="64" className="text-blue-600" />,
              },
              {
                title: "24/7 Support",
                description: "Our dedicated support team is available around the clock to assist you with any issues.",
                icon: <Icon icon="mdi:clock-time-four" width="64" height="64" className="text-blue-600" />,
              },
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-6 transition-all duration-300">
                <div className="relative space-y-4">
                  <div className="flex justify-center">
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-3">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Our Leadership</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
              Why Choose Us?
            </h2>
            <p className="max-w-[700px] text-gray-600 text-lg leading-relaxed">
              There are several reasons why Nobel Tech Innovations is the right choice for your IT needs:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[
              {
                name: "Kartik Maandothiya",
                position: "Founder & CEO",
                bio: "Former tech consultant with a passion for helping small businesses succeed",
                image: "/team/kartik.jpg"
              },
              {
                name: "Ajit Singh",
                position: "Lead Developer",
                bio: "Full-stack developer with experience in modern web frameworks",
                image: "/team/ajit.jpg"
              },
              {
                name: "Rahul Kumawat",
                position: "Design Lead",
                bio: "UI/UX designer focused on creating intuitive, user-friendly experiences",
                image: "/team/rahul.jpg"
              },
            ].map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                    <div className="w-full h-full flex items-center justify-center text-blue-600/20">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium mt-1">{member.position}</p>
                    <p className="text-gray-600 mt-3">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="contact" className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Grow Your Business With Us</h2>
              <p className="text-gray-100 text-lg mb-8">
                Ready to take your business to the next level? Get in touch with us today to discuss your IT needs and discover how Nobel Tech Innovations can help you achieve your goals. You can reach us through our contact form, email, or phone. We look forward to hearing from you!
              </p>

            </div>
            <div className="lg:col-span-3">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Request a Free Consultation</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-3 bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <select className="w-full p-3 bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                      <option value="" className="bg-blue-600">Select Service</option>
                      <option value="it-consulting" className="bg-blue-600">IT Consulting</option>
                      <option value="web-development" className="bg-blue-600">Web Development</option>
                      <option value="cloud-services" className="bg-blue-600">Cloud Services</option>
                      <option value="cyber-security" className="bg-blue-600">Cyber Security</option>
                    </select>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full px-3 py-2 bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
