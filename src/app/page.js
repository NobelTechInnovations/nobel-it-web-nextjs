"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import InfiniteCarousel from '../components/InfiniteCarousel';
import ContactForm from '../components/ContactForm';


import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="container mx-auto px-2">
        <div className="relative my-[20px] py-1 px-10 md:py-10 overflow-hidden  border border-gray-200 rounded-3xl bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
              Nobel Tech Innovations: Empowering Your {" "}
                <span className="relative inline-block text-[#6161FF]">
                Digital Transformation
                  <motion.svg
                    className="absolute left-0 -bottom-1 w-full h-5"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                      stroke="#FF4500"
                      strokeWidth="24"
                      fill="transparent"
                      strokeDasharray="1000"
                      strokeDashoffset="1000"
                      initial={{ strokeDashoffset: 1000 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  </motion.svg>
                </span>
              </h1>
              
            
              <p className=" text-lg text-gray-600">
                Welcome to Nobel Tech Innovations, your trusted partner for comprehensive IT solutions and business management services. We specialize in delivering cutting-edge technology solutions tailored to meet the unique needs of businesses in the Indian market. Our commitment to innovation, quality, and customer satisfaction sets us apart as a leading IT service provider.
              </p>
              <div className="flex flex-wrap sm:flex-row gap-2 sm:space-y-0 sm:space-x-4 pt-4 items-center space-x-5">
                <a href="#contact" className="rounded px-6 py-2 bg-[#6161FF] text-white font-medium hover:bg-[#5151D5] transition-colors">
                  Schedule a Free Consultation
                </a>
                <a
                  href="#services"
                  className="rounded inline-flex items-center gap-2 px-6 py-2 border border-[#6161FF] text-[#6161FF] font-medium transition-colors hover:bg-[#6161FF] hover:text-white"
                >
                  Services
                </a>
              </div>
            </div>
            <div className="relative lg:flex justify-end h-[500px] order-1 lg:order-2">
              {/* Using Next.js Image component with proper dimensions */}
              <Image
                src="https://static.vecteezy.com/system/resources/previews/036/297/142/non_2x/illustration-of-digital-marketing-in-social-media-platform-free-png.png"
                alt="Office environment"
                className="rounded-lg object-contain"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* Google clutch */}
      <section className="container mx-auto px-4 hidden">
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

      {/* Our Martkeign plans */}
      <section id="marketing" className="w-full py-16 md:py-24 lg:py-32 relative bg-white">
        {/* Background Image with Overlay */}

        <div className="absolute opacity-75 w-100 right-0 top-0 -z-10 blur-2xl">
          <svg viewBox="0 0 200 200" className='up-down' xmlns="http://www.w3.org/2000/svg">
            <path fill="#D0E2FF" d="M44.4,-67.4C57.8,-60.5,69.2,-48.6,77.4,-34.3C85.6,-19.9,90.6,-3.1,89.6,13.8C88.5,30.6,81.5,47.5,69.5,58.7C57.5,69.8,40.6,75.2,25.5,73.6C10.5,71.9,-2.8,63.1,-16.6,58.3C-30.5,53.5,-45,52.5,-53.1,45C-61.2,37.5,-62.8,23.4,-64.7,9.4C-66.7,-4.7,-68.9,-18.6,-63.4,-28.3C-57.9,-38,-44.7,-43.5,-32.8,-51.1C-21,-58.7,-10.5,-68.4,2.5,-72.3C15.5,-76.3,31,-74.3,44.4,-67.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="container px-4 md:px-6 mx-auto z-10">

          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <span className="text-[#6161FF] font-semibold text-sm tracking-wider uppercase">How we works</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
                One Brand.{" "}
                <span className="relative inline-block text-[#6161FF]">
                  Every Platform
                  <motion.svg
                    className="absolute left-0 -bottom-1 w-full h-5"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                      stroke="#FF4500"
                      strokeWidth="24"
                      fill="transparent"
                      strokeDasharray="1000"
                      strokeDashoffset="1000"
                      initial={{ strokeDashoffset: 1000 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  </motion.svg>
                </span>
              </h2>
            <p className="max-w-[700px] md:text-gray-600 text-slate-900 text-lg leading-relaxed">
            <b>Nobel Strategy</b>, our comprehensive suite of IT and marketing solutions is built to empower businesses in the digital era.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-8 mt-8">
            {[
              
              {
                title: "Engage Audiences Through Facebook Marketing",
                description: "Turn Facebook into your brand’s growth engine! With precision ad targeting and scroll-stopping creatives, we make sure your message connects where it matters most. From bold visuals to persuasive storytelling, our campaigns spark engagement, build communities, and convert audiences into loyal customers.",
                icon: <Icon icon="lucide:code-2" width="64" height="64" />,
                img:"/fb-ads.webp",
                color: "bg-purple-50 text-purple-600",
              },
              {
                title: "Build Your Brand Presence on Instagram",
                description: "Elevate your brand on Instagram with the perfect blend of creativity and strategy! From eye-catching posts to trend-savvy reels, we design content that captivates. Paired with precision-targeted ads, your brand reaches the right audience, grows faster, and turns followers into customers on India’s favourite visual stage.",
                icon: <Icon icon="tabler:device-mobile-code" width="64" height="64" />,
                img:"/insta-ads.webp",
                color: "bg-blue-50 text-[#6161FF]",
              },
              {
                title: "Boost Your Business with Google Ads & SEO",
                description: "Take your brand to the next level with the perfect mix of Google Ads and SEO. While ads deliver instant visibility and fast results, SEO builds long-term credibility and consistent traffic. Together, they ensure your business gets discovered, trusted, and chosen—today and tomorrow",
                icon: <Icon icon="lucide:megaphone" width="64" height="64" />,
                img:"/google-ads.webp",
                color: "bg-purple-50 text-purple-600",
              },
              {
                title: "Tell Your Story, Amplify with YouTube Ads",
                description: "Bring your brand story to life on YouTube! We create compelling videos that capture attention and connect with your audience on an emotional level. Combined with smart ad campaigns, your content reaches millions, builds a loyal community, and turns views into lasting results—all across India’s biggest video platform.",
                icon: <Icon icon="tabler:cloud-cog" width="64" height="64" />,
                img:"/yt-ads.webp",
                color: "bg-green-50 text-green-600",
              },
              
            ].map((value, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 glass_effect hover:border-[#6161FF] border border-gray-300 lg:col-span-3 group relative overflow-hidden rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">{value.title}</h3>
                  {/* <div className="block mb-4">{value.icon}</div> */}
                  <div className='block mb-4'>
                    <img src={value.img} />
                  </div>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className="absolute opacity-75 w-100 -left-4 -bottom-4 -z-10 blur-2xl">
          <svg viewBox="0 0 200 200" className='up-down' xmlns="http://www.w3.org/2000/svg">
            <path fill="#9EF0F0" d="M27.8,-52.3C36.3,-43.3,43.4,-36.3,48.9,-27.9C54.3,-19.5,58,-9.7,63.9,3.4C69.7,16.5,77.8,33,73.6,43.6C69.4,54.1,53,58.7,38.7,60C24.4,61.2,12.2,59.1,-1.1,61.1C-14.5,63,-28.9,69.1,-37.9,64.8C-46.9,60.5,-50.4,45.8,-57.1,33.2C-63.8,20.7,-73.8,10.4,-78.4,-2.7C-83.1,-15.7,-82.4,-31.5,-72.8,-39.1C-63.3,-46.7,-44.8,-46.1,-31.2,-52.1C-17.5,-58,-8.8,-70.5,0.5,-71.3C9.7,-72.1,19.4,-61.2,27.8,-52.3Z" transform="translate(100 100)" />
          </svg>
        </div>
      </section>

      {/* Our Products Section */}
      <section id="products" className="w-full py-16 md:py-24 lg:py-32  relative">
        <div className="absolute opacity-75 w-100 right-0 top-0 blur-2xl">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#cfeeff" d="M28.7,-49.1C42.5,-41.7,62.8,-44.8,70,-38.4C77.3,-31.9,71.6,-16,71.6,0C71.5,15.9,77.1,31.8,71.1,40.4C65,48.9,47.3,50.2,33.6,57.1C19.8,64,9.9,76.6,-2.7,81.3C-15.2,85.9,-30.5,82.5,-39.5,72.9C-48.5,63.2,-51.3,47.2,-49.9,34C-48.6,20.8,-43.1,10.4,-44.7,-0.9C-46.3,-12.2,-55,-24.5,-52.9,-31.8C-50.9,-39.1,-38.1,-41.5,-27.5,-50.7C-16.9,-60,-8.4,-76.1,-0.5,-75.2C7.4,-74.3,14.9,-56.5,28.7,-49.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="container px-4 md:px-6 mx-auto z-10 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <span className="text-[#6161FF] font-semibold text-sm tracking-wider uppercase">Innovative Solutions</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
                Our{" "}
                <span className="relative inline-block text-[#6161FF]">
                  Products
                  <motion.svg
                    className="absolute left-0 -bottom-1 w-full h-5"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                      stroke="#FF4500"
                      strokeWidth="24"
                      fill="transparent"
                      strokeDasharray="1000"
                      strokeDashoffset="1000"
                      initial={{ strokeDashoffset: 1000 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  </motion.svg>
                </span>
              </h2>
            <p className="max-w-[700px] text-gray-600 text-lg leading-relaxed">
              Experience our cutting-edge products designed to enhance your digital presence and streamline operations. Tailored to meet your unique needs, our solutions empower your business to thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                name: "BuzzKit",
                tagline: "Empower Your Sales",
                description: "Elevate your Sales, Marketing, Social Media, Communication and Productivity on One Seamless Platform!",
                icon: <Icon icon="emojione-v1:three-networked-computers" width="48" height="48" />,
                link: "/products/buzzkit",
                knowmore: "Know More",
                isLaunchingSoon: false
              },
            //   {
            //     name: "CedarSync",
            //     tagline: "All Marketplace solutions in one place",
            //     description: "Effortlessly manage listings, orders, and inventory across multiple platforms with CedarSync—your all-in-one marketplace solution.",
            //     icon: <Icon icon="emojione-v1:three-networked-computers" width="48" height="48" />,
            //     link: "#",
            //     knowmore: "Know More",
            //     isLaunchingSoon: true
            //   },
              {
                name: "Snapzo",
                tagline: "Instant Delivery App",
                description: "Sanpzo is a new instant delivery app that promises to deliver products to users in just a click.",
                icon: <Icon icon="emojione-v1:three-networked-computers" width="48" height="48" />,
                link: "#",
                knowmore: "Know More",
                isLaunchingSoon: true
              }
            ].map((product, index) => (
              <div key={index}  className="group relative hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl  hover:border-[#6161FF] border border-gray-300 p-6 transition-all">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                {product.isLaunchingSoon && (
                  <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Launching Soon
                  </div>
                )}
                <div className="relative space-y-4 h-full">
                  <div className="text-start grid gap-4 h-full items-space-between">
                    <div>
                      <div className="inline-block bg-slate-100 rounded-full p-3">{product.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-slate-700 font-medium text-lg mb-2">{product.tagline}</p>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                    </div>
                    <div>
                      <Link href={product.link} key={index} className="hover:text-[#6161FF] hover:underline text-gray-600 text-sm">{product.knowmore}</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="w-full py-16 md:py-24 lg:py-32 relative bg-white">
        {/* Background Image with Overlay */}

        <div className="absolute opacity-75 w-100 right-0 top-0 -z-10 blur-2xl">
          <svg viewBox="0 0 200 200" className='up-down' xmlns="http://www.w3.org/2000/svg">
            <path fill="#D0E2FF" d="M44.4,-67.4C57.8,-60.5,69.2,-48.6,77.4,-34.3C85.6,-19.9,90.6,-3.1,89.6,13.8C88.5,30.6,81.5,47.5,69.5,58.7C57.5,69.8,40.6,75.2,25.5,73.6C10.5,71.9,-2.8,63.1,-16.6,58.3C-30.5,53.5,-45,52.5,-53.1,45C-61.2,37.5,-62.8,23.4,-64.7,9.4C-66.7,-4.7,-68.9,-18.6,-63.4,-28.3C-57.9,-38,-44.7,-43.5,-32.8,-51.1C-21,-58.7,-10.5,-68.4,2.5,-72.3C15.5,-76.3,31,-74.3,44.4,-67.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="container px-4 md:px-6 mx-auto z-10">

          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <span className="text-[#6161FF] font-semibold text-sm tracking-wider uppercase">What We Offer</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
                Our{" "}
                <span className="relative inline-block text-[#6161FF]">
                  Services
                  <motion.svg
                    className="absolute left-0 -bottom-1 w-full h-5"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                      stroke="#FF4500"
                      strokeWidth="24"
                      fill="transparent"
                      strokeDasharray="1000"
                      strokeDashoffset="1000"
                      initial={{ strokeDashoffset: 1000 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  </motion.svg>
                </span>
              </h2>
            <p className="max-w-[700px] md:text-gray-600 text-slate-900 text-lg leading-relaxed">
              Our comprehensive suite of IT services is designed to address a wide range of business needs. Here are some of the key services we offer:
            </p>
          </div>
          <div className="grid grid-cols-12 gap-8 mt-8">
            {[
              {
                title: "Complete Digital Marketing Solutions",
                description: "Boost your online presence with the perfect mix of SEO, Google Ads, Facebook campaigns, and Instagram growth to reach, engage, and convert your audience.",
                icon: <Icon icon="lucide:megaphone" width="64" height="64" />,
                color: "bg-purple-50 text-purple-600",
              },
              {
                title: "Web Software Development",
                description: "We build scalable, secure, and user-friendly web applications—from custom business tools to full e-commerce platforms—tailored to your goals.",
                icon: <Icon icon="lucide:code-2" width="64" height="64" />,
                color: "bg-purple-50 text-purple-600",
              },
              {
                title: "Mobile Software Development",
                description: "Create powerful, cross-platform mobile apps with modern features and smooth user experiences, whether for iOS, Android, or both.",
                icon: <Icon icon="tabler:device-mobile-code" width="64" height="64" />,
                color: "bg-blue-50 text-[#6161FF]",
              },
              {
                title: "SaaS Software Development",
                description: "We design secure, scalable, and user-friendly SaaS platforms with seamless integrations to streamline your business operations.",
                icon: <Icon icon="tabler:cloud-cog" width="64" height="64" />,
                color: "bg-green-50 text-green-600",
              },
              {
                title: "WordPress Development",
                description: "Get custom WordPress themes, plugins, and optimizations that reflect your brand and enhance your site’s functionality.",
                icon: <Icon icon="tabler:layout" width="64" height="64" />,
                color: "bg-green-50 text-green-600",
              },
              {
                title: "Shopify Development",
                description: "Launch or scale your online store with custom Shopify development, theme customization, and seamless third-party integrations.",
                icon: <Icon icon="lucide:shopping-bag" width="64" height="64" />,
                color: "bg-green-50 text-green-600",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 glass_effect hover:border-[#6161FF] border border-gray-300 lg:col-span-4 group relative overflow-hidden rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <div className="block mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
        <div className="absolute opacity-75 w-100 -left-4 -bottom-4 -z-10 blur-2xl">
          <svg viewBox="0 0 200 200" className='up-down' xmlns="http://www.w3.org/2000/svg">
            <path fill="#9EF0F0" d="M27.8,-52.3C36.3,-43.3,43.4,-36.3,48.9,-27.9C54.3,-19.5,58,-9.7,63.9,3.4C69.7,16.5,77.8,33,73.6,43.6C69.4,54.1,53,58.7,38.7,60C24.4,61.2,12.2,59.1,-1.1,61.1C-14.5,63,-28.9,69.1,-37.9,64.8C-46.9,60.5,-50.4,45.8,-57.1,33.2C-63.8,20.7,-73.8,10.4,-78.4,-2.7C-83.1,-15.7,-82.4,-31.5,-72.8,-39.1C-63.3,-46.7,-44.8,-46.1,-31.2,-52.1C-17.5,-58,-8.8,-70.5,0.5,-71.3C9.7,-72.1,19.4,-61.2,27.8,-52.3Z" transform="translate(100 100)" />
          </svg>
        </div>
      </section>

  

      {/* Our Marketing Plans */}
      <section id="pricing" className="w-full py-16 md:py-24 lg:py-32 relative bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <span className="text-[#6161FF] font-semibold text-sm tracking-wider uppercase">Our Plans</span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
               
            Choose the Right{" "}
                <span className="relative inline-block text-[#6161FF]">
                Plan for Your Growth
                  <motion.svg
                    className="absolute left-0 -bottom-1 w-full h-5"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                      stroke="#FF4500"
                      strokeWidth="24"
                      fill="transparent"
                      strokeDasharray="1000"
                      strokeDashoffset="1000"
                      initial={{ strokeDashoffset: 1000 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  </motion.svg>
                </span>
            </h2>
            <p className="max-w-[700px] md:text-gray-600 text-slate-900 text-lg leading-relaxed">
              From startups to enterprises, we’ve designed flexible plans to match your business needs and marketing goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Growth Plan (Free)",
                price: "₹0",
                description: "Launch your e-commerce journey with <b>zero upfront cost!</b> We handle website development & marketing services absolutely free. You only pay when you succeed. Only 5% on delivered orders",
                features: ["Free website development", "Free marketing services", "Best for new startups"],
              },
              {
                title: "Basic Website Development",
                price: "Starting from ₹15,000",
                description: "Get a professional website tailored to your business needs. Builds fast, secure, and mobile-friendly websites with modern UI/UX to help you establish a strong online presence.",
                features: ["Custom design", "Responsive layout", "SEO-friendly structure"],
              },
              {
                title: "Marketing Growth Plan",
                price: "₹18,500 / month",
                description: "Boost your brand visibility with our full-fledged SEO & SMO strategy. This plan is designed to strengthen your online presence by improving your search rankings and growing your social media channels with engaging, optimized content.",
                features: ["Social media growth", "Campaign management", "Monthly reporting"],
              },
              {
                title: "Creative Post Plan",
                price: "₹16,500 / month",
                description: "Engage your audience with high-quality, creative social media posts that truly represent your brand. This plan includes <b>20 professionally designed posts every month</b>, each with <b>50+ words of impactful content</b> tailored to your audience.",
                features: ["Custom creative posts", "Content calendar", "Brand-focused design"],
              },
              {
                title: "Google Ads",
                price: "₹11,500 / month",
                description: "Get instant visibility and attract ready-to-buy customers with highly targeted <b>Google Ads campaigns</b>. From search to display networks, we create and manage ads that drive qualified traffic, maximize ROI.",
                features: ["Search & Display ads", "Keyword optimization", "Performance tracking"],
              },
              {
                title: "Meta Ads (Facebook & Instagram)",
                price: "₹9,500 / month",
                description: "Reach your ideal audience where they spend most of their time—on <b>Facebook and Instagram</b>. Our Meta Ads strategy focuses on building awareness, driving engagement, and converting followers into customers with impactful creatives and precise targeting.",
                features: ["Facebook campaigns", "Instagram ads", "Engagement optimization"],
              },
              
            ].map((plan, index) => (
              <div
                key={index}
                className="glass_effect hover:border-[#6161FF] border border-gray-300 group relative overflow-hidden rounded-2xl p-8 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{plan.title}</h3>
                <p className="text-[#000] font-semibold text-2xl mb-2">{plan.price}</p>
                <p
                  className="text-gray-600 text-sm"
                  dangerouslySetInnerHTML={{ __html: plan.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Mobile App Development Section */}
      <section id="mobile-app" className="w-full py-16 md:py-24 lg:py-32 relative bg-gray-50">
        <div className="absolute w-100 top-4 left-4 -z-10 blur-2xl">
          <svg viewBox="0 0 200 200" className="up-down" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#E8DAFF"
              d="M34.6,-51C45.8,-46.8,56.2,-38.6,60.3,-28C64.3,-17.5,61.8,-4.5,58,7C54.3,18.5,49.2,28.4,43.1,39.6C36.9,50.9,29.6,63.4,19.2,67.2C8.9,71.1,-4.6,66.2,-19.2,63C-33.9,59.8,-49.7,58.3,-55.5,49.4C-61.2,40.4,-56.9,24,-54.5,10.6C-52.2,-2.8,-51.9,-13.2,-51.9,-28.1C-51.9,-43,-52.2,-62.4,-43.6,-67.8C-35.1,-73.1,-17.5,-64.5,-2.9,-60C11.8,-55.5,23.5,-55.2,34.6,-51Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-[#6161FF] font-semibold text-sm tracking-wider uppercase">
                  Mobile Solutions
                </span>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
                  Mobile App{" "}
                  <span className="relative inline-block text-[#6161FF]">
                    Development
                    <motion.svg
                      className="absolute left-0 -bottom-1 w-full h-5"
                      viewBox="0 0 500 150"
                      preserveAspectRatio="none"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.path
                        d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                        stroke="#FF4500"
                        strokeWidth="24"
                        fill="transparent"
                        strokeDasharray="1000"
                        strokeDashoffset="1000"
                        initial={{ strokeDashoffset: 1000 }}
                        whileInView={{ strokeDashoffset: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                      />
                    </motion.svg>
                  </span>
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  We create powerful, user-friendly, and scalable <b>mobile applications</b> tailored to
                  your business goals. From e-commerce to on-demand services and enterprise solutions, our
                  apps are designed for performance and growth.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our plans are <b>fully customizable</b> depending on your needs—whether you want a
                  feature-packed product or a lean MVP to test your market. We build for both iOS and
                  Android, ensuring cross-platform compatibility.
                </p>
                <p className="text-[#6161FF] font-semibold text-lg underline"><a href='https://wa.me/919828051996' target='_blank'>Connect here for pricing</a></p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative lg:flex justify-end h-[500px] order-1 lg:order-2">
              <Image
                src="https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?semt=ais_incoming&w=740&q=80" 
                alt="Mobile app development"
                className="rounded-lg object-cover shadow-lg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section id="technologies" className="w-full py-16 md:py-24 lg:py-32  relative">
        <div className="absolute opacity-75 w-100 right-0 top-0 z-10 blur-2xl">
          <svg viewBox="0 0 200 200" className='up-down' xmlns="http://www.w3.org/2000/svg">
            <path fill="#D0E2FF" d="M44.4,-67.4C57.8,-60.5,69.2,-48.6,77.4,-34.3C85.6,-19.9,90.6,-3.1,89.6,13.8C88.5,30.6,81.5,47.5,69.5,58.7C57.5,69.8,40.6,75.2,25.5,73.6C10.5,71.9,-2.8,63.1,-16.6,58.3C-30.5,53.5,-45,52.5,-53.1,45C-61.2,37.5,-62.8,23.4,-64.7,9.4C-66.7,-4.7,-68.9,-18.6,-63.4,-28.3C-57.9,-38,-44.7,-43.5,-32.8,-51.1C-21,-58.7,-10.5,-68.4,2.5,-72.3C15.5,-76.3,31,-74.3,44.4,-67.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <span className="text-[#6161FF] font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
                <span className="relative inline-block text-[#6161FF]">
                Technologies
                  <motion.svg
                    className="absolute left-0 -bottom-1 w-full h-5"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                      stroke="#FF4500"
                      strokeWidth="24"
                      fill="transparent"
                      strokeDasharray="1000"
                      strokeDashoffset="1000"
                      initial={{ strokeDashoffset: 1000 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  </motion.svg>
                </span>
                {" "}We Work With
              </h2>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
               
            </h2>
            <p className="max-w-[700px] text-gray-600 text-lg leading-relaxed">
              At Nobel Tech Innovations, we stay at the forefront of technological advancements to ensure that we provide the best possible solutions to our clients. Here are some of the key technologies we work with:
            </p>
          </div>
          <InfiniteCarousel />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="whychoose" className="w-full py-16 md:py-24 lg:py-32 bg-white relative">
        <div className="absolute w-100 top-4 left-4 z-10 blur-2xl">
          
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            {/* <span className="text-[#6161FF] font-semibold text-sm tracking-wider uppercase">Why Choose Us</span> */}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
            Why {" "}
                <span className="relative inline-block text-[#6161FF]">
                Choose Us?
                  <motion.svg
                    className="absolute left-0 -bottom-1 w-full h-5"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                      stroke="#FF4500"
                      strokeWidth="24"
                      fill="transparent"
                      strokeDasharray="1000"
                      strokeDashoffset="1000"
                      initial={{ strokeDashoffset: 1000 }}
                      whileInView={{ strokeDashoffset: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  </motion.svg>
                </span>
              </h2>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
              
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
                icon: <Icon icon="mdi:account-tie" width="64" height="64" className="text-[#6161FF]" />,
              },
              { 
                title: "Innovative Solutions",
                description: "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive edge.",
                icon: <Icon icon="mdi:lightbulb-on" width="64" height="64" className="text-[#6161FF]" />,
              },
              {
                title: "Customer-Centric Approach",
                description: "Your success is our priority. We work closely with you to understand and meet your specific needs.",
                icon: <Icon icon="mdi:account-group" width="64" height="64" className="text-[#6161FF]" />,
              },
              {
                title: "Quality Assurance",
                description: "We maintain high standards of quality in every aspect of our service delivery.",
                icon: <Icon icon="mdi:check-circle" width="64" height="64" className="text-[#6161FF]" />,
              },
              {
                title: "Cost-Effective",
                description: "We offer competitive pricing without compromising on quality or service standards.",
                icon: <Icon icon="mdi:currency-usd" width="64" height="64" className="text-[#6161FF]" />,
              },
              {
                title: "24/7 Support",
                description: "Our dedicated support team is available around the clock to assist you with any issues.",
                icon: <Icon icon="mdi:clock-time-four" width="64" height="64" className="text-[#6161FF]" />,
              },
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl  hover:border-[#6161FF] border border-gray-300 hover:shadow-xl p-6 transition-all duration-300">
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

      {/* Solutions Section */}
      <section id="contact" className="py-16 md:py-24 bg-[#F0F3FF]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow? Let&apos;s Talk!</h2>
              <p className="text-lg mb-8">
                Ready to take your business to the next level? Get in touch with us today to discuss your IT needs and discover how Nobel Tech Innovations can help you achieve your goals. You can reach us through our contact form, email, or phone. We look forward to hearing from you!
              </p>

            </div>
            <div className="lg:col-span-3">
              <div className="/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Request a Free Consultation</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main >
  );
}
