import Link from 'next/link';
import React, { useState } from 'react';
// Self imports
import Texts from '../models/Text';
// Icons
import { IoHomeOutline, IoChatboxEllipsesOutline, IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { FaGithub, FaWhatsapp, FaLinkedin,  } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { PiProjectorScreen } from "react-icons/pi";
import { GrServices } from "react-icons/gr";
//Components
import Switch from './Switch';

const Header = ():React.JSX.Element => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebarMenu = () => {
        setSidebarOpen(!sidebarOpen);
      };

  return (
    <header className='sticky top-0 shadow-b-lg dark:shadow-gray-800 z-50'>
        <nav className='flex justify-around lg:justify-between py-6 px-2 lg:px-10 bg-white dark:bg-bgdark text-primary dark:text-white'>
            <h2 className='text-primary dark:text-white font-bolder underline text-3xl md:text-4xl decoration-tertiary dark:decoration-primary'>
                David Mojica
            </h2>


            <section className='flex text-xl font-normal'>
                <ul className='hidden lg:flex '>
                    <li className='px-4 flex items-center'><Link href={'/'}><p className='flex items-center p-2 rounded-md hover:bg-tertiary text-center dark:hover:bg-slate-700 duration-300'><IoHomeOutline/><span className='ps-2'>Home</span> </p> </Link> </li>
                    <li className='px-4 flex items-center'><Link href={'/services'}><p className='flex items-center p-2 rounded-md hover:bg-tertiary text-center dark:hover:bg-slate-700 duration-300'><GrServices /><span className='ps-2'>Servicios</span></p> </Link></li>
                    <li className='px-4 flex items-center'><Link href={'/projects'}><p className='flex items-center p-2 rounded-md hover:bg-tertiary text-center dark:hover:bg-slate-700 duration-300'><PiProjectorScreen /><span className='ps-2'>Proyectos</span></p> </Link></li>
                    <li className='px-4 flex items-center'><Link href={'/contact'}><p className='flex items-center p-2 rounded-md hover:bg-tertiary text-center dark:hover:bg-slate-700 duration-300'><IoChatboxEllipsesOutline /><span className='ps-2'>Contacto</span></p></Link></li>
                </ul>
                <article className='ps-0 lg:ps-6 flex items-center'>
                    <div className='pe-4 lg:pe-0'>
                        <Switch />
                    </div>
                    <div className='flex lg:hidden ps-4 md:ps-0'>
                        {sidebarOpen ? (
                            <IoCloseOutline className='text-white bg-primary dark:text-primary dark:bg-white size-10 rounded-full p-1' onClick={toggleSidebarMenu} />
                        ) : (
                            <IoMenuOutline className='text-white bg-primary dark:text-primary dark:bg-white size-10 rounded-full p-1' onClick={toggleSidebarMenu} />
                        )}
                    </div>
                </article>
            </section> 
        </nav>

        <aside className={`fixed top-22 bottom-0 right-0 w-3/4 bg-white dark:bg-bgdark dark:text-white duration-500 ease-in-out transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <ul className='text-xl '>
                <li className='mx-4 my-6 flex items-center'>
                    <Link href={'/'}><p className='flex items-center p-2 rounded-md hover:bg-tertiary text-center dark:hover:bg-slate-700 duration-300'><IoHomeOutline/><span className='ps-2'>Home</span></p></Link>
                </li>
                <li className='mx-4 my-6 flex items-center'>
                    <Link href={'/services'}><p className='flex items-center p-2 rounded-md hover:bg-tertiary text-center dark:hover:bg-slate-700 duration-300'><GrServices /><span className='ps-2'>Servicios</span></p></Link>
                </li>
                <li className='mx-4 my-6 flex items-center'>
                    <Link href={'/projects'}><p className='flex items-center p-2 rounded-md hover:bg-tertiary text-center dark:hover:bg-slate-700 duration-300'><PiProjectorScreen /><span className='ps-2'>Proyectos</span></p></Link>
                </li>
                <li className='mx-4 my-6 flex items-center'>
                    <Link href={'/contact'}><p className='flex items-center p-2 rounded-md hover:bg-tertiary text-center dark:hover:bg-slate-700 duration-300'><IoChatboxEllipsesOutline /><span className='ps-2'>Contacto</span></p></Link>
                </li>
            </ul>
            <section className='absolute w-full bottom-0 p-3 '>
                <ul className='flex justify-center items-center gap-5 text-2xl'>
                    <li><a href="https://github.com/DavidMojica" target='_blank'><FaGithub/></a></li>
                    <li><a href="https://wa.me/573197750000" target='_blank'><FaWhatsapp/></a></li>
                    <li><a href="https://www.linkedin.com/in/david-mojica-vergara-a3898a265/" target='_blank'><FaLinkedin/></a></li>
                    <li><a href="mailto:davidmojicav@gmail.com" target='_blank'><SiGmail/></a></li>
                </ul>
            </section>
        </aside>
    </header>
  )
}

export default Header