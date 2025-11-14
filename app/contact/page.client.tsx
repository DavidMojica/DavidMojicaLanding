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
                <h1><Texts.UnderlinedTitle text="Contacto" size="text-4xl md:text-5xl" /></h1>
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
    </div>
  )
}

export default PageClient;