

export default function ContactUs() {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-4xl font-bold text-teal-600 mb-6 text-center">
            Contact Us
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Have questions or need help with your bicycle purchase? Reach out to us!
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-teal-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-teal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-teal-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email..."
                  className="w-full px-4 py-2 border border-teal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-teal-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2 border border-teal-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-teal-500 text-white px-6 py-2 rounded-md font-medium hover:bg-teal-600 transition"
              >
                Send Message
              </button>
            </form>
  
      
            <div className="p-6 rounded-md text-teal-800 space-y-4">
              <h3 className="text-xl font-semibold mb-4">Store Information</h3>
              <p><strong>Address:</strong> 123 Cycle Avenue, Dhaka 1207</p>
              <p><strong>Email:</strong> bicyclestore@gmail.com</p>
              <p><strong>Phone:</strong> +880 1234-567890</p>
              <p><strong>Hours:</strong> Sat - Thu: 9 AM - 8 PM</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  