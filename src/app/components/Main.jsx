"use client"
import React from 'react'
import Link from 'next/link'
import { ToastContainer } from 'react-toastify';

function Main() {
  const handleResetToken = () => {
    // Reset the token
    localStorage.removeItem('token');
    // Perform any other desired actions after resetting the token
  };
  return (
    <div className="mainer">
         
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-red-600 tracking-widest font-medium title-font mb-1">DONACIÓN DE SANGRE</h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Ayuda a salvar vidas con tu donación</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base" href={"/"}>Tu donación de sangre puede marcar la diferencia en la vida de alguien. Ayúdanos a abastecer los bancos de sangre para brindar asistencia a quienes lo necesitan. ¡Haz una donación hoy mismo!</p>
            </div>
            <div className="flex flex-wrap">
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Estrellas Solidarias</h2>
                <p className="leading-relaxed text-base mb-4">Ayuda a crear un impacto positivo en la sociedad al donar sangre. Tu contribución puede salvar vidas y brindar esperanza a quienes más lo necesitan.</p>
                <Link className="text-red-600 inline-flex items-center" href={"/"}>Saber más
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">El Catalizador</h2>
                <p className="leading-relaxed text-base mb-4">Conviértete en el catalizador de la esperanza al donar sangre. Tu generosidad puede inspirar a otros a seguir tu ejemplo y marcar la diferencia en la vida de las personas.</p>
                <Link className="text-red-600 inline-flex items-center" href={"/"}>Saber más
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">A tu alcance</h2>
                <p className="leading-relaxed text-base mb-4">Averigua los locales de donacion mas cercanos cerca tuyo</p>
                <Link className="text-red-600 inline-flex items-center" href={"/"}>Saber más
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Enorgullecete de tus contribuciones</h2>
                <p className="leading-relaxed text-base mb-4">Puedes ver que tanto haz donado asi como averiguar en cuanto tiempo puedes volver a hacerlo</p>
                <Link className="text-red-600 inline-flex items-center" href={"/"}>Saber más
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
           
          </div>
        </section>
    </div>
  )
}

export default Main