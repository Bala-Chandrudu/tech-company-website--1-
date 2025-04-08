"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"

export default function AboutPage() {
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">About TechSoft</h1>
            <p className="text-xl text-white/90">
              We're a team of passionate technologists dedicated to helping businesses succeed in the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, TechSoft began with a simple mission: to help businesses leverage technology to achieve
                their goals. What started as a small team of three developers has grown into a comprehensive technology
                partner serving clients worldwide.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've evolved our services to meet the changing needs of the market, but our core values
                have remained the same: excellence, innovation, and client satisfaction.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be trusted by organizations ranging from startups to Fortune 500 companies,
                delivering solutions that drive real business results.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="flex justify-center">
              <motion.div
                className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/placeholder.svg?height=400&width=600" alt="Our journey" fill className="object-cover" />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Core Values</h2>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Value 1 */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-8 text-center"
              variants={itemAnimation}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from code quality to client communication. We're not
                satisfied until we've delivered the best possible solution.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-8 text-center"
              variants={itemAnimation}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and approaches, constantly seeking better ways to solve problems and create
                value for our clients.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              className="bg-white rounded-xl shadow-sm p-8 text-center"
              variants={itemAnimation}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork, both within our organization and with our clients. Together, we can
                achieve more than we ever could alone.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Leadership Team</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
              Meet the experienced professionals who guide our company's vision and strategy
            </p>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Team Member 1 */}
            <motion.div className="text-center" variants={itemAnimation} whileHover={{ y: -5 }}>
              <motion.div
                className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/placeholder.svg?height=200&width=200" alt="CEO" fill className="object-cover" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800">Michael Johnson</h3>
              <p className="text-purple-600 mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                With 20+ years in technology leadership, Michael drives our vision and strategy.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div className="text-center" variants={itemAnimation} whileHover={{ y: -5 }}>
              <motion.div
                className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/placeholder.svg?height=200&width=200" alt="CTO" fill className="object-cover" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800">Sarah Chen</h3>
              <p className="text-purple-600 mb-2">CTO</p>
              <p className="text-gray-600 text-sm">
                Sarah leads our technical strategy and ensures we stay at the cutting edge of technology.
              </p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div className="text-center" variants={itemAnimation} whileHover={{ y: -5 }}>
              <motion.div
                className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/placeholder.svg?height=200&width=200" alt="COO" fill className="object-cover" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800">David Rodriguez</h3>
              <p className="text-purple-600 mb-2">COO</p>
              <p className="text-gray-600 text-sm">
                David oversees our operations, ensuring we deliver exceptional service to every client.
              </p>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div className="text-center" variants={itemAnimation} whileHover={{ y: -5 }}>
              <motion.div
                className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/placeholder.svg?height=200&width=200" alt="CMO" fill className="object-cover" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800">Emily Taylor</h3>
              <p className="text-purple-600 mb-2">CMO</p>
              <p className="text-gray-600 text-sm">
                Emily leads our marketing efforts, helping us connect with clients who can benefit from our services.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 text-white">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for technology and innovation.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              View Open Positions
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
