'use client'
import React, { useState, Suspense } from "react";
/*----Self imports----*/
//----Modelos----//
import Buttons from "./models/Buttons";
import Texts from "./models/Text";
import Swipers from "./models/Swipers";
import Cards from "./models/Cards";
import ProyectosPrincipales from "./models/Proyectos/Instances";
//----Componentes----//
import Header from "./components/Header";
import Footer from "./components/Footer";
import DynamicModal from "./components/DynamicModal";
/*----Íconos----*/
import { FaGithub, FaWhatsapp, FaLinkedin,  } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import Proyecto from "./models/Proyectos/Proyecto";

export default function Home():React.JSX.Element {
  //----------Modal handlers----------//
  const [openModal, setOpenModal] = useState(false);
  const [modalData,setModalData] = useState(ProyectosPrincipales[0]);

  const handleOpenModal = (proyecto:Proyecto) => {
    setModalData(proyecto);
    setOpenModal(true);
  };

  const handleCloseModal = ():void => {
    setOpenModal(false);
    setModalData(ProyectosPrincipales[0]);
  };

  return (
    <Suspense fallback={<article>Cargando...</article>}>
        <Header />
        {/* 1st: Section: Introduction */}
        <section className="bg-tertiary py-24 dark:bg-primary ">
          <article className="max-w-2xl grid place-items-center mx-8 md:mx-auto text-center">
            <img src="/photo.jpeg" alt="foto.png" className="size-60 lg:size-72 rounded-full" />
            <p className="text-secondary dark:text-tertiary mt-4 text-xl">Hola, soy <span className="font-bold">David Mojica</span></p>
            <h2 className="text-primary dark:text-white text-3xl md:text-5xl mt-4 font-bolder">Ingeniero de Software</h2>
            <p className="text-secondary dark:text-tertiary mt-4 md:text-xl ">
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
            <Texts.UnderlinedTitle text="Confiado por" size="text-4xl md:text-5xl" />
          </h2>
          <article className="mt-12 md:mt-20">
            <Swipers.SwiperTrustedBy />
          </article>
        </section>
        {/* 3rd Section: About */}
        <section className="pb-20 xl:pt-6 bg-white dark:bg-bgdark">
          <div className="flex mx-6 sm:mx-32 md:m-auto md:w-2/3 lg:w-4/5 xl:w-2/3 lg:min-w-[984px] lg:gap-16">
            <article className="w-screen lg:w-1/2">
                <h2>
                  <Texts.UnderlinedTitle text="Sobre mí" size="text-4xl sm:text-5xl md:text-6xl" />
                </h2>
                <aside className="grid place-items-center lg:hidden">
                  <img src="/photo.jpeg" alt="" className="max-h-80 max-w-96 w-full mt-12 rounded-tl-xl rounded-tr-100 rounded-bl-100 rounded-br-xl object-cover" />
                </aside>
                <p className="text-secondary dark:text-white pt-10 lg:pt-20 text-xl tracking-wide leading-6 xl:leading-8 ">
                  Actualmente me desempeño como Desarrollador de Software Freelancer (independiente) y analista de datos. Terminé mi carrera universitaria en <a href="https://pascualbravo.edu.co/" target="_blank" className="underline">Institución Universitaria Pascual Bravo </a>
                  en Mayo de 2024, pero me he desempeñado como desarrollador independiente durante más de 2 años.
                </p>
                <h2 className="pt-12">
                  <Texts.UnderlinedTitle text="¿Qué puedo hacer?" size="text-4xl"  />
                </h2>
                <p className="text-secondary dark:text-white pt-8 text-xl tracking-wide leading-6 xl:leading-8 ">
                  Durante mi trayectoria, he creado sitios web de comercio electrónico, sistemas de control de inventario, sistemas internos para empresas, plataformas web, diseño web UX/UI, bots, aplicaciones para escritorio, páginas web,
                  sistemas de análisis de datos, dashboards y gráficos con Power BI, Metabase y otras herramientas, aplicaciones para dispositivos móviles, plataformas inmobiliarias, también he participado en la creación y desarrollo de videojuegos.
                </p>

                {/* Simplecards */}
                <section className="mt-12">
                  <article className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-3 xl:gap-6 ">
                      <Cards.SimpleCard title="Aplicaciones" message="Apps web, móviles y de escritorio con y sin bases de datos." size="w-full h-full" />
                      <Cards.SimpleCard title="Diseño UX/UI" message="Diseños intuitivos, atractivos y eficaces en sus aplicaciones." size="w-full h-full" />
                      <Cards.SimpleCard title="Big Data" message="Dashboards, historias de usuario y gráficos de sus datos recopilados." size="w-full h-full" />
                      <Cards.SimpleCard title="De 0 a 100" message="Sus aplicaciones desde cero hasta su lanzamiento en internet." size="w-full h-full" />
                      {/* <Cards.SimpleCard title="Desarrollo IOT" message="Programación para dispositivos electrónicos conectados a internet." size="w-full h-full" />
                      <Cards.SimpleCard title="100% Eficiencia" message="Sus aplicaciones serán optimizadas para ser rápidas y eficientes. " size="w-full h-full" /> */}
                  </article>

                  <Buttons.PrimaryButton text="Ver  beneficios" margin="mt-12" />
                </section>

                {/* Commercial experience */}
                <section className="py-16">
                  <h2 className="text-center xl:text-left">
                    <Texts.UnderlinedTitle text="¿Cual es mi experiencia comercial?" size="text-4xl"  />
                  </h2>
                  <article className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3 xl:gap-6 mt-12">
                    <Cards.ExperienceCard title="DJANGO" message="2+ Años" size="w-full" level={3} />
                    <Cards.ExperienceCard title="ASP.NET" message="1.5 Años" size="w-full" level={2} />
                    <Cards.ExperienceCard title="NEXT.JS" message="8 Meses" size="w-full" level={1} />
                    <Cards.ExperienceCard title="TENSORFLOW" message="< 6 Meses" size="w-full" level={0} />
                  </article>

                  <Buttons.PrimaryButton text="Ver herramientas" margin="mt-12" />
                </section>

            </article>
            <aside className="lg:w-1/2 hidden lg:block">
              <img src="/photo.jpeg" alt="" className="sticky top-36 h-124 w-136 mt-32 rounded-tl-xl rounded-tr-200 rounded-bl-200 rounded-br-xl object-cover" />
            </aside>
          </div>
        </section>
        {/* 4th Section: Projects */}
        <section className="py-20 md:py-24 bg-tertiary dark:bg-primary">
          <article className="mx-6 sm:mx-32 md:m-auto md:w-2/3 lg:w-4/5 xl:w-2/3 lg:min-w-[984px] lg:gap-16">
            <h2 className="text-5xl font-bolder dark:text-white">Proyectos</h2>
            <p className="xl:w-1/2 text-secondary dark:text-white text-xl my-6">Algunos de mis proyectos.</p>
            <article className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-3 xl:gap-6">
              {ProyectosPrincipales.map(proyecto => (
                <article className="w-full grid place-items-center cursor-pointer" onClick={()=> handleOpenModal(proyecto)}>
                  <img src={`${proyecto.getImage()}`} alt={proyecto.getName()} className="object-cover h-64"/>
                </article>
              ))}

            {openModal && (<DynamicModal onClose={handleCloseModal} proyecto={modalData} />)}
            </article>
            <div className="mt-12 flex justify-center">
              <Buttons.PrimaryButton text="ver más"  />
            </div>
          </article>
          {/* Proyectos */}
        </section>

        <Footer />
        {/* Componentes extra */}
    </Suspense>
  );
}
