'use client'
import React from "react";
/*----Icons----*/
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FaGithub, FaWhatsapp, FaLinkedin,  } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

export default function Home():React.JSX.Element {
  return (
    <>
        <Header />
        <section className="bg-tertiary py-24 dark:bg-primary ">
          <article className="max-w-2xl grid place-items-center mx-8 lg:mx-auto text-center">
            <img src="/photo.jpeg" alt="foto.png" className="size-60 lg:size-80 rounded-full" />
            <p className="text-secondary dark:text-tertiary mt-4 text-xl">Hola, soy <span className="font-bold">David Mojica</span></p>
            <h2 className="text-primary dark:text-white text-3xl md:text-5xl mt-4 font-bolder">Desarrollador Web / Analista de datos</h2>
            <p className="text-secondary font-light dark:text-tertiary mt-4 md:text-xl">Soy desarrollador enfocado en <strong className="font-bold">Aplicativos Web</strong> y <strong className="font-bold">Análisis de datos</strong>,
            con más de <strong className="font-bold">2 años</strong> de experiencia comercial en la industria del software.</p>
            <section className='text-secondary  dark:text-tertiary mt-4'>
                <ul className='flex justify-center items-center gap-5 text-2xl'>
                    <li><a href="https://github.com/DavidMojica" target='_blank'><FaGithub/></a></li>
                    <li><a href="https://wa.me/573197750000" target='_blank'><FaWhatsapp/></a></li>
                    <li><a href="https://www.linkedin.com/in/david-mojica-vergara-a3898a265/" target='_blank'><FaLinkedin/></a></li>
                    <li><a href="mailto:davidmojicav@gmail.com" target='_blank'><SiGmail/></a></li>
                </ul>
            </section>
            <a href="" className="mt-4 py-2 px-12 dark:text-white rounded-3xl border-2 border-black dark:border-white border-solid hover:bg-primary hover:text-white duration-300 text-xl tracking-wider">Abrir CV</a>
          </article>
        </section>
        <Footer />
    </>
  );
}
