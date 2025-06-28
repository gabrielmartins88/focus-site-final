import Image from "next/image"

export function TestimonialsSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src="/professional-man-headshot.png"
              alt="Client 1"
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua."
            </p>
            <h4 className="text-lg font-semibold">John Doe</h4>
            <p className="text-gray-500">CEO, Company A</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src="/professional-woman-headshot.png"
              alt="Client 2"
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 mb-4">
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat."
            </p>
            <h4 className="text-lg font-semibold">Jane Smith</h4>
            <p className="text-gray-500">Marketing Manager, Company B</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src="/diverse-professional-woman-headshots.png"
              alt="Client 3"
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 mb-4">
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            </p>
            <h4 className="text-lg font-semibold">Alice Johnson</h4>
            <p className="text-gray-500">Project Lead, Company C</p>
          </div>
        </div>
      </div>
    </section>
  )
}
