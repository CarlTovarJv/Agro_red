
import { Star, ThumbsUp } from "lucide-react";

export default function Home() {
  return (
    
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      {}
              <div className="flex justify-center">
  <h1 className="text-2xl font-bold mb-2">Reviews</h1>
</div>
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">

        <p className="font-semibold">Mateo Turcios</p>
        <div className="flex items-center space-x-2">
          {}
          <span className="text-3xl font-semibold">5,0</span>
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="fill-yellow-400 w-6 h-6" />
            ))}
          </div>
          <span className="text-gray-600">7 reviews</span>
        </div>
      </div>
 
      {}
      <div className="bg-white shadow-md rounded-2xl mt-6 p-6 w-full max-w-2xl">
        {}
        <div className="flex items-center mb-4">
          <img
            src="/Man.jpg"
            alt="avatar"
            className="w-10 h-10 rounded-full mr-1"
          />
          <div>
            <p className="font-semibold">Mario martínez</p>
            <p className="text-sm text-gray-500">5 months ago</p>
          </div>
        </div>
 
        {}
        <div className="flex text-yellow-400 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="fill-yellow-400 w-5 h-5" />
          ))}
        </div>
 
        {}
        <p className="text-gray-800 mb-3">
Their fruits and vegetables are very exquisite and fresh, I love the quality and the care with which they deliver them to me. 💪⚡.
        </p>
        <p className="text-gray-800 mb-3">
I would definitely buy their products again, especially the fresh tomatoes they sell, and I like that I can choose the category I want them in.💁‍♀️.
        </p>
        <p className="text-gray-800 mb-3">They are awesome!!😁😁😁</p>
 
        {}
        <button className="flex items-center text-gray-500 hover:text-blue-600 text-sm">
          <ThumbsUp className="w-4 h-4 mr-1" />Like
        </button>
 
        {}
        <div className="mt-5 border-l-4 border-blue-500 pl-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Response from the owner</span> – 5 months ago
          </p>
          <p className="text-gray-800 text-sm mt-1">
           😍 The credit is not just ours. With clients like you, everything is easier 🙌
          </p>
        </div>
      </div>
    </main>
  );
}
 