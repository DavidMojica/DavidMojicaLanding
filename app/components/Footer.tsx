import React from 'react';
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-blue_dark block md:flex justify-between items-center px-2 md:px-10 py-4'>
      <section className='flex justify-center md:justify-start'>
        <img src="/logo_dark.png" alt="Logo.png" title='Home' className='size-44 hidden dark:block mx-auto md:mx-0' />
        <img src="/logo_light.jpg" alt="Logo." title='Home' className='size-44 block dark:hidden mx-auto md:mx-0' />
      </section>
      <section className='flex justify-center md:justify-end mt-4 md:mt-0'>
        <p className='text-secondary text-sm flex items-center'>
          <BiCopyright className='mr-1' />
          <span>Todos los derechos reservados - David Mojica</span>
        </p>
      </section>
    </footer>
  )
}

export default Footer