import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PlansPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Plans</h1>
            <p className="text-xl text-white/90">Flexible solutions tailored to your business needs</p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$1,999</span>
                  <span className="text-gray-500 ml-2">/ project</span>
                </div>
                <CardDescription className="mt-2">Perfect for small businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Basic website (up to 5 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Mobile responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Contact form integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Basic SEO setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">1 month of support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="border-0 shadow-xl relative bg-gradient-to-b from-white to-purple-50">
              <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
                <span className="bg-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$4,999</span>
                  <span className="text-gray-500 ml-2">/ project</span>
                </div>
                <CardDescription className="mt-2">Ideal for growing businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Custom website (up to 10 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Advanced responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Content management system</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">E-commerce functionality (up to 50 products)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Comprehensive SEO setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">3 months of support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
                <CardDescription className="mt-2">For large organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Fully custom solution</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Advanced web applications</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Custom integrations with existing systems</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Unlimited e-commerce products</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Advanced security features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">12 months of priority support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Need a Custom Solution?</h2>
            <p className="text-gray-600">
              We understand that every business is unique. Our team can create a tailored solution that perfectly fits
              your specific requirements and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Custom Web Development */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Custom Web Development</h3>
              <p className="text-gray-600 mb-6">
                From simple websites to complex web applications, we can build a solution that meets your exact
                specifications and business goals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Tailored to your specific needs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Scalable architecture</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Custom integrations</span>
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button>
            </div>

            {/* Enterprise Solutions */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Enterprise Solutions</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive solutions for large organizations with complex requirements, including advanced security,
                scalability, and integrations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">High-performance architecture</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Advanced security features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Enterprise-grade support</span>
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I upgrade my plan later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade your plan at any time. We'll work with you to ensure a smooth transition and only
                charge the difference in price.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you offer maintenance packages?</h3>
              <p className="text-gray-600">
                Yes, we offer various maintenance packages to keep your website or application running smoothly. These
                can include regular updates, security patches, and content changes.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What is your payment structure?</h3>
              <p className="text-gray-600">
                We typically require a 50% deposit to begin work, with the remaining balance due upon project
                completion. For larger projects, we can establish a milestone-based payment schedule.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How long does a typical project take?</h3>
              <p className="text-gray-600">
                Project timelines vary based on complexity. A basic website might take 4-6 weeks, while a complex web
                application could take 3-6 months. We'll provide a detailed timeline during the planning phase.
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
            Contact us today to discuss your project and find the perfect plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
