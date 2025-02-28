import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { img_logo_height, img_logo_width } from "../variables";

import Cards from "./Cards";

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
                    <Image src="/logo_bello.png" alt="bello.png" className="object-contain h-full w-full" width={img_logo_width} height={img_logo_height} />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <Image src="/logo_gsv.png" alt="gsv.png" className="object-contain h-full w-full" width={img_logo_width} height={img_logo_height} />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <Image src="/logo_ducaplast.png"  alt="ducaplast.png" className="object-contain h-full w-full" width={img_logo_width} height={img_logo_height} />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <Image src="/logo_arriendofinca.png" alt="arriendifinca.png" className="object-contain h-full w-full" width={img_logo_width} height={img_logo_height} />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <Image src="/logo_davidastore.png" alt="davidastore.png" className="object-contain h-full w-full" width={img_logo_width} height={img_logo_height} />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <Image src="/logo_laproff.jpeg" alt="Laproff" className="object-contain h-full w-full" width={img_logo_width} height={img_logo_height} />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <Image src="/logo_bello.png" alt="bello.png" className="object-contain h-full w-full" width={img_logo_width} height={img_logo_height} />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <Image src="/logo_gsv.png" alt="gsv.png" className="object-contain h-full w-full" width={img_logo_width} height={img_logo_height} />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <Image src="/logo_ducaplast.png"  alt="ducaplast.png" className="object-contain h-full w-full" width={img_logo_width} height={img_logo_height} />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <Image src="/logo_arriendofinca.png" alt="arriendifinca.png" className="object-contain h-full w-full" width={img_logo_width} height={img_logo_height} />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <Image src="/logo_davidastore.png" alt="davidastore.png" className="object-contain h-full w-full" width={img_logo_width} height={img_logo_height} />
                </SwiperSlide>
                <SwiperSlide className="bg-white flex items-center justify-center rounded-xl">
                    <Image src="/logo_laproff.jpeg" alt="Laproff" className="object-contain h-full w-full" width={img_logo_width} height={img_logo_height} />
                </SwiperSlide>

            </Swiper>
        )
    }

    public static SwiperBeneficios():React.JSX.Element{

        return(
            <Swiper
            speed={24000}
            spaceBetween={40}
            direction={'horizontal'}
            mousewheel={{invert:true}}
            loop={true}
            autoplay={{
                delay:0,
            }}

            modules={[Autoplay]}
            
            breakpoints={{
                640:{
                    slidesPerView: 1
                },
                850:{
                    slidesPerView:2
                },
                1536:{
                    slidesPerView:4

                }
            }}
            > 
                <SwiperSlide className="bg-white dark:bg-bgdark flex items-center justify-center rounded-xl my-12">
                    <Cards.SimpleCard title="De 0 a 100" message="Sus aplicaciones desde cero hasta su lanzamiento en internet." size="w-full h-full" />                </SwiperSlide>
                <SwiperSlide className="bg-white dark:bg-bgdark flex items-center justify-center rounded-xl my-12">
                    <Cards.SimpleCard title="Optimización" message="Sus aplicaciones serán optimizadas para ser rápidas y eficientes. " size="w-full h-full" />
                </SwiperSlide>
                <SwiperSlide className="bg-white dark:bg-bgdark flex items-center justify-center rounded-xl my-12">
                    <Cards.SimpleCard title="Garantizado" message="Garantía temporal contra problemas de programación o Bugs. " size="w-full h-full" />
                </SwiperSlide>
                <SwiperSlide className="bg-white dark:bg-bgdark flex items-center justify-center rounded-xl my-12">
                    <Cards.SimpleCard title="Adaptación" message="Sus aplicaciones lucirán bien desde cualquier dispositivo." size="w-full h-full" />
                </SwiperSlide>
                <SwiperSlide className="bg-white dark:bg-bgdark flex items-center justify-center rounded-xl my-12">
                    <Cards.SimpleCard title="Soporte" message="Capacitación para los involucrados en el uso de la App." size="w-full h-full" />
                </SwiperSlide>
                <SwiperSlide className="bg-white dark:bg-bgdark flex items-center justify-center rounded-xl my-12">
                    <Cards.SimpleCard title="Guías" message="Manual de usuario (Incluído). Manual técnico (A solicitar)" size="w-full h-full" />
                </SwiperSlide>

            </Swiper>
        )
    }
}

export default Swipers;