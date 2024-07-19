import React from "react";
import { Modal } from "flowbite-react";
/*----Self imports----*/
//----Componentes----//
import Texts from "@/app/models/Text";
//----modelos----//
import Proyecto from "../models/Proyectos/Proyecto";
//----Iconos----//
import { MdOutlinePreview } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";


interface DisplayModalProps {
    onClose: () => void,
    proyecto: Proyecto
}

const DynamicModal: React.FC<DisplayModalProps> = ({ onClose, proyecto }) => {
    return (
        <Modal dismissible show={true} onClose={onClose} size={'4xl'}>
            <Modal.Header>

                
            </Modal.Header>
            <Modal.Body >
                <section className="space-y-6">
                    <img src={`${proyecto.getImage}`} alt="" className="w-full object-contain max-h-124" />
                    <article className="flex gap-8 justify-center">
                        { proyecto.checkPreview && (
                            <a href={proyecto.getPreview} target="_blank">
                                <p className='flex items-center p-2 rounded-md hover:bg-tertiary text-center dark:text-white dark:hover:bg-slate-400 duration-300'>
                                    <MdOutlinePreview />
                                    <span className='ps-2'>Ver</span> 
                                </p> 
                            </a>
                        )}
                        { proyecto.checkSourceCode && (
                            <a href={proyecto.getSourceCode} target="_blank">
                                <p className='flex items-center p-2 rounded-md hover:bg-tertiary text-center dark:text-white dark:hover:bg-slate-400 duration-300'>
                                    <FaCode />
                                    <span className='ps-2'>Código fuente</span> 
                                </p> 
                            </a>
                        )}

                        {
                            proyecto.checkDownlodeable && (
                                <a href={proyecto.getDownloadLink } download>
                                <p className='flex items-center p-2 rounded-md hover:bg-tertiary text-center dark:text-white dark:hover:bg-slate-400 duration-300'>
                                    <FaDownload />
                                    <span className='ps-2'>Descargar</span> 
                                </p> 
                            </a>
                            )
                        }
                    </article>
                </section>
                <section className="py-6 block md:flex md:flex-wrap">
                    <article className="px-4 md:w-2/3">
                        <Texts.UnderlinedTitle text={`${proyecto.getName}`} size="text-3xl md:text-4xl" />
                        <p className="text-secondary dark:text-white my-4 pb-6">
                            {proyecto.getDescription}
                        </p>
                    </article>
                    <article className="px-4 md:w-1/3">
                        <h4 className="text-2xl dark:text-white font-bolder">Desarrollado con</h4>
                        <p className="text-secondary dark:text-white">{proyecto.getMadeWith}</p>
                        <h4 className="text-2xl dark:text-white font-bolder mt-4 ">Fecha</h4>
                        <p className="text-secondary dark:text-white pb-6">{proyecto.getDate}</p>
                    </article>
                </section>
            </Modal.Body>
        </Modal>
    );
};

export default DynamicModal;