'use client'
import React from "react";
/*----Self imports----*/
import Buttons from "./models/Buttons";
import Texts from "./models/Text";
import Swipers from "./models/Swipers";
/*----Icons----*/
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FaGithub, FaWhatsapp, FaLinkedin,  } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';



export default function Home():React.JSX.Element {
  return (
    <>
        <Header />
        {/* 1st: Section: Introduction */}
        <section className="bg-tertiary py-24 dark:bg-primary ">
          <article className="max-w-2xl grid place-items-center mx-8 lg:mx-auto text-center">
            <img src="/photo.jpeg" alt="foto.png" className="size-60 lg:size-72 rounded-full" />
            <p className="text-secondary dark:text-tertiary mt-4 text-xl">Hola, soy <span className="font-bold">David Mojica</span></p>
            <h2 className="text-primary dark:text-white text-3xl md:text-5xl mt-4 font-bolder">Ingeniero de Software</h2>
            <p className="text-secondary font-light dark:text-tertiary mt-4 md:text-xl">
            Soy un desarrollador especializado en <strong className="font-bold">Aplicativos Web</strong> y <strong className="font-bold">Análisis de datos</strong>,
            con más de <strong className="font-bold">2 años</strong> de experiencia profesional en la industria del software.</p>
            <section className='text-secondary  dark:text-tertiary my-6'>
                <ul className='flex justify-center items-center gap-5 text-2xl'>
                    <li><a href="https://github.com/DavidMojica" target='_blank' className="hover:text-primary duration-300"><FaGithub/></a></li>
                    <li><a href="https://wa.me/573197750000" target='_blank' className="hover:text-primary duration-300"><FaWhatsapp/></a></li>
                    <li><a href="https://www.linkedin.com/in/david-mojica-vergara-a3898a265/" target='_blank' className="hover:text-primary duration-300"><FaLinkedin/></a></li>
                    <li><a href="mailto:davidmojicav@gmail.com" target='_blank' className="hover:text-primary duration-300"><SiGmail/></a></li>
                </ul>
            </section>
            <a href="">
              <Buttons.PrimaryButton text="abrir cv" />
            </a>
          </article>
        </section>
        {/* 2nd Section: Trusted & Swiper */}
        <section className="bg-white py-24 overflow-x-hidden dark:bg-bgdark">
          <h2 className="w-4/5 md:w-2/3 m-auto ">
            <Texts.UnderlinedTitle text="Confiado por" size="text-4xl" mdsize="text-5xl" />
          </h2>
          <article className="mt-12 md:mt-20">
            <Swipers.SwiperTrustedBy />
          </article>

        </section>

        <Footer />
    </>
  );
}
