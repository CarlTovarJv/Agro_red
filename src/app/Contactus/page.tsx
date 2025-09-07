"use client";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center py-5">
      <section className="w-full bg-gradient-to-r py-16 text-center text-black">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </section>

      <section className="w-full max-w-5xl bg-white p-10 mt-1 border rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Let’s Start a Conversation</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Información de contacto */}
          <div className="space-y-6">
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
              <label className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg"
                required
                style={{ borderColor: '#55A605' }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg"
                required
                style={{ borderColor: '#55A605' }}
              />
            </div>

            <div>
                <label className="block text-sm font-medium">Your Email</label>
                <input
                type="email"
                className="w-full mt-1 p-2 border rounded-lg"
                required
                placeholder="Enter your email"
              style={{ borderColor: '#55A605' }}
  />
</div>
            <div>
              <label className="block text-sm font-medium">Your Message</label>
              <textarea
                className="w-full mt-1 p-2 border rounded-lg"
                rows={5}
                placeholder="Write your message here..."
                required
                style={{ borderColor: '#55A605' }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{ borderColor: '#55A605' }}
              className="w-full bg-[#55A605] text-white py-2 px-4 rounded-md font-semibold text-center hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
