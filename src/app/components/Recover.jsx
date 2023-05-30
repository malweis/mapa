"use client"
import React, { useState } from "react";

function Recover() {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const validateEmail = () => {
        // Regular expression for email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setEmailError('Ingrese una direccion de correo valida');
        } else {
          setEmailError('');
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail();
      
    
        // Proceed with form submission if there are no errors
        if ( !emailError) {
          // Perform form submission logic here
        }
      };

  return (
    <div className='recover flex justify-center items-center'>
         
        <section class="text-gray-600 body-font bg-gray-100 rounded-lg">
          <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <h1 class="title-font font-medium text-3xl text-gray-900">Restablece tu contraseña para acceder a tu cuenta.</h1>
             
            </div>
            <div class="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Ingresa tu correo</h2>
             
              <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="recover_email" className="text-sm font-medium cursor-pointer">
            Email
          </label>
          <input
            id="recover_email"
            name='recover_email'
            type="email"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Ingresa tu correo..."
            value={email}
            onChange={handleEmailChange}
            onBlur={validateEmail}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
              <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
              <p class="text-xs text-gray-500 mt-3">Enviar Solicitud de recuperacion</p>
            </div>
          </div>
        </section>
         
    </div>
  )
}

export default Recover