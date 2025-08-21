    export default function LoginPage() {

      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-96 p-8 bg-white rounded-xl shadow-md">

            <div className="flex justify-center -mt-8 ">
              <img src="/logo.svg" alt="agrored" className="w-32" />
            </div>
    
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 -mt-4">
              Welcome Back
            </h1>
    
    
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
    
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
    

              <div className="text-right mb-4">
                <a href="#" className="text-sm text-red-600 hover:underline">
                  Forgot password?
                </a>
              </div>
    
              
              <button
                type="submit"
                className="w-30 py-2 bg-black justify-center flex items-center text-white font-semibold rounded-md hover:bg-gray-800 transition-colors block mx-auto"
              >
                Login
              </button>

              <div className="text-center mb-4 mt-4">
                <a href="#" className="text-sm text-gray-500 hover:underline">
                  or Sign Up 
                </a>
              </div>


            </form>
          </div>
        </div>
        )
      }