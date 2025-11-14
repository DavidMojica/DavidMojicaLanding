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
                <Cards.SimpleCard 
                    title="Aplicaciones"
                    message="Desarrollo de aplicaciones web, escritorio y móviles hechas a la medida de tu negocio." 
                    size="w-full h-full"
                />
                
                <Cards.SimpleCard 
                    title="IA" 
                    message="Chatbots, asistentes y agentes inteligentes que automatizan procesos y mejoran la competitividad." 
                    size="w-full h-full" 
                />
                
                <Cards.SimpleCard 
                    title="Pasarelas de pago" 
                    message="Integra pagos en línea y lleva tu negocio a un entorno digital, seguro y visible."
                 size="w-full h-full" 
                />
                
                <Cards.SimpleCard 
                    title="Análisis de datos" 
                    message="Obtén informacion valiosa para tu empresa a partir del analisis de tus datos existentes." 
                    size="w-full h-full" 
                />
                
                <Cards.SimpleCard 
                    title="Portafolios" 
                    message="Muestra tu trabajo al mundo con un sitio profesional." 
                    size="w-full h-full" 
                />

                <Cards.SimpleCard 
                    title="APIs" 
                    message="Desarrollo e integración de APIs para conectar sistemas, compartir datos y automatizar procesos." 
                    size="w-full h-full" 
                />

                <Cards.SimpleCard
                    title="Diseño UX/UI"
                    message="Diseños modernos, intuitivos y centrados en el usuario para mejorar la experiencia en tus aplicaciones."
                    size="w-full h-full"
                />

                <Cards.SimpleCard
                    title="Desarrollo IoT"
                    message="Programación y conexión de dispositivos inteligentes que interactúan con internet y sistemas externos."
                    size="w-full h-full"
                />

                <Cards.SimpleCard
                    title="Inventarios"
                    message="Desarrollo de sistemas de gestión de inventarios que optimizan procesos y facilitan la administración."
                    size="w-full h-full"
                />

                <Cards.SimpleCard
                    title="Apps Móviles"
                    message="Creación de aplicaciones móviles funcionales y eficientes para Android y iOS."
                    size="w-full h-full"
                />

                <Cards.SimpleCard
                    title="Mantenimiento"
                    message="Servicio de mantenimiento, soporte y actualización para asegurar el correcto funcionamiento de tus sistemas."
                    size="w-full h-full"
                />

                <Cards.SimpleCard
                    title="Otros servicios"
                    message="¿Necesitas un desarrollo especial? Cuéntame tu idea y te ayudaré a llevarla a cabo."
                    size="w-full h-full"
                    buttonMsg="Contacto"
                    buttonRoute="/contact"
                />
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
                <article className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-3 xl:gap-6 mt-12">

                    {/* ---------------- BACKEND ---------------- */}
                    <Cards.ExperienceCard title="DJANGO" message="2 Años" size="w-full" level={3} />
                    <Cards.ExperienceCard title="BLAZOR" message="1.5 Años" size="w-full" level={2} />
                    <Cards.ExperienceCard title=".NET" message="1.5 Años" size="w-full" level={2} />
                    <Cards.ExperienceCard title="C#" message="2 Años" size="w-full" level={2} />
                    <Cards.ExperienceCard title="Python" message="2.5 Años" size="w-full" level={3} />
                    <Cards.ExperienceCard title="PHP" message="1.2 Años" size="w-full" level={2} />
                    <Cards.ExperienceCard title="Java" message="< 1 Año" size="w-full" level={1} />

                    {/* ---------------- FRONTEND ---------------- */}
                    <Cards.ExperienceCard title="JavaScript" message="2.5+ Años" size="w-full" level={3} />
                    <Cards.ExperienceCard title="TypeScript" message="1.3 Años" size="w-full" level={2} />
                    <Cards.ExperienceCard title="React" message="< 1 Año" size="w-full" level={1} />
                    <Cards.ExperienceCard title="NEXT.JS" message="1.5 Años" size="w-full" level={2} />
                    <Cards.ExperienceCard title="Three.JS" message="< 1 Año" size="w-full" level={1} />

                    {/* ---------------- BASES DE DATOS ---------------- */}
                    <Cards.ExperienceCard title="SQL - PSQL" message="2.5 Años" size="w-full" level={3} />
                    <Cards.ExperienceCard title="NoSQL" message="1 Año" size="w-full" level={1} />

                    {/* ---------------- DEVOPS / CLOUD ---------------- */}
                    <Cards.ExperienceCard title="Azure Devops" message="1.5 Años" size="w-full" level={2} />

                    {/* ---------------- FRAMEWORKS / LIBRERÍAS UI ---------------- */}
                    <Cards.ExperienceCard title="Bootstrap" message="2+ Años" size="w-full" level={3} />
                    <Cards.ExperienceCard title="Tailwind" message="1.5 Años" size="w-full" level={2} />

                    {/* ---------------- HERRAMIENTAS ANALÍTICAS ---------------- */}
                    <Cards.ExperienceCard title="Metabase" message="2+ Años" size="w-full" level={3} />
                    <Cards.ExperienceCard title="Power BI" message="1.5 Años" size="w-full" level={2} />

                    {/* ---------------- OTROS ---------------- */}
                    <Cards.ExperienceCard title="DevExpress" message="1.5 Años" size="w-full" level={2} />

                </article>

                <p className='text-xl text-secondary py-6'></p>
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
