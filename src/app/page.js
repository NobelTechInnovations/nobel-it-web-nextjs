import Link from 'next/link';
import Image from 'next/image'
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-2 max-w-6xl">
        <div className="relative py-20 md:py-20 overflow-hidden bg-white border-b border-gray-200 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-[#212529]">
                We manage your IT, so you can manage your business.
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Take charge of your business continuity<br />with innovative IT solutions
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Link href="/contact" className="px-3 py-2 bg-blue-600 text-white font-medium  hover:bg-blue-700 transition-colors">
                  Schedule a Free Consultation
                </Link>
                <Link href="/services" className="px-3 py-2 bg-blue-100 text-blue-800 font-medium  hover:bg-gray-200 transition-colors">
                  Services
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:flex justify-end">
              {/* Using actual office image as in reference */}
              <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/GettyImages-618762080-1.jpg" alt="Office environment" className="w-full h-auto rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=" container mx-auto px-4 max-w-6xl">
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center">
                
                <span className="text-sm text-gray-600">REVIEWED ON</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-lg font-bold mr-2">Clutch</span>
                <div className="flex">
                  <span className="text-xs text-gray-600">31 REVIEWS</span>
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
              <div className="text-3xl font-bold text-gray-900">20 <span className="text-sm text-gray-700 mt-1">Years</span>
              </div>
              
              <div className="text-sm text-gray-600">Proven Track Record</div>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <div className="text-3xl font-bold text-gray-900">98<span className="text-2xl">%</span></div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <div className="text-3xl font-bold text-gray-900">1,500 <span className="text-sm text-gray-700 mt-1">Projects</span></div>
              <div className="text-sm text-gray-600">We Have Completed</div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="text-3xl font-bold text-gray-900">3 <span className="text-sm text-gray-700 mt-1">Mins</span></div>
              <div className="text-sm text-gray-600">Average Answer Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplifying IT Section */}
      <section className="text-white">
        <div className="mx-auto py-12 px-16  bg-[#212529] max-w-6xl">
          <div className="container">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div>
                <div className="uppercase text-sm font-medium mb-4">WHAT WE DO</div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Simplifying IT<br />for a complex world.
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

      {/* Features/Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {/* Feature 1 - Cost-effectiveness */}
            <div>
              <div className="w-16 h-16 mb-6 relative">
                <Image src="https://cedarapp.b-cdn.net/media/Cost-effectiveness.svg" alt="Cost-effectiveness" width={60} height={60} />
              </div>
              <h3 className="text-xl font-bold mb-4">Cost-effectiveness</h3>
              <p className="text-gray-600">
                We offer affordable IT solutions that help you reduce costs and improve your bottom line.
              </p>
            </div>

            {/* Feature 2 - Innovative Technology */}
            <div>
              <div className="w-16 h-16 mb-6 relative">
                <Image src="https://cedarapp.b-cdn.net/media/Innovative%20(1).svg" alt="Cost-effectiveness" width={60} height={60} />
              </div>

              <h3 className="text-xl font-bold mb-4">Innovative Technology</h3>
              <p className="text-gray-600">
                We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.
              </p>
            </div>

            {/* Feature 3 - Industry Expertise */}
            <div>
              <div className="w-16 h-16 mb-6 relative">
                <div className="w-16 h-16 mb-6 relative">
                  <Image src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Industry.svg" alt="Cost-effectiveness" width={60} height={60} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Industry Expertise</h3>
              <p className="text-gray-600">
                We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.
              </p>
            </div>

            {/* Feature 4 - Scalability */}
            <div>
              <div className="w-16 h-16 mb-6 relative">
              <div className="w-16 h-16 mb-6 relative">
                  <Image src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/Scalability.svg" alt="Cost-effectiveness" width={60} height={60} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Scalability</h3>
              <p className="text-gray-600">
                Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-100 text-lg mb-8">
                Partner with Nobel Tech Innovation for innovative technology solutions that drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/contact" 
                  className="px-3 py-2 bg-white text-blue-600 font-medium  hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="/services" 
                  className="px-3 py-2 bg-transparent border border-white text-white font-medium  hover:bg-white/10 transition-colors"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Request a Free Consultation</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-3  bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3  bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <select className="w-full p-3  bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
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
                      className="w-full px-3 py-2 bg-white text-blue-600 font-medium  hover:bg-gray-100 transition-colors"
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
