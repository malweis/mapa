"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import CustomButton from './CustomButtons'
import Link from 'next/link'

function Header() {
  const router = usePathname();

  const navLinks = [
    { href: '/Solicitudes', name: 'Solicitudes' },
    { href: '/Mapa', name: 'Mapa' },
    { href: '/Perfil', name: 'Perfil' },
    { href: '/Login', name: 'Login' },
    { href: '/Certificados', name: 'Certificados' },
  ];
  return (
    <header className="text-gray-600 body-font  heads w-full  z-90 flex justify-center items-center">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
            
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base text-white justify-center flex-1">
        {navLinks.map((link) => {
        const isActive = router.startsWith(link.href);
 
        return (
          <Link
            className={isActive ? 'mr-5 hover:text-gray-300 border-b-2 border-blue-200' : 'mr-5 hover:text-gray-300'}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}

       
        </nav>
        <CustomButton
      bgColor="bg-white"
      textColor="text-blue-500"
      lineColor="border-black"
      sideImage={  <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>}
      opacity="opacity-1"
    >
      Click Me
    </CustomButton>
      </div>
    </header>
  )
}

export default Header