"use client"
import React from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';




function Perfil() {




  return (
    <div className='perfil flex flex-col gap-4 justify-center items-center border-2 border-red-500'>
        <div
          className="bg-white w-[250px] rounded-xl shadow"
          aria-label="card-overlay-v3"
        >
          <div className="w-full rounded-xl h-[250px] flex-shrink-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1682309704250-6bac0f499665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1512&q=80"
              alt=""
              className="object-cover w-full h-full rounded-xl object-center"
            />
          </div>
          <div className="flex flex-col flex-1 p-5">
            <div className="pb-5 mb-5 border-b border-gray-200">
              <h3 className="mb-1 text-lg font-bold">Alan Toro</h3>
              <span className="text-sm">alan@gmail.com </span><br/>
              <span className="text-sm">Ultima donacion: 2122-32-33</span>
            
                <PersonIcon className="text-red-600" />
                <span className="text-sm ">Masculino</span>
             
            </div>
            <div className="flex items-center justify-between w-full ml-auto">
              <div className="text-sm text-slate-400">1999-10-12</div>
              <div className="flex items-center gap-x-1">
                <BadgeIcon className="text-red-600" />
                <span className="text-sm font-bold">1231231</span>
              </div>
            </div>
          </div>
          
        </div>
        <button class="text-white w-[250px] bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Editar Información</button>
             
        <button class="text-white w-[250px] bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link href={'/Recover'} >Cambiar contraseña</Link></button>
           
        <button class="text-white w-[250px] bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Cerrar sesión</button>
            
    </div>
  )
}

export default Perfil