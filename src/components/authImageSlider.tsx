import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import hotel1 from "@/assets/hotels/1.webp";
import hotel2 from "@/assets/hotels/2.webp";
import hotel3 from "@/assets/hotels/3.webp";
import hotel4 from "@/assets/hotels/4.webp";
import { Autoplay, EffectFade } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-fade';
const AuthImageSlider = () => {
    const hotelImages = [hotel1, hotel2, hotel3, hotel4];
    return(
        <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-full w-full"
          >
            {hotelImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full">
                  <img
                    src={image}
                    alt={`Hotel ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
    );
}

export default AuthImageSlider;