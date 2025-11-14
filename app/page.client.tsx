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
import { ProyectosPrincipales } from "./models/Proyectos/Instances";
//----Componentes----//
import Header from "./components/Header";
import Footer from "./components/Footer";
import DynamicModal from "./components/DynamicModal";
/*----Variables-----*/
import {img_principal_width, img_principal_height, img_banner_width, img_logo_width, img_custom_width, img_custom_height} from './variables'
/*----Íconos----*/
import { FaGithub, FaWhatsapp, FaLinkedin,  } from 'react-icons/fa6';
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
            <Image src="/photo_temp.jpg" alt="foto.png" className="size-60 lg:size-72 rounded-full object-cover" width={img_principal_width} height={img_principal_height} />
            <h2 className="text-primary dark:text-white text-3xl md:text-4xl mt-4 font-bolder">David Mojíca <br /> Desarrollo Web | IA</h2>
            <p className="text-secondary dark:text-tertiary mt-4 md:text-xl ">
              Desarrollador Fullstack especializado en <strong>IA</strong> y en la implementación de soluciones inteligentes.
            </p>
            <section className='text-secondary  dark:text-tertiary my-6'>
                <ul className='flex justify-center items-center gap-5 text-2xl'>
                    <li><a href="https://github.com/DavidMojica" target='_blank' className="hover:text-primary dark:text-secondary dark:hover:text-white duration-300"><FaGithub/></a></li>
                    {/* <li><a href="https://wa.me/573197750000" target='_blank' className="hover:text-primary dark:text-secondary dark:hover:text-white duration-300"><FaWhatsapp/></a></li> */}
                    <li><a href="https://www.linkedin.com/in/david-mojica-899384390/" target='_blank' className="hover:text-primary dark:text-secondary dark:hover:text-white duration-300"><FaLinkedin/></a></li>
                    {/* <li><a href="mailto:davidmojicav@gmail.com" target='_blank' className="hover:text-primary dark:text-secondary dark:hover:text-white duration-300"><SiGmail/></a></li> */}
                </ul>
            </section>
            <Link href={'/projects'}>
                <Buttons.PrimaryButton text="Ver proyectos"  />
              </Link>
          </article>
        </section>
        {/* 2nd Section: Trusted & Swiper */}
        <section className="bg-white py-12 xl:py-24 overflow-x-hidden dark:bg-bgdark" id="trusted_by">
          <h2 className="w-4/5 md:w-2/3 m-auto ">
            <Texts.UnderlinedTitle text="Clientes" size="text-4xl md:text-5xl" />
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
                    <Cards.SimpleCard title="Aplicaciones" message="Desarrollo de aplicaciones web, escritorio y móviles hechas a la medida de tu negocio." size="w-full h-full" />
                    <Cards.SimpleCard title="IA" message="Chatbots, asistentes y agentes inteligentes que automatizan procesos y mejoran la competitividad." size="w-full h-full" />
                    <Cards.SimpleCard title="Pasarelas de pago" message="Integra pagos en línea y lleva tu negocio a un entorno digital, seguro y visible." size="w-full h-full" />
                    <Cards.SimpleCard title="Análisis de datos" message="Obtén informacion valiosa para tu empresa a partir del analisis de tus datos existentes." size="w-full h-full" />
                    <Cards.SimpleCard title="Portafolios" message="Muestra tu trabajo al mundo con un sitio profesional." size="w-full h-full" />
                    <Cards.SimpleCard title="APIs" message="Desarrollo e integración de APIs para conectar sistemas, compartir datos y automatizar procesos." size="w-full h-full" />
                  </article>

                  <Link href={'/services'}>
                    <Buttons.PrimaryButton text="Más servicios" margin="mt-12" />
                  
                  </Link>
                </section>

                {/* Commercial experience */}
                <section className="py-16">
                  <h2 className="text-center xl:text-left">
                    <Texts.UnderlinedTitle text="Tecnologías y lenguajes" size="text-4xl"  />
                  </h2>
                  <p className="text-secondary dark:text-white mt-4 text-xl">
                    Trabajo con diferentes lenguajes y frameworks según las necesidades de tu proyecto.
                  </p>
                  <article className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3 xl:gap-6 mt-12">
                    <Cards.ExperienceCard title="DJANGO" message="2 Años" size="w-full" level={3} />
                    <Cards.ExperienceCard title=".NET" message="1.5 Años" size="w-full" level={2} />
                    <Cards.ExperienceCard title="BLAZOR" message="1.5 Años" size="w-full" level={2} />
                    <Cards.ExperienceCard title="NEXT.JS" message="1.5 Años" size="w-full" level={2} />
                  </article>
                  <Link href={'/services#benefits'}>
                    <Buttons.PrimaryButton text="Ver más" margin="mt-12" />
                  </Link>
                  <h2 className="my-8">
                  <Texts.UnderlinedTitle text="Sobre mí" size="text-4xl md:text-5xl" />
                  </h2>
                  <aside className="grid place-items-center lg:hidden">
                    <Image src="/photo_temp.jpg" alt="" className="max-h-80 max-w-96 w-full mt-12 rounded-tl-xl rounded-tr-100 rounded-bl-100 rounded-br-xl object-cover" width={img_logo_width} height={img_logo_width} />
                  </aside>
                  <p className="text-secondary dark:text-white pt-10 lg:pt-0 text-xl tracking-wide leading-6 xl:leading-8 ">
                    Actualmente trabajo como Desarrollador de Software en un reconocido laboratorio farmacéutico ubicado en Sabaneta, Colombia.
                    Además, desarrollo aplicaciones de forma independiente para diferentes clientes.
                    Terminé mi carrera universitaria en la
                    <a href="https://pascualbravo.edu.co/" target="_blank" className="underline underline-offset-2"> Institución Universitaria Pascual Bravo </a>
                    en mayo de 2024, aunque para ese momento ya contaba con experiencia como desarrollador independiente.
                  </p>
                </section>

            </article>
            <aside className="lg:w-1/2 hidden lg:block">
              <Image src="/photo_temp.jpg" alt="" className="sticky top-36 h-124 w-136 mt-32 rounded-tl-xl rounded-tr-200 rounded-bl-200 rounded-br-xl object-cover" width={img_banner_width} height={img_banner_width} />
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
                  <Image src={`${proyecto.getImage}`} alt={proyecto.getName} className="object-cover h-64 rounded-xl hover:scale-110 duration-300 ease-in-out" width={img_custom_width} height={img_custom_height}/>
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
                  ¿Tienes una idea o proyecto que te gustaría desarrollar? <span className="font-bolder">¡Hablemos!</span>
                </h3>
                <FormContactMe />
              </section>

              <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                <div className="lg:col-span-2">
                    <Cards.ExperienceCard title="contacto@davidmojica.com" message="" size="w-full" level={5} />
                  </div>
                  <div className="lg:col-span-2">
                    <Cards.ExperienceCard title="Medellín, Colombia" message="" size="w-full" level={6} />
                  </div>
              </section>
          </article>
        </section>
        <Footer />
        {/* Componentes extra */}
    </Suspense>
  );
}
