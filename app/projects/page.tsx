'use client';
import React, {useState} from 'react';
/*----Components----*/
import Header from '../components/Header';
import Footer from '../components/Footer';
import DynamicModal from '../components/DynamicModal';
/*----Models----*/
import Proyecto from '../models/Proyectos/Proyecto';
import Buttons from '../models/Buttons';
/*----Forms----*/
import ProyectosPrincipales from '../models/Proyectos/Instances';

const page = () => {
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
    <div>
        <Header />
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
            </article>
        </section>
        <Footer />
    </div>
  )
}

export default page