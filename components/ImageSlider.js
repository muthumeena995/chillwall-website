'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
export default function ImageSlider() {

     return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="h-screen"
    >
    <SwiperSlide>
        <div className="relative h-screen">

          <img
            src="/slide1.png"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

            <div className="text-center text-white px-5">

              <h1 className="text-6xl font-bold mb-6">
                Modern Cold Storage Solutions
              </h1>

              <p className="text-2xl mb-8">
                Smart infrastructure for modern industries
              </p>

              <button className="bg-blue-700 px-8 py-4 rounded-xl text-lg">
                Explore More
              </button>

            </div>

          </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
        <div className="relative h-screen">

          <img
            src="/slide1.png"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

            <div className="text-center text-white px-5">

              <h1 className="text-6xl font-bold mb-6">
                Modern Cold Storage Solutions
              </h1>

              <p className="text-2xl mb-8">
                Smart infrastructure for modern industries
              </p>

              <button className="bg-blue-700 px-8 py-4 rounded-xl text-lg">
                Explore More
              </button>

            </div>

          </div>

        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-screen">

          <img
            src="/slide2.png"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

            <div className="text-center text-white px-5">

              <h1 className="text-6xl font-bold mb-6">
                Industrial Refrigeration Experts
              </h1>

              <p className="text-2xl mb-8">
                Energy efficient cooling systems
              </p>

            </div>

          </div>

        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-screen">

          <img
            src="/slide3.png"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

            <div className="text-center text-white px-5">

              <h1 className="text-6xl font-bold mb-6">
                Complete Turnkey Projects
              </h1>

              <p className="text-2xl mb-8">
                End-to-end industrial infrastructure
              </p>

            </div>

          </div>

        </div>
      </SwiperSlide>
       <SwiperSlide>
        <div className="relative h-screen">

          <img
            src="/slide4.png"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

            <div className="text-center text-white px-5">

              <h1 className="text-6xl font-bold mb-6">
                Complete Turnkey Projects
              </h1>

              <p className="text-2xl mb-8">
                End-to-end industrial infrastructure
              </p>

            </div>

          </div>

        </div>
      </SwiperSlide>

    </Swiper>
     
    )
}
     
  
