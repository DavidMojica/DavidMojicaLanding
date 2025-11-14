import React from 'react';
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className='bg-white shadow-t-lg dark:shadow-gray-800 dark:bg-bgdark block md:flex justify-between items-center px-2 md:px-10 py-4'>
      <section className='flex justify-center md:justify-start'>

      </section>
      <section className='flex justify-center md:justify-end mt-4 md:mt-0'>
        <p className='text-secondary text-sm flex items-center'>
          <BiCopyright className='mr-1' />
          <span>2025 Todos los derechos reservados - David Mojica</span>
        </p>
      </section>
    </footer>
  )
}

export default Footer