import React from "react";
import { Modal } from "flowbite-react";
/*----Self imports----*/
//----Componentes----//
import Texts from "@/app/models/Text";
//----Iconos----//
import { MdOutlinePreview } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

interface DisplayModalProps {
    onClose: () => void;
}

const DynamicModal: React.FC<DisplayModalProps> = ({ onClose }) => {
    return (
        <Modal dismissible show={true} onClose={onClose} size={'4xl'}>
            <Modal.Body>
                <section className="space-y-6">
                    <img src="/abanner.jpg" alt="" className="w-full object-cover" />
                    <article className="flex gap-8 justify-center">
                        <a href={'#'} target="_blank">
                            <p className='flex items-center p-2 rounded-md hover:bg-tertiary text-center dark:hover:bg-slate-700 duration-300'>
                                <MdOutlinePreview />
                                <span className='ps-2'>Ver</span> 
                            </p> 
                        </a>
                        <a href={'#'} target="_blank">
                            <p className='flex items-center p-2 rounded-md hover:bg-tertiary text-center dark:hover:bg-slate-700 duration-300'>
                                <FaCode />
                                <span className='ps-2'>Código fuente</span> 
                            </p> 
                        </a>
                        
                    </article>
                </section>
                <section className="py-6 block md:flex md:flex-wrap">
                    <article className="px-4 md:w-2/3 h-20">
                        <Texts.UnderlinedTitle text="Nombre del proyecto" size="text-3xl md:text-4xl" />
                        <p className="text-secondary my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, non voluptas rem voluptate officia perspiciatis culpa harum esse quia, animi exercitationem amet voluptatibus nostrum ratione molestias molestiae sint aut. A!</p>
                    </article>
                    <article className="px-4 md:w-1/3 h-20">
                        <h4 className="text-2xl font-bolder">Desarrollado con</h4>
                        <p className="text-secondary">NextJS, Tailwind, Styled components, OOP</p>
                        <h4 className="text-2xl font-bolder mt-4">Fecha</h4>
                        <p className="text-secondary">07/24</p>
                    </article>
                </section>
            </Modal.Body>
        </Modal>
    );
};

export default DynamicModal;