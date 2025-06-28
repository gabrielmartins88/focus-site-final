import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CompliancePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="hero w-full py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold text-white mb-4">Stay Compliant with Ease</h1>
              <p className="text-xl text-gray-300 mb-8">
                Our compliance solutions help you navigate complex regulations and ensure your business is always
                protected.
              </p>
              <Button size="lg">Get Started</Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Card className="w-full max-w-sm bg-card-foreground text-card-foreground shadow-xl">
                <CardHeader>
                  <CardTitle>Request a Compliance Audit</CardTitle>
                  <CardDescription>Fill out the form below to request a compliance audit.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid w-full gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your Name" required />
                    </div>
                    <div className="grid w-full gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="Your Email" type="email" required />
                    </div>
                    <div className="grid w-full gap-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your Company" />
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Submit Request</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-focus-black opacity-70"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Compliance Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Data Privacy Compliance</CardTitle>
              <CardDescription>
                Ensure your data handling practices comply with GDPR, CCPA, and other privacy regulations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>We offer comprehensive data privacy assessments, policy development, and training programs.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Financial Compliance</CardTitle>
              <CardDescription>Meet regulatory requirements for financial reporting and compliance.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Our experts help you navigate complex financial regulations and ensure accurate reporting.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security Compliance</CardTitle>
              <CardDescription>Protect your systems and data with robust security compliance measures.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                We provide security audits, vulnerability assessments, and compliance solutions for various security
                standards.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
