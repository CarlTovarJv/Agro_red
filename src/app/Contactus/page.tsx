export default function ContactForm(){
  return (
    <div className="bg-white  shadow-md p-8">
      <form className="space-y-4">


        <p className="text-sm text-gray-500">Please note: all fields are required.</p>
 
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-green">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
             style={{ borderColor: '#55A605' }}
          />
        </div>
 
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-green-55A605">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="mt-1 block w-full px-3 py-2 border border-green-55A605 rounded-md shadow-sm"
            style={{ borderColor: '#55A605' }}
          />
        </div>
 
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-green-55A605">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm"
            style={{ borderColor: '#55A605' }}
          />
        </div>
 
        <div>
          <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700">Company Email</label>
          <input
            type="email"
            id="companyEmail"
            name="companyEmail"
            required
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
            style={{ borderColor: '#55A605' }}
          />
        </div>

        <div>
            <button
            type="submit"
            className="w-full bg-[#55A605] text-white py-2 px-4 rounded-md font-semibold text-center hover:opacity-90 transition"
            >
                Submit
            </button>
        </div>
      </form>
    </div>
  )
}