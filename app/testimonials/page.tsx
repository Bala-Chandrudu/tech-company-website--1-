import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-white/90">
              Don't just take our word for it. See what our clients have to say about working with us.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="text-gray-600 italic mb-6">
                  "Working with TechSoft has been a game-changer for our business. Their team took the time to
                  understand our unique needs and delivered a solution that exceeded our expectations. The website they
                  built has significantly increased our online presence and customer engagement."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-bold">John Doe</h4>
                    <p className="text-sm text-gray-500">CEO, Tech Innovations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="text-gray-600 italic mb-6">
                  "The team's attention to detail and commitment to quality is impressive. They not only met our
                  requirements but also provided valuable insights to improve our product. Their responsive
                  communication and transparent process made the entire experience smooth and enjoyable."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">AS</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Anna Smith</h4>
                    <p className="text-sm text-gray-500">Product Manager, E-commerce Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="text-gray-600 italic mb-6">
                  "As a startup, we needed a partner who understood our vision and could work within our constraints.
                  TechSoft delivered a solution that helped us grow rapidly. Their team was responsive, flexible, and
                  truly invested in our success."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">RJ</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Robert Johnson</h4>
                    <p className="text-sm text-gray-500">CEO, Startup Ventures</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 4 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="text-gray-600 italic mb-6">
                  "We've worked with several development teams in the past, but none have matched the level of expertise
                  and dedication that TechSoft brings to the table. They've become an invaluable extension of our team,
                  helping us navigate complex technical challenges."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">ML</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Maria Lopez</h4>
                    <p className="text-sm text-gray-500">CTO, Enterprise Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 5 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="text-gray-600 italic mb-6">
                  "The e-commerce platform TechSoft built for us has transformed our business. Sales have increased by
                  200% since launch, and the user experience has received rave reviews from our customers. Their ongoing
                  support has been exceptional."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">DW</span>
                  </div>
                  <div>
                    <h4 className="font-bold">David Wilson</h4>
                    <p className="text-sm text-gray-500">Owner, Retail Brand</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 6 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="text-gray-600 italic mb-6">
                  "TechSoft's consulting services helped us navigate a complex digital transformation. Their strategic
                  insights and technical expertise were invaluable in helping us make informed decisions about our
                  technology roadmap."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-bold">SK</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Kim</h4>
                    <p className="text-sm text-gray-500">Director of IT, Healthcare Provider</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Video Testimonials</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Hear directly from our clients about their experience working with us
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Video Testimonial Would Be Embedded Here</p>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">Tech Innovations Success Story</h3>
                <p className="text-gray-600 text-sm mb-4">John Doe, CEO</p>
                <p className="text-gray-600">
                  "How TechSoft helped us increase our online presence and customer engagement."
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Video Testimonial Would Be Embedded Here</p>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">E-commerce Transformation</h3>
                <p className="text-gray-600 text-sm mb-4">Anna Smith, Product Manager</p>
                <p className="text-gray-600">
                  "Our journey to building a world-class e-commerce platform with TechSoft."
                </p>
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Video Testimonial Would Be Embedded Here</p>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">Startup Success</h3>
                <p className="text-gray-600 text-sm mb-4">Robert Johnson, CEO</p>
                <p className="text-gray-600">"How TechSoft helped our startup scale rapidly with limited resources."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Case Studies</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Detailed examples of how we've helped our clients achieve their goals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="E-commerce Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">E-commerce Platform Redesign</h3>
                <p className="text-gray-600 mb-4">
                  We helped a retail brand transform their outdated online store into a modern e-commerce platform,
                  resulting in a 200% increase in sales.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">Read Case Study</Button>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Mobile App Development"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Healthcare Mobile App</h3>
                <p className="text-gray-600 mb-4">
                  We developed a mobile application for a healthcare provider that streamlined patient communication and
                  appointment scheduling.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">Read Case Study</Button>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Cloud Migration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Enterprise Cloud Migration</h3>
                <p className="text-gray-600 mb-4">
                  We helped a large enterprise migrate their legacy systems to the cloud, resulting in improved
                  performance and reduced operational costs.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">Read Case Study</Button>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Web Application"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Custom Web Application</h3>
                <p className="text-gray-600 mb-4">
                  We built a custom web application for a financial services company that automated their workflow and
                  improved client satisfaction.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700">Read Case Study</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help you achieve your business goals with our technology solutions.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  )
}
