"use client"
import React from 'react'

function Register() {
  return (
    <div className='flex flex-col justify-center items-center register border-2 border-red-500'>
       <form
         autoComplete="off"
         className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
         aria-label="signup-form"
       >
         <h2 className="mb-10 text-3xl font-bold text-center">Sign Up Form</h2>
         
         <div className="flex flex-col items-start mb-5 gap-y-3">
           <label htmlFor="nombres" className="text-sm font-medium cursor-pointer">
             Nombres
           </label>
           <input
             id="nombres"
             name='nombres'
             type="text"
             className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
             placeholder="Ingresa tus nombres"
           />
         </div>
         <div className="flex flex-col items-start mb-5 gap-y-3">
           <label htmlFor="apellidos" className="text-sm font-medium cursor-pointer">
             Apellidos
           </label>
           <input
             id="apellidos"
             name='apellidos'
             type="text"
             className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
             placeholder="Ingresa tus apellidos"
           />
         </div>
         
         <div className="flex flex-col items-start mb-5 gap-y-3">
  <label htmlFor="sexo" className="text-sm font-medium cursor-pointer">
    Sexo
  </label>
  <div className="relative w-[340px] text-sm font-medium">
    <select id="sexo" className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none">
      <option value="" selected>Escoja una opcion</option>
      <option value="masculino">Masculino</option>
      <option value="femenino">Femenino</option>
      <option value="otro">Otro</option>
    </select>
    <div
      id="sexo-options"
      className="absolute left-0 w-full p-2 mt-2 bg-white rounded-lg shadow top-full hidden"
    >
      <div
        className="p-3 rounded cursor-pointer hover:text-blue-500 hover:bg-blue-50"
        onClick={() => {
          const select = document.getElementById("sexo");
          select.value = "masculino";
          select.click();
        }}
      >
        Masculino
      </div>
      <div
        className="p-3 rounded cursor-pointer hover:text-blue-500 hover:bg-blue-50"
        onClick={() => {
          const select = document.getElementById("sexo");
          select.value = "femenino";
          select.click();
        }}
      >
        Femenino
      </div>
      <div
        className="p-3 rounded cursor-pointer hover:text-blue-500 hover:bg-blue-50"
        onClick={() => {
          const select = document.getElementById("sexo");
          select.value = "otro";
          select.click();
        }}
      >
        Otro
      </div>
    </div>
  </div>
</div>
         <div className="flex flex-col items-start mb-5 gap-y-3">
           <label htmlFor="email" className="text-sm font-medium cursor-pointer">
             Email
           </label>
           <input
             id="email"
             name='email'
             type="email"
             className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
             placeholder="Enter your email address..."
           />
         </div>
        <div className="w-[300px]" aria-label="input-password-toggle">
          <div className="relative w-full">
            <input
              type="password"
              name="password"
              className="w-full p-4 pr-12 transition-all bg-transparent border rounded-lg outline-none border-slate-200 focus:border-blue-500"
              placeholder="Enter your password"
            />
            <span className="absolute cursor-pointer text-slate-400 right-4 top-2/4 -translate-y-2/4">
              <svg
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            </span>
          </div>
        </div>
         <div className="flex items-center justify-end mb-5 text-slate-400">
           <p>Already have an account?</p>
           <a href="#" className="text-blue-500 underline">
             Sign In
           </a>
         </div>
         <button
           type="submit"
           className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
         >
           Create an account
         </button>
       </form>
    </div>
  )
}

export default Register