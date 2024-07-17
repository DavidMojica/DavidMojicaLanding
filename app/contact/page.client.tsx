'use client';
import React from 'react';
/*----Components----*/
import Header from '../components/Header';
import Footer from '../components/Footer';
/*----Models----*/
import Texts from '../models/Text';
import Cards from '../models/Cards';
/*----Forms----*/
import FormContactMe from '../forms/ContactMe/FormContactMe';

const PageClient = () => {
  return (
    <div>
        <Header />  
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
                    <Cards.ExperienceCard title="+57 319 775 0000" message="Llámame si tienes preguntas o quieres trabajar conmigo." size="w-full" level={4} />
                    <Cards.ExperienceCard title="davidmojicav@gmail.com" message="O también puedes escribirme al correo." size="w-full" level={5}/>
                    <div className="lg:col-span-2">
                        <Cards.ExperienceCard title="Medellín - Colombia" message="Horario de atención: Lunes a Sábado 8am - 6pm" size="w-full" level={6} />
                    </div>
                </section>
            </article>
            </section>

        <Footer />
    </div>
  )
}

export default PageClient;