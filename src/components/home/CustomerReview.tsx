import { reviews } from '@/data/customerReview';

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from '../ui/SectionHeading';

const CustomerReview = () => {
  return (
    <section className="py-20 pb-20">
      <SectionHeading heading="Customer Reviews" />
      <div
        className="bg-center bg-no-repeat bg-cover"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)),url('https://kono.store/cdn/shop/files/GMK_Firefly_-_Prophet_1_3be17f6c-b936-40db-b561-2fdc6463a6f0_1600x600_crop_center.png?v=1631814814&quot')",
        }}
      >
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
          {reviews?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex justify-center h-[70vh] items-center">
                <div className="flex flex-col items-center justify-center gap-2 bg-[#212529]/70 p-10 rounded-md">
                  <div className="avatar">
                    <div className="rounded-full w-14 h-14 ring ring-primary ring-offset-2 ring-offset-base-100">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src={item.img}
                        alt="user photo"
                      />
                    </div>
                  </div>

                  <Rating
                    style={{ maxWidth: 180 }}
                    value={item.rating}
                    readOnly
                  />

                  <p className="text-[#f8f9fa] opacity-80">
                    {item.review}
                  </p>
                  <p className="text-xl font-semibold text-[#f8f9fa]">
                    -{item.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerReview;
