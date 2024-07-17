import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Button } from '../ui/button';

const TTCarousel = () => {
  return (
    <section className="pb-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="p-20 bg-[url('https://shorturl.at/5mfiU')] h-[90vh] flex items-center bg-center">
            <div className="flex flex-col w-2/3 gap-6">
              <h1 className="text-5xl font-semibold text-[#f8f9fa] bg-[#212924d5]/30 p-3 rounded-md">
                Discord TKL Mechanical Keyboard
              </h1>
              <div>
                <span className="text-[#f8f9fa] bg-[#212924d5]/30 p-3 rounded-md">
                  On sale!
                </span>
              </div>
              <div>
                <Button>Buy Now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-20 bg-[url('https://shorturl.at/6uiwf')] h-[90vh] flex items-center bg-center">
            <div className="flex flex-col w-2/3 gap-6">
              <h1 className="text-5xl font-semibold text-[#f8f9fa] bg-[#212924d5]/30 p-3 rounded-md">
                Discord Artisans
              </h1>
              <div>
                <span className="text-[#f8f9fa] bg-[#212924d5]/30 p-3 rounded-md">
                  Resin and Metal Artisans for Discord's cute mascots!
                </span>
              </div>
              <div>
                <Button>Buy Now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="p-20 bg-[url('https://shorturl.at/dZhpb')] h-[90vh] flex items-center bg-center">
            <div className="flex flex-col w-2/3 gap-6">
              <h1 className="text-5xl font-semibold text-[#f8f9fa] bg-[#212924d5]/30 p-3 rounded-md">
                Titan65 Keyboard Kit
              </h1>
              <div>
                <span className="text-[#f8f9fa] bg-[#212924d5]/30 p-3 rounded-md">
                  Aluminum or Brass cases in stunning white and black
                </span>
              </div>
              <div>
                <Button>Buy Now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TTCarousel;
