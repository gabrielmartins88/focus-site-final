const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-8">
          We'd love to hear from you! Please fill out the form below or reach out to us through our social media
          channels.
        </p>

        <div className="max-w-lg mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2 text-left">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Our Team</h3>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <img src="/placeholder-user.jpg" alt="Team Member 1" className="rounded-full w-24 h-24 mx-auto mb-2" />
              <p className="font-semibold">John Doe</p>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="text-center">
              <img src="/placeholder-user.jpg" alt="Team Member 2" className="rounded-full w-24 h-24 mx-auto mb-2" />
              <p className="font-semibold">Jane Smith</p>
              <p className="text-gray-600">Marketing Manager</p>
            </div>
            <div className="text-center">
              <img src="/placeholder-user.jpg" alt="Team Member 3" className="rounded-full w-24 h-24 mx-auto mb-2" />
              <p className="font-semibold">Peter Jones</p>
              <p className="text-gray-600">Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
