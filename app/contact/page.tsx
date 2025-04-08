"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">We'd love to hear from you. Get in touch with our team.</p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">Thank You!</h3>
                  <p className="text-green-600">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <Button className="mt-4 bg-green-600 hover:bg-green-700" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your project or inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-purple-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Our Office</h3>
                    <p className="text-gray-600">
                      123 Tech Street, Suite 456
                      <br />
                      San Francisco, CA 94107
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-purple-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Main: +1 (555) 123-4567
                      <br />
                      Support: +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@techsoft.com
                      <br />
                      Support: support@techsoft.com
                      <br />
                      Sales: sales@techsoft.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-purple-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM (PST)
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Would Be Embedded Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How quickly can you start on my project?</h3>
              <p className="text-gray-600">
                We typically can begin new projects within 1-2 weeks of finalizing the contract. For urgent needs, we
                may be able to accommodate faster timelines.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What is your typical project process?</h3>
              <p className="text-gray-600">
                Our process includes discovery, planning, development, and delivery phases. We maintain transparent
                communication throughout the project lifecycle and provide regular updates on progress.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Do you provide ongoing support after project completion?
              </h3>
              <p className="text-gray-600">
                Yes, we offer various support and maintenance packages to ensure your solution continues to perform
                optimally after launch. We can tailor these to your specific needs.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What technologies do you specialize in?</h3>
              <p className="text-gray-600">
                We specialize in a wide range of technologies including React, Next.js, Node.js, Python, AWS, Azure, and
                more. Our team stays up-to-date with the latest advancements to provide cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
