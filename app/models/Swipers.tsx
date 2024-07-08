import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
class Swipers{
    constructor(){}

    public static SwiperTrustedBy():React.JSX.Element{
        return(
            <Swiper
            speed={8000}
            spaceBetween={40}
            direction={'horizontal'}
            mousewheel={{invert:true}}
            className="w-screen h-48"
            
            autoplay={{
                delay:0,
            }}
            loop={true}
            
            breakpoints={{
                320:{
                    slidesPerView: 2
                },
                640:{
                    slidesPerView: 3
                },
                768:{
                    slidesPerView:4
                },
                1024:{
                    slidesPerView:5
                },
                1280:{
                    slidesPerView:6
                }
            }}
            modules={[Autoplay]}
            
            >
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <img src="/logo_bello.png" alt="" className="object-contain h-full w-full" />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <img src="/logo_gsv.png" alt="" className="object-contain h-full w-full" />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <img src="/logo_ducaplast.png" alt="" className="object-contain h-full w-full" />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <img src="/logo_arriendofinca.png" alt="" className="object-contain h-full w-full" />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <img src="/logo_bello.png" alt="" className="object-contain h-full w-full" />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <img src="/logo_gsv.png" alt="" className="object-contain h-full w-full" />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <img src="/logo_ducaplast.png" alt="" className="object-contain h-full w-full" />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <img src="/logo_arriendofinca.png" alt="" className="object-contain h-full w-full" />
                </SwiperSlide>
            </Swiper>
        )
    }

}

export default Swipers;