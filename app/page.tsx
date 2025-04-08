"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="flex flex-col min-h-screen ">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute inset-0 bg-purple-600/40" />
        <div className="absolute inset-0">
          <Image
            src="/images/bot.jpeg"
            alt="Hero background"
            fill
            className="object-cover mix-blend-overlay opacity-20"
            priority
          />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto space-y-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" variants={fadeIn}>
            Your Trusted Partner
            <br />
            in Technology
          </motion.h1>
          <motion.p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto" variants={fadeIn}>
            Global delivery infused with a commitment to excellence and innovation, providing superior software
            solutions to drive your business growth.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8">
              DISCOVER MORE
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by Industry Leaders
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Client 1 */}
            <motion.div
              className="bg-white rounded-xl shadow-md p-8 text-center"
              variants={itemAnimation}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/client-logo1.png"
                  alt="AstraZeneca"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600">
                Designing a system for centralized patient database management and analysis while adhering to stringent
                internal AZ guidelines and international GAMP standards.
              </p>
            </motion.div>

            {/* Client 2 */}
            <motion.div
              className="bg-white rounded-xl shadow-md p-8 text-center"
              variants={itemAnimation}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/client-logo2.png"
                  alt="Infobric"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600">
                Recognized as the Innovation of the Year in the Construction Industry in Sweden, the system is utilized
                daily by nearly half a million workers across 15,000 construction sites.
              </p>
            </motion.div>

            {/* Client 3 */}
            <motion.div
              className="bg-white rounded-xl shadow-md p-8 text-center"
              variants={itemAnimation}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/client-logo3.png"
                  alt="Viaplay"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600">
                Seven years of continuous support and development for the Video on Demand platform, working as an
                extended Viaplay team to consistently deliver new features and improvements.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Our Services</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive technology solutions tailored to your business needs
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Service 1 */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
              variants={itemAnimation}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4 h-40 relative rounded-lg overflow-hidden">
                <Image src="/images/logo1.jpeg" alt="Web Development" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-700">Web Development</h3>
              <p className="text-gray-600">
                Custom web applications and responsive websites built with the latest technologies to deliver
                exceptional user experiences.
              </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
              variants={itemAnimation}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4 h-40 relative rounded-lg overflow-hidden">
                <Image src="/images/logo2.jpeg" alt="Mobile Applications" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-700">Mobile Applications</h3>
              <p className="text-gray-600">
                Native and cross-platform mobile apps that provide seamless experiences across all devices and operating
                systems.
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
              variants={itemAnimation}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4 h-40 relative rounded-lg overflow-hidden">
                <Image src="/images/logo3.jpeg" alt="Cloud Solutions" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-700">Cloud Solutions</h3>
              <p className="text-gray-600">
                Scalable and secure cloud infrastructure and migration services to optimize your business operations.
              </p>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
              variants={itemAnimation}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4 h-40 relative rounded-lg overflow-hidden">
                <Image src="/images/logo4.jpeg" alt="UI/UX Design" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-700">UI/UX Design</h3>
              <p className="text-gray-600">
                User-centered design approach to create intuitive and engaging digital experiences that drive user
                satisfaction.
              </p>
            </motion.div>

            {/* Service 5 */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
              variants={itemAnimation}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4 h-40 relative rounded-lg overflow-hidden">
                <Image src="/images/logo5.png" alt="DevOps & CI/CD" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-700">DevOps & CI/CD</h3>
              <p className="text-gray-600">
                Streamlined development workflows and automated deployment pipelines to increase efficiency and
                reliability.
              </p>
            </motion.div>

            {/* Service 6 */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow"
              variants={itemAnimation}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4 h-40 relative rounded-lg overflow-hidden">
                <Image src="/images/logo6.jpeg" alt="Consulting" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-purple-700">Consulting</h3>
              <p className="text-gray-600">
                Expert technology consulting to help you make informed decisions and develop effective digital
                strategies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-white/90 mb-4">
                With over a decade of experience in the technology industry, we've established ourselves as a leading
                provider of innovative software solutions for businesses of all sizes.
              </p>
              <p className="text-white/90 mb-4">
                Our team of skilled developers, designers, and consultants work collaboratively to deliver exceptional
                results that exceed our clients' expectations.
              </p>
              <p className="text-white/90 mb-6">
                We pride ourselves on our commitment to quality, transparency, and long-term partnerships with our
                clients.
              </p>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Learn More About Us
              </Button>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image src="/images/team-working.png" alt="Our team at work" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Testimonial 1 */}
            <motion.div
              className="bg-gray-50 rounded-xl p-8"
              variants={itemAnimation}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-bold">John Doe</h4>
                  <p className="text-sm text-gray-500">CTO, Tech Company</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Working with this team has been a game-changer for our business. Their expertise and dedication to our
                project delivered results beyond our expectations."
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="bg-gray-50 rounded-xl p-8"
              variants={itemAnimation}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">AS</span>
                </div>
                <div>
                  <h4 className="font-bold">Anna Smith</h4>
                  <p className="text-sm text-gray-500">Product Manager, E-commerce</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The team's attention to detail and commitment to quality is impressive. They not only met our
                requirements but also provided valuable insights to improve our product."
              </p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              className="bg-gray-50 rounded-xl p-8"
              variants={itemAnimation}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">RJ</span>
                </div>
                <div>
                  <h4 className="font-bold">Robert Johnson</h4>
                  <p className="text-sm text-gray-500">CEO, Startup</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a startup, we needed a partner who understood our vision and could work within our constraints. This
                team delivered a solution that helped us grow rapidly."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Transform Your Business?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your business goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Contact Us Today
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                Discover Our Plans
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
