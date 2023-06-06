"use client"
import React, {  useEffect } from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { logOut,  getToken } from '../(auth)/reducers/authSlice';
import { useRouter } from 'next/navigation';
import {  toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import 'react-toastify/dist/ReactToastify.css';

function Perfil() {

  const dispatch = useDispatch(); // Get the token from the state using the getToken selector
  const wholeState = useSelector(getToken); // Access the token value from the Redux store
  const storedToken = wholeState.payload.token;
  const storedUser = wholeState.payload.user;
  const router = useRouter();



  useEffect(() => {
    console.log(storedToken);

    if (storedToken) {
    } else {
      router.push('/Login');
    }
  }, []);



  const handleResetToken = () => {
    // Reset the token
    dispatch(logOut());

    // Reset the token stored locally in the browser
    localStorage.removeItem('token');
  
    router.push('/');
  
    toast.info('Session cerrada correctamente');
    // Perform any other desired actions after resetting the token
  };
  

  

  
  
  
  return (
    <div className='perfil flex flex-col gap-4 justify-center items-center'>
      {storedToken && (
       
        <div className="bg-white w-[250px] rounded-xl shadow" aria-label="card-overlay-v3">
          <div className="w-full rounded-xl h-[250px] flex-shrink-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1682309704250-6bac0f499665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1512&q=80"
              alt=""
              className="object-cover w-full h-full rounded-xl object-center"
            />
          </div>
          <div className="flex flex-col flex-1 p-5">
            <div className="pb-5 mb-5 border-b border-gray-200">
              <h3 className="mb-1 text-lg font-bold">{storedUser.name}</h3>
              <span className="text-sm">{storedUser.email}</span><br/>
              <span className="text-sm">Ultima donacion: {storedUser.ult_vez_donado}</span>
            
              <PersonIcon className="text-red-600" />
              <span className="text-sm ">{storedUser.sexo}</span>
            </div>
            <div className="flex items-center justify-between w-full ml-auto">
              <div className="text-sm text-slate-400">{storedUser.fecha_nacimiento}</div>
              <div className="flex items-center gap-x-1">
                <BadgeIcon className="text-red-600" />
                <span className="text-sm font-bold">{storedUser.nro_cedula}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <button className="text-white w-[250px] bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      <Link href={'/edit-perfil'}>Editar perfil</Link>      </button>
      <button className="text-white w-[250px] bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        <Link href={'/change-password'}>Cambiar contraseña</Link>
      </button>
      <button className="text-white w-[250px] bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleResetToken}>
        Cerrar sesión
      </button>
    </div>
  );
}

export default Perfil;
