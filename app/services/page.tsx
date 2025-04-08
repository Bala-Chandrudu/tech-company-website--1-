import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90">Comprehensive technology solutions tailored to your business needs</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Web Development</CardTitle>
                <CardDescription>Custom web applications and responsive websites</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We build modern, responsive web applications using the latest technologies and frameworks to deliver
                  exceptional user experiences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Custom web applications</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Responsive websites</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">E-commerce solutions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Content management systems</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button>
              </CardFooter>
            </Card>

            {/* Service 2 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Mobile Applications</CardTitle>
                <CardDescription>Native and cross-platform mobile apps</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We develop high-performance mobile applications for iOS and Android that provide seamless experiences
                  across all devices.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">iOS app development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Android app development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Cross-platform solutions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">App maintenance and updates</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button>
              </CardFooter>
            </Card>

            {/* Service 3 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Cloud Solutions</CardTitle>
                <CardDescription>Scalable and secure cloud infrastructure</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We help businesses leverage the power of cloud computing to optimize operations, reduce costs, and
                  improve scalability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Cloud migration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Infrastructure as a Service (IaaS)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Platform as a Service (PaaS)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Cloud security solutions</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button>
              </CardFooter>
            </Card>

            {/* Service 4 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">UI/UX Design</CardTitle>
                <CardDescription>User-centered design approach</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We create intuitive and engaging digital experiences that drive user satisfaction and business
                  results.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">User research</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Wireframing and prototyping</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Visual design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Usability testing</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button>
              </CardFooter>
            </Card>

            {/* Service 5 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">DevOps & CI/CD</CardTitle>
                <CardDescription>Streamlined development workflows</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We implement DevOps practices and CI/CD pipelines to increase efficiency, reliability, and speed of
                  delivery.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">CI/CD pipeline setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Infrastructure as Code (IaC)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Containerization</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Monitoring and logging</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button>
              </CardFooter>
            </Card>

            {/* Service 6 */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Consulting</CardTitle>
                <CardDescription>Expert technology consulting</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We provide strategic technology consulting to help you make informed decisions and develop effective
                  digital strategies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Technology assessment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Digital transformation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Technology roadmapping</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">IT strategy development</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Discovery</h3>
              <p className="text-gray-600">
                We start by understanding your business goals, challenges, and requirements to ensure our solution
                addresses your specific needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Planning</h3>
              <p className="text-gray-600">
                We develop a detailed project plan, including timelines, milestones, and resource allocation to ensure
                smooth execution.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Development</h3>
              <p className="text-gray-600">
                Our team of experts works collaboratively to build your solution, with regular updates and feedback
                sessions throughout the process.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Delivery & Support</h3>
              <p className="text-gray-600">
                We deliver your solution on time and provide ongoing support and maintenance to ensure its continued
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and discover how our services can help you achieve your business
            goals.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  )
}
