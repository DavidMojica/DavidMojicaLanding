'use client'
import React from "react";
/*----Self imports----*/
import Buttons from "./models/Buttons";
import Texts from "./models/Text";
import Swipers from "./models/Swipers";
import Cards from "./models/Cards";
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
          <article className="max-w-2xl grid place-items-center mx-8 md:mx-auto text-center">
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
        <section className="bg-white py-12 xl:py-24 overflow-x-hidden dark:bg-bgdark">
          <h2 className="w-4/5 md:w-2/3 m-auto ">
            <Texts.UnderlinedTitle text="Confiado por" size="text-4xl" mdsize="text-5xl" />
          </h2>
          <article className="mt-12 md:mt-20">
            <Swipers.SwiperTrustedBy />
          </article>
        </section>
        {/* 3rd Section: About */}
        <section className="pb-20 xl:pt-12 bg-white dark:bg-bgdark">
          <div className="flex md:m-auto md:w-2/3 lg:w-4/5 xl:w-2/3 lg:min-w-[984px] mx-6 lg:gap-16">
            <article className="w-screen lg:w-1/2">
                <h2>
                  <Texts.UnderlinedTitle text="Sobre mí" size="text-4xl" mdsize="text-5xl" />
                </h2>
                <aside className="grid place-items-center lg:hidden">
                  <img src="/photo.jpeg" alt="" className="max-h-80 max-w-96 w-full mt-12 rounded-tl-xl rounded-tr-100 rounded-bl-100 rounded-br-xl object-cover" />
                </aside>
                <p className="text-secondary pt-10 lg:pt-20 text-xl tracking-wide leading-6 xl:leading-8 ">
                  Actualmente me desempeño como Desarrollador de Software Freelancer (independiente) y analista de datos. Terminé mi carrera universitaria en <a href="https://pascualbravo.edu.co/" target="_blank" className="underline">Institución Universitaria Pascual Bravo </a>
                  en Mayo de 2024, pero me he desempeñado como desarrollador independiente durante más de 2 años.
                </p>
                <h2 className="pt-12">
                  <Texts.UnderlinedTitle text="¿Qué puedo hacer?" size="text-4xl" mdsize="text-5xl" />
                </h2>
                <p className="text-secondary pt-8 text-xl tracking-wide leading-6 xl:leading-8 ">
                  Durante mi trayectoria, he creado sitios web de comercio electrónico, sistemas de control de inventario, sistemas internos para empresas, plataformas web, diseño web UX/UI, bots, aplicaciones para escritorio, páginas web,
                  sistemas de análisis de datos, dashboards y gráficos con Power BI, Metabase y otras herramientas, aplicaciones para dispositivos móviles, plataformas inmobiliarias, también he participado en la creación y desarrollo de videojuegos.
                </p>

                {/* Simplecards */}
                <section className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3 xl:gap-6 mt-12">
                    <Cards.SimpleCard title="Aplicaciones" message="Apps web, móviles y de escritorio con y sin bases de datos." size="w-full h-full" />
                    <Cards.SimpleCard title="Diseño UX/UI" message="Diseños intuitivos, atractivos y eficaces en sus aplicaciones." size="w-full h-full" />
                    <Cards.SimpleCard title="Big Data" message="Dashboards, historias de usuario y gráficos de sus datos recopilados." size="w-full h-full" />
                    <Cards.SimpleCard title="Desarrollo IOT" message="Programación para dispositivos electrónicos conectados a internet." size="w-full h-full" />
                    <Cards.SimpleCard title="De 0 a 100" message="Desarrollo tu aplicacion desde cero hasta su lanzamiento en internet." size="w-full h-full" />
                    <Cards.SimpleCard title="100% Eficiencia" message="Tus aplicaciones estarán optimizadas para ser eficientes y veloces." size="w-full h-full" />
                </section>

            </article>
            <aside className="lg:w-1/2 hidden lg:block">
              <img src="/photo.jpeg" alt="" className="sticky top-36 h-124 w-136 mt-32 rounded-tl-xl rounded-tr-200 rounded-bl-200 rounded-br-xl object-cover" />
            </aside>
          </div>
        </section>

        <Footer />
    </>
  );
}
