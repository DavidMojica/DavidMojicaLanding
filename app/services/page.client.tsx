'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Texts from '../models/Text';
import Cards from '../models/Cards';
import Buttons from '../models/Buttons';
import Swipers from '../models/Swipers';
import Link from 'next/link';

const PageClient = () => {
  return (
    <>
        <Header />
        {/* Simplecards */}
        <section className="py-8 bg-white dark:bg-bgdark">
            <article className='mx-6 sm:mx-8 md:m-auto md:w-2/3 lg:w-4/5 xl:w-2/3 m-auto'>
                <h1><Texts.UnderlinedTitle text='Servicios de Software' size='text-3xl lg:text-6xl mb-12 ml-6' /></h1>
                <article className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center gap-3 xl:gap-6 ">
                <Cards.SimpleCard title="Aplicaciones" message="Todo tipo de aplicaciones Web, Escritorio y móviles a la medida." size="w-full h-full" />
                <Cards.SimpleCard title="Inteligencia Artificial" message="Chatbots y agentes capaces de automatizar grandes procesos." size="w-full h-full" />
                <Cards.SimpleCard title="Tiendas online" message="Inicia tu propio negocio de ventas integrando pagos seguros en línea en tiempo real." size="w-full h-full" />
                <Cards.SimpleCard title="Big Data" message="Obtenga información crucial para su negocio a partir de sus datos existentes." size="w-full h-full" />
                <Cards.SimpleCard title="Automatización" message="Automatice procesos repetitivos por medio de robots que harán esas tareas por usted." size="w-full h-full" />
                <Cards.SimpleCard title="API's" message="Obtenga y exporte datos desde y hacia cualquier otro lugar el mundo por medio de API's." size="w-full h-full" />
                <Cards.SimpleCard title="Diseño UX/UI" message="Diseños intuitivos, atractivos y eficaces en sus aplicaciones." size="w-full h-full" />
                <Cards.SimpleCard title="Desarrollo IOT" message="Programación para dispositivos electrónicos conectados a internet." size="w-full h-full" />
                <Cards.SimpleCard title="Inventarios" message="Creación de sistemas de control de inventario y administración." size="w-full h-full" />
                <Cards.SimpleCard title="Apps Móviles" message="Desarrollo de aplicaciones para celulares y dispositivos de bolsillo." size="w-full h-full" />
                <Cards.SimpleCard title="Mantenimiento" message="Servicio de mantenimiento y actualización a sus softwares." size="w-full h-full" />
                <Cards.SimpleCard title="Otros servicios" message="¿Interesado en otro servicio?" size="w-full h-full" buttonMsg={'Contacto'} buttonRoute='/contact' />

            </article>

                <Texts.UnderlinedTitle text='Beneficios en cada servicio' size='text-3xl lg:text-4xl mt-12 mb-4 ml-6' />
                <div className='cursor-grab '>
                    <Swipers.SwiperBeneficios />
                </div>
            </article>
        </section>

        <section className='bg-tertiary dark:bg-primary py-16' id='benefits'>
            <section className="w-4/6 md:w-4/5 lg:w-11/12 xl:w-5/6 2xl:w-4/6 m-auto">
                <h2 className="text-center xl:text-left">
                <Texts.UnderlinedTitle text="Herramientas de desarrollo" size="text-4xl"  />
                <p className='text-xl text-secondary'>Se desarrolla bajo la herramienta que prefieras.</p>
                </h2>
                <article className="grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-3 xl:gap-6 mt-12">
                    <Cards.ExperienceCard title="DJANGO" message="2.5 Años" size="w-full" level={3} />
                    <Cards.ExperienceCard title="Python" message="3 Años" size="w-full" level={3} />
                    <Cards.ExperienceCard title="Hugging Face" message="3 Meses" size="w-full" level={0} />
                    <Cards.ExperienceCard title="C#" message="2 Años" size="w-full" level={2} />
                    <Cards.ExperienceCard title="SQL - PSQL" message="2.5 Años" size="w-full" level={3} />
                    <Cards.ExperienceCard title="PHP" message="1.2 Años" size="w-full" level={2} />
                    <Cards.ExperienceCard title="DotNet" message="6 meses" size="w-full" level={1} />
                    <Cards.ExperienceCard title="DevExpress" message="6 meses" size="w-full" level={1} />
                    <Cards.ExperienceCard title="Azure Devops" message="6 meses" size="w-full" level={1} />
                    <Cards.ExperienceCard title="Blazor" message="6 Meses" size="w-full" level={1} />
                    <Cards.ExperienceCard title="NEXT.JS" message="8 Meses" size="w-full" level={1} />
                    <Cards.ExperienceCard title="NoSQL" message="1 Año" size="w-full" level={1} />
                    <Cards.ExperienceCard title="Bootstrap (Css)" message="2+ Años" size="w-full" level={3} />
                    <Cards.ExperienceCard title="Tailwind (Css)" message="1.5 Años" size="w-full" level={2} />
                    <Cards.ExperienceCard title="Java (Android)" message="< 1 Año" size="w-full" level={1} />
                    <Cards.ExperienceCard title="JavaScript" message="2.5+ Años" size="w-full" level={3} />
                    <Cards.ExperienceCard title="TypeScript" message="1.3 Años" size="w-full" level={2} />
                    <Cards.ExperienceCard title="React" message="< 1 Año" size="w-full" level={1} />
                    <Cards.ExperienceCard title="Metabase" message="2+ Años" size="w-full" level={3} />
                    <Cards.ExperienceCard title="Power BI" message="1.5 Años" size="w-full" level={2} />
                    <Cards.ExperienceCard title="Three.JS" message="< 1 Año" size="w-full" level={1} />
                </article>
                <p className='text-xl text-secondary py-6'>Se hace uso de más herramientas. Pregunta sin compromiso si tienes dudas.</p>
                <Link href={'/contact'}>
                    <Buttons.PrimaryButton text='Contacto' />
                </Link>
            </section>
        </section>
        <Footer />
    </>
  )
}

export default PageClient;
