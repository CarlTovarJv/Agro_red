"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function LandingPage() {
    return (
        <main className="bg-[#FAFAFA]">


            <section className="w-full">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="h-[400px] md:h-[600px] w-full"
                >
                    <SwiperSlide>
                        <div className="relative h-full w-full flex items-center">
                            <img
                                src="/Banner1 (1).png"
                                alt="Banner 1"
                                className="absolute inset-0 w-full h-full object-cover "
                            />
                            <div className="relative z-10 px-18 max-w-md md:max-w-lg text-left">
                                <span className="bg-[#FFD84D] text-sm font-bold px-3 py-1 rounded">
                                    TECHNOLOGY
                                </span>
                                <h2 className="text-3xl md:text-5xl font-bold mt-4">
                                    Innovation
                                </h2>
                                <p className="text-lg mt-2">That makes the field grow</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative h-full w-full flex items-center">
                            <img
                                src="/Banner2.png"
                                alt="Banner 2"
                                className="absolute inset-0 w-full h-full object-cover "
                            />
                            <div className="relative z-10 px-18 max-w-md md:max-w-lg text-left">
                                <span className="bg-[#FFD84D] text-sm font-bold px-3 py-1 rounded">
                                    NEW ARRIVAL
                                </span>
                                <h2 className="text-3xl md:text-5xl font-bold mt-4">
                                    Fresh Vegetables
                                </h2>
                                <p className="text-lg mt-2">
                                    Get the best quality veggies delivered
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative h-full w-full flex items-center">
                            <img
                                src="/Banner3 frutas.png"
                                alt="Banner 3"
                                className="absolute inset-0 w-full h-full object-cover "
                            />
                            <div className="relative z-10 px-18 max-w-md md:max-w-lg text-left">
                                <span className="bg-[#FFD84D] text-sm font-bold px-3 py-1 rounded">
                                    QUALITY
                                </span>
                                <h2 className="text-3xl md:text-5xl font-bold mt-4">
                                    The best quality
                                </h2>
                                <p className="text-lg mt-2">Traight to you</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #55A605 !important;
            width: 35px;
            height: 35px;
          }
 
          .swiper-pagination-bullet {
            background: #55A605 !important;
            opacity: 0.4;
          }
 
          .swiper-pagination-bullet-active {
            background: #55A605 !important;
            opacity: 1;
          }
        `}</style>
            </section>


            <section className="px-6 py-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="relative bg-pink-100 rounded-xl p-6 flex items-center justify-between overflow-hidden">
                        <div className="z-10">
                            <h3 className="text-xl font-bold text-gray-900">Super Healthy</h3>
                            <p className="text-gray-700 mt-2">Vital Ingredients</p>
                            <button className="mt-4 bg-[#55A605] text-white px-4 py-2 rounded-full font-medium hover:bg-green-700 transition">
                                Shop Now
                            </button>
                        </div>
                        <img
                            src="/beanssack.png"
                            alt="Super Healthy"
                            className="absolute bottom-0 right-4 w-40 h-auto object-contain"
                        />
                    </div>

                    <div className="relative bg-yellow-100 rounded-xl p-6 flex items-center justify-between overflow-hidden">
                        <div className="z-10">
                            <h3 className="text-xl font-bold text-gray-900">Fresh Fruits</h3>
                            <p className="text-gray-700 mt-2">Guaranteed Freshness</p>
                            <button className="mt-4 bg-[#55A605] text-white px-4 py-2 rounded-full font-medium hover:bg-green-700 transition">
                                Shop Now
                            </button>
                        </div>
                        <img
                            src="./multifrutas.png"
                            alt="Fresh Fruits"
                            className="absolute bottom-0 right-4 w-44 h-auto object-contain"
                        />
                    </div>

                    <div className="relative bg-green-100 rounded-xl p-6 flex items-center justify-between overflow-hidden">
                        <div className="z-10">
                            <h3 className="text-xl font-bold text-gray-900">Fresh Vegetables</h3>
                            <p className="text-gray-700 mt-2">Flavors of the Earth</p>
                            <button className="mt-4 bg-[#55A605] text-white px-4 py-2 rounded-full font-medium hover:bg-green-700 transition">
                                Shop Now
                            </button>
                        </div>
                        <img
                            src="./veggies.png"
                            alt="Fresh Vegetables"
                            className="absolute bottom-0 right-4 w-48 h-auto object-contain"
                        />
                    </div>

                    <div className="relative bg-blue-100 rounded-xl p-6 flex items-center justify-between overflow-hidden">
                        <div className="z-10">
                            <h3 className="text-xl font-bold text-gray-900">100% Quality</h3>
                            <p className="text-gray-700 mt-2">The best for you</p>
                            <button className="mt-4 bg-[#55A605] text-white px-4 py-2 rounded-full font-medium hover:bg-green-700 transition">
                                Shop Now
                            </button>
                        </div>
                        <img
                            src="/canasta.png"
                            alt="100% Quality"
                            className="absolute bottom-0 right-4 w-40 h-auto object-contain"
                        />
                    </div>
                </div>
            </section>


            <section className="w-full mb-15 px-6 flex justify-center rounded-lg mt-15">
                <img src="/Reliability2.png" width={1150} alt="Banner" className="rounded-xl" />
            </section>


            <section className="px-6 py-20 bg-[#FAFAFA]">
                <h2 className="text-2xl md:text-5xl font-bold text-center mb-12">
                    Everything we offer, in one place
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Card 1 */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                        <img
                            src="/truck.jpg" 
                            alt="Shipments"
                            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-xl font-bold">Shipments</h3>
                            <p className="mt-2 text-sm max-w-xs">
                                Reliable shipping with quality guaranteed.
                            </p>
                            <button className="mt-4 bg-[#D7FF72] text-black text-sm px-4 py-2 rounded-full font-medium hover:bg-[#b5e65f] transition">
                                Learn more →
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                        <img
                            src="/hands.jpg" // Usa otra imagen real (ej. agricultores, mercado, trato)
                            alt="Deals"
                            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-xl font-bold">Deals</h3>
                            <p className="mt-2 text-sm max-w-xs">
                                Products guarantee and assured quality.
                            </p>
                            <button className="mt-4 bg-[#D7FF72] text-black text-sm px-4 py-2 rounded-full font-medium hover:bg-[#b5e65f] transition">
                                Learn more →
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                        <img
                            src="/logis.jpg" 
                            alt="Logistic"
                            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <h3 className="text-xl font-bold">Logistic</h3>
                            <p className="mt-2 text-sm max-w-xs">
                                Trouble-free agricultural products managed.
                            </p>
                            <button className="mt-4 bg-[#D7FF72] text-black text-sm px-4 py-2 rounded-full font-medium hover:bg-[#b5e65f] transition">
                                Learn more →
                            </button>
                        </div>
                    </div>
                </div>
            </section>





            <section className="px-6 py-20">
                <h2 className="text-2xl md:text-5xl font-bold text-center text-gray-900 mb-12">
                    Logistical solutions <br /> for everyone
                </h2>

                <div className="flex flex-col md:flex-row items-start justify-center gap-55 max-w-5xl mx-auto">
                    <div className="bg-orange-500 rounded-xl relative w-full md:w-full min-h-[548px] flex items-center justify-center overflow-visible">
                        <img
                            src="/hombrecanasta.png"
                            alt="Logistics partner"
                            className="w-300 h-auto object-contain relative right-[-115px] top-[80px] z-10"
                        />
                    </div>

                    <div className="relative bg-[#55A605] rounded-xl flex items-center justify-center p-6 w-full md:w-full min-h-[548px]">
                        <div className="absolute top-30 -left-32 bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-sm w-[90%]">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">
                                Your logistics partner for wholesale trade
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                At <span className="font-semibold">AgroRed</span>, we provide
                                reliable and efficient logistics that facilitate the connection
                                between wholesale buyers and sellers. Our service ensures your
                                products arrive on time and in optimal condition, supporting the
                                growth and trust of your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

