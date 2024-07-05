import React from 'react';
import { IoHomeOutline, IoChatboxEllipsesOutline, IoMenuOutline } from 'react-icons/io5';
import { FiUser } from "react-icons/fi";
import { PiProjectorScreen } from "react-icons/pi";
import Link from 'next/link';

import Switch from './Switch';

const Header = ():React.JSX.Element => {
  return (
    <header className='flex justify-between py-6 px-2 md:px-10 bg-white dark:bg-blue_dark text-primary dark:text-white'>
        <h2 className='text-primary dark:text-tertiary text-3xl md:text-4xl font-bolder underline decoration-tertiary dark:decoration-primary'>David Mojica</h2>

        <section className='flex text-xl font-normal'>
            {/* Menu */}
            <ul className='hidden md:flex '>
                <li className='px-4 flex items-center'><Link href={'#'}><p className='flex items-center p-2 rounded-md hover:bg-tertiary dark:hover:bg-slate-700 duration-300'><IoHomeOutline/><span className='ps-2'>Home</span> </p> </Link> </li>
                <li className='px-4 flex items-center'><Link href={'#'}><p className='flex items-center p-2 rounded-md hover:bg-tertiary text-center dark:hover:bg-slate-700 duration-300'><FiUser /><span className='ps-2'>Sobre mí</span></p> </Link></li>
                <li className='px-4 flex items-center'><Link href={'#'}><p className='flex items-center p-2 rounded-md hover:bg-tertiary dark:hover:bg-slate-700 duration-300'><PiProjectorScreen /><span className='ps-2'>Proyectos</span></p> </Link></li>
                <li className='px-4 flex items-center'><Link href={'#'}><p className='flex items-center p-2 rounded-md hover:bg-tertiary dark:hover:bg-slate-700 duration-300'><IoChatboxEllipsesOutline /><span className='ps-2'>Contacto</span></p></Link></li>
            </ul>
            <article className='ps-0 md:ps-6 flex items-center'>
                {/* Switch */}
                <div className='pe-4 md:pe-0'>
                    <Switch />
                </div>
                <div className='flex md:hidden ps-4 md:ps-0'>
                    <IoMenuOutline className='text-white bg-primary dark:text-primary dark:bg-white size-10 rounded-full p-1' />
                </div>
            </article>
        </section> 
    </header>
  )
}

export default Header