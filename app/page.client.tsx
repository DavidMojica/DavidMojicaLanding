'use client';
import React, { useState, Suspense } from "react";
import FormContactMe from "./forms/ContactMe/FormContactMe";
import Link from "next/link";
import Image from "next/image";
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
/*----Variables-----*/
import {img_principal_width, img_principal_height, img_banner_width, img_logo_width, img_custom_width, img_custom_height} from './variables'
/*----Íconos----*/
import { FaGithub, FaWhatsapp, FaLinkedin,  } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import Proyecto from "./models/Proyectos/Proyecto";



export default function HomeClient():React.JSX.Element {
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
            <Image src="/photo.jpeg" alt="foto.png" className="size-60 lg:size-72 rounded-full" width={img_principal_width} height={img_principal_height} />
            <p className="text-secondary dark:text-tertiary mt-4 text-xl"><span className="font-bold">David Mojica</span>, freelancer en</p>
            <h2 className="text-primary dark:text-white text-3xl md:text-5xl mt-4 font-bolder">Desarrollo de Software</h2>
            <p className="text-secondary dark:text-tertiary mt-4 md:text-xl ">
            Creación, mantenimiento y diseño de soluciones tecnológicas a la medida con más de <strong>2 años de experiencia</strong> en la industria del software.
            </p>
            <section className='text-secondary  dark:text-tertiary my-6'>
                <ul className='flex justify-center items-center gap-5 text-2xl'>
                    <li><a href="https://github.com/DavidMojica" target='_blank' className="hover:text-primary duration-300"><FaGithub/></a></li>
                    <li><a href="https://wa.me/573197750000" target='_blank' className="hover:text-primary duration-300"><FaWhatsapp/></a></li>
                    <li><a href="https://www.linkedin.com/in/david-mojica-vergara-a3898a265/" target='_blank' className="hover:text-primary duration-300"><FaLinkedin/></a></li>
                    <li><a href="mailto:davidmojicav@gmail.com" target='_blank' className="hover:text-primary duration-300"><SiGmail/></a></li>
                </ul>
            </section>
            <a href="#trusted_by">
              <Buttons.PrimaryButton text="Empezar" />
            </a>
          </article>
        </section>
        {/* 2nd Section: Trusted & Swiper */}
        <section className="bg-white py-12 xl:py-24 overflow-x-hidden dark:bg-bgdark" id="trusted_by">
          <h2 className="w-4/5 md:w-2/3 m-auto ">
            <Texts.UnderlinedTitle text="Confían en mí" size="text-4xl md:text-5xl" />
          </h2>
          <article className="mt-12 md:mt-20">
            <Swipers.SwiperTrustedBy />
          </article>
        </section>
        {/* 3rd Section: About */}
        <section className="pb-20 xl:pt-6 bg-white dark:bg-bgdark">
          <div className="flex mx-6 sm:mx-32 md:m-auto md:w-2/3 lg:w-4/5 xl:w-2/3 lg:min-w-[984px] lg:gap-16">
            <article className="w-screen lg:w-1/2">
                <h2 className="pt-12">
                  <Texts.UnderlinedTitle text="Servicios" size="text-4xl"  />
                </h2>
                {/* Simplecards */}
                <section className="mt-12">
                  <article className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-3 xl:gap-6 ">
                    <Cards.SimpleCard title="Aplicaciones" message="Apps web, móviles y de escritorio con y sin bases de datos." size="w-full h-full" />
                    <Cards.SimpleCard title="Landing Pages" message="Paginas web simples con llamado a la acción claro y diseño atractivo." size="w-full h-full" />
                    <Cards.SimpleCard title="Ecommerce" message="Integre pagos en línea y en tiempo real a sus aplicaciones." size="w-full h-full" />
                    <Cards.SimpleCard title="Bases de Datos" message="Integración de bases de datos a sus aplicaciones y servicios." size="w-full h-full" />
                    <Cards.SimpleCard title="API's" message="Integración de API's a sus aplicaciones y servicios." size="w-full h-full" />
                    <Cards.SimpleCard title="Big Data" message="Dashboards, historias de usuario y gráficos de sus datos recopilados." size="w-full h-full" />
                  </article>

                  <Link href={'/services'}>
                    <Buttons.PrimaryButton text="Ver más" margin="mt-12" />
                  
                  </Link>
                </section>

                {/* Commercial experience */}
                <section className="py-16">
                  <h2 className="text-center xl:text-left">
                    <Texts.UnderlinedTitle text="Herramientas / Lenguajes" size="text-4xl"  />
                  </h2>
                  <p className="text-secondary dark:text-white mt-4 text-xl">
                    Se desarrolla bajo la herramienta o lenguaje que prefieras.
                  </p>
                  <article className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3 xl:gap-6 mt-12">
                    <Cards.ExperienceCard title="DJANGO" message="2+ Años" size="w-full" level={3} />
                    <Cards.ExperienceCard title="ASP.NET" message="1.5 Años" size="w-full" level={2} />
                    <Cards.ExperienceCard title="NEXT.JS" message="8 Meses" size="w-full" level={1} />
                    <Cards.ExperienceCard title="TENSORFLOW" message="< 6 Meses" size="w-full" level={0} />
                  </article>
                  <Link href={'/services#benefits'}>
                    <Buttons.PrimaryButton text="Ver más" margin="mt-12" />
                  </Link>
                  <h2 className="my-8">
                  <Texts.UnderlinedTitle text="Sobre mí" size="text-4xl md:text-5xl" />
                  </h2>
                  <aside className="grid place-items-center lg:hidden">
                    <Image src="/photo.jpeg" alt="" className="max-h-80 max-w-96 w-full mt-12 rounded-tl-xl rounded-tr-100 rounded-bl-100 rounded-br-xl object-cover" width={img_logo_width} height={img_logo_width} />
                  </aside>
                  <p className="text-secondary dark:text-white pt-10 lg:pt-0 text-xl tracking-wide leading-6 xl:leading-8 ">
                    Actualmente me desempeño como Desarrollador de Software Freelancer (independiente) y analista de datos. Terminé mi carrera universitaria en <a href="https://pascualbravo.edu.co/" target="_blank" className="underline">Institución Universitaria Pascual Bravo </a>
                    en Mayo de 2024, pero me he desempeñado como desarrollador independiente durante más de 2 años.
                  </p>
                </section>

            </article>
            <aside className="lg:w-1/2 hidden lg:block">
              <Image src="/photo.jpeg" alt="" className="sticky top-36 h-124 w-136 mt-32 rounded-tl-xl rounded-tr-200 rounded-bl-200 rounded-br-xl object-cover" width={img_banner_width} height={img_banner_width} />
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
                <article className="w-full grid place-items-center cursor-pointer " onClick={()=> handleOpenModal(proyecto)}>
                  <Image src={`${proyecto.getImage()}`} alt={proyecto.getName()} className="object-cover h-64 rounded-xl" width={img_custom_width} height={img_custom_height}/>
                </article>
              ))}

            {openModal && (<DynamicModal onClose={handleCloseModal} proyecto={modalData} />)}
            </article>
            <div className="mt-12 flex justify-center">
              <Link href={'/projects'}>
                <Buttons.PrimaryButton text="ver más"  />
              </Link>
            </div>
          </article>
        </section>
        {/* 5th Section: Contact Me */}
        <section className="py-20 md:py-24 bg-white dark:bg-bgdark">
          <article className="w-10/12 lg:w-8/12 xl:w-5/12 m-auto">
              <Texts.UnderlinedTitle text="Contáctame" size="text-4xl md:text-5xl" />
              <section className="shadow-md dark:shadow-gray-500 mt-16 p-6 ">
                <h3 className="text-4xl md:text-3xl text-primary dark:text-white tracking-tight">
                  ¿Está interesado en trabajar conmigo? <span className="font-bolder">Házmelo saber</span>
                </h3>
                <FormContactMe />
              </section>

              <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                  <Cards.ExperienceCard title="+57 319 775 0000" message="Contacto" size="w-full" level={4} />
                  <Cards.ExperienceCard title="davidmojicav@gmail.com" message="O también puedes escribirme al correo." size="w-full" level={5}/>
                  <div className="lg:col-span-2">
                    <Cards.ExperienceCard title="Medellín - Colombia" message="Horario de atención: Lunes a Sábado 8am - 6pm" size="w-full" level={6} />
                  </div>
              </section>
          </article>
        </section>
        <Footer />
        {/* Componentes extra */}
    </Suspense>
  );
}
