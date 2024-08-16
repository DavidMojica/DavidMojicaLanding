'use client';
import React, {useState} from 'react';
import Image from 'next/image';
/*----Components----*/
import Header from '../components/Header';
import Footer from '../components/Footer';
import DynamicModal from '../components/DynamicModal';
/*----Models----*/
import Proyecto from '../models/Proyectos/Proyecto';
/*----Forms----*/
import { ProyectosAll } from '../models/Proyectos/Instances';

import { img_custom_height, img_custom_width } from '../variables';

const PageClient = () => {
    //----------Modal handlers----------//
    const [openModal, setOpenModal] = useState(false);
    const [modalData,setModalData] = useState(ProyectosAll[0]);

    const handleOpenModal = (proyecto:Proyecto) => {
        setModalData(proyecto);
        setOpenModal(true);
    };

    const handleCloseModal = ():void => {
        setOpenModal(false);
        setModalData(ProyectosAll[0]);
    };
  return (
    <div>
        <Header />
            <section className="py-20 md:py-24 bg-tertiary dark:bg-primary">
            <article className="mx-6 sm:mx-32 md:m-auto md:w-2/3 lg:w-4/5 xl:w-2/3 lg:min-w-[984px] lg:gap-16">
                <h1 className="text-5xl font-bolder dark:text-white">Proyectos</h1>
                <p className="xl:w-1/2 text-secondary dark:text-white text-xl my-6">Algunos de mis proyectos.</p>
                <article className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-3 xl:gap-6">
                {ProyectosAll.map(proyecto => (
                    <article className="w-full grid place-items-center cursor-pointer" onClick={()=> handleOpenModal(proyecto)}>
                        <Image src={`${proyecto.getImage}`} alt={proyecto.getName} className="object-cover h-64 rounded-xl hover:scale-110 duration-300 ease-in-out" width={img_custom_width} height={img_custom_height}/>
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

export default PageClient;