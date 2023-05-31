"use client"
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import CustomButton from './CustomButtons'
import Link from 'next/link'

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const router = usePathname();

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };



  const navLinks = [
    { href: '/solicitudes', name: 'Solicitudes', id: 1 },
    { href: '/mapa', name: 'Mapa' , id: 2},
    { href: '/perfil', name: 'Perfil' , id: 3 },
    { href: '/login', name: 'Login' , id: 4 },
    { href: '/certificados', name: 'Certificados' , id: 5 },
  ];
  return (
    <header className=" flex justify-center md:flex-row heads md:items-center md:bg-red-600 md:w-full md:pr-5 md:pl-5">
   
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-600 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
            
        </a> 
          <button className='main-btn-toggle md:hidden border-2 border-red-600 rounded-lg' aria-controls='primary-navigation' onClick={toggleNav}>
        <span className='sr-only'>Menu</span>
      </button>
      <nav className={`text-base font-bold md:text-white md:flex-1 md:flex md:justify-end `}>
        <ul id='primary-navigation' className={` flex  fixed md:relative    mainav bg-red-600  ${isNavVisible ? 'visible' : 'hiding'} `}>
          {navLinks.map((link) => {
          const isActive = router.startsWith(link.href);
          return (
            <li key={link.id}>
              <Link
                className={isActive ? 'mr-5 hover:text-gray-300 border-b-2 border-blue-200' : 'mr-5 hover:text-gray-300'}
                href={link.href}
                key={link.id}
              >
                {link.name}
              </Link>
            </li>
          );
                })}
        </ul>
       
        </nav>
        
     
    </header>
  )
}

export default Header