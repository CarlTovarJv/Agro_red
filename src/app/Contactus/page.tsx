"use client";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center py-5 w-screen bg-neutral-50">
      <section className="w-full bg-gradient-to-r py-8 text-center text-black">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </section>

      <section className="w-full max-w-5xl bg-white p-10 shadow-md rounded-lg mb-30">
        <div className="grid md:grid-cols-2 gap-8 mt-2">
          {/* Información de contacto */}
          <div className="space-y-7 mt-16">
            <div>
              <h3 className="font-semibold">Ask how we can help you:</h3>
            </div>
            <div>
              <h4 className="font-semibold">See our platform in action</h4>
              <p className="text-gray-600 text-sm">
                Thank you for using Agrored, let us know how we can help you?
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Wholesale purchases and sales</h4>
              <p className="text-gray-600 text-sm">
                We aim for you to have the best experience with your wholesale purchases or sales because the best products are for the best customers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Explore life at Agrored</h4>
              <p className="text-gray-600 text-sm">
                We aim for our users to have the best experience using Agrored.
              </p>
            </div>
          </div>

          {/* Formulario */}
          <form className="space-y-4">
            <p className="text-sm text-gray-500">
              Please note: all fields are required.
            </p>

            <div>
              <label className="block text-sm font-medium ">First Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg"
                required
              />
            </div>

            <div >
                <label className="block text-sm font-medium">Your Email</label>
                <input
                type="email"
                className="w-full mt-1 p-2 border rounded-lg"
                required
                placeholder="Enter your email"
                />
            </div>
            <div>
              <label className="text-sm font-medium">Your Message</label>
              <textarea
                className="w-full mt-1 p-2 border rounded-lg"
                rows={3}
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#55A605] text-white py-2 px-4 rounded-md font-semibold text-center hover:opacity-90 transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  
  );
}
