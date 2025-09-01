"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function LandingPage() {
  return (
    <main className="bg-white">
      
     
      <section className="w-full max-w-5xl mx-auto my-6">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-xl shadow-md"
        >
          <SwiperSlide>
            <img
              src="/Banner1 orange.png"
              alt="Fruits banner"
              className="w-full h-56 md:h-72 object-cover rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Banner2 vegetables.png"
              alt="Fresh fruits"
              className="w-full h-56 md:h-72 object-cover rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/Banner3 .png"
              alt="Market banner"
              className="w-full h-56 md:h-72 object-cover rounded-xl"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      <style jsx>{`
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: #55A605;
          font-size: 20px;
          width: 32px;
          height: 32px;
        }
        :global(.swiper-button-next:hover),
        :global(.swiper-button-prev:hover) {
          color: #3e7d04;
        }
        :global(.swiper-pagination-bullet) {
          background: #d1d5db;
          opacity: 0.7;
        }
        :global(.swiper-pagination-bullet-active) {
          background: #55A605;
          opacity: 1;
        }
      `}</style>

     
      <section className="text-center px-6 py-10">
        <h2 className="text-2xl md:text-5xl font-bold text-gray-900">
          They faced the same, <br /> we provided the solution
        </h2>
      </section>

      
      <section className="flex justify-center gap-6 px-6 mb-30">
        
        {["/person1.jpg", "/woman.jpeg", "/man.jpeg"].map((img, i) => (
          <div key={i} className="relative">
            <img
              src={img}
              alt={`Person ${i + 1}`}
              className="w-50 h-50 rounded-lg object-cover"
            />
            <button className="absolute bottom-2 right-2 bg-[#55A605] text-white w-6 h-6 rounded-full flex items-center justify-center">
              +
            </button>
          </div>
        ))}
      </section>

      
      <section className="text-center px-6 py-12 mb-30">
        <h2 className="text-2xl md:text-5xl font-bold text-gray-900">
          Everything we offer, <br /> in one place
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
          <div className="border rounded-lg bg-white shadow hover:shadow-lg transition-transform hover:scale-105 p-6 flex flex-col items-center text-center">
            <img src="/shipment.svg" alt="Shipment" className="w-20 h-20 mb-4" />
            <h3 className="font-semibold text-lg">Shipments</h3>
            <p className="text-gray-600 text-sm mt-2">
              Reliable shipping with quality guaranteed.
            </p>
          </div>

          <div className="border rounded-lg bg-white shadow hover:shadow-lg transition-transform hover:scale-105 p-6 flex flex-col items-center text-center">
            <img src="/deal.svg" alt="Deals" className="w-20 h-20 mb-4" />
            <h3 className="font-semibold text-lg">Deals</h3>
            <p className="text-gray-600 text-sm mt-2">
              Products guarantee and assured quality.
            </p>
          </div>

          <div className="border rounded-lg bg-white shadow hover:shadow-lg transition-transform hover:scale-105 p-6 flex flex-col items-center text-center">
            <img src="/logistic.svg" alt="Logistic" className="w-20 h-20 mb-4" />
            <h3 className="font-semibold text-lg">Logistic</h3>
            <p className="text-gray-600 text-sm mt-2">
              Trouble-free agricultural products managed.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        
        <h2 className="text-2xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Logistical solutions <br /> for everyone
        </h2>

        <div className="max-w-lg mx-auto border rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-end gap-6 bg-white">
          <img
            src="/Carlosss.png"
            alt="Logistics partner"
            className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover self-end"
          />
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-2">
              Your logistics partner for wholesale trade
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              At AgroRed, we provide reliable and efficient logistics that
              facilitate the connection between wholesale buyers and sellers. Our
              service ensures your products arrive on time and in optimal condition,
              supporting the growth and trust of your business.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
