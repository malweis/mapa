"use client"
import React, { useState, useEffect } from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Perfil() {
  const [data, setData] = useState([]);
  const router = useRouter();


  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    console.log(storedToken);

    if (storedToken) {
      fetchData(storedToken);
    } else {
      router.push('/login')
    }
  }, []);


  const handleResetToken = () => {
    // Reset the token
    localStorage.removeItem('token');
    router.push('/')

      toast.info('Session cerrada correctamente');
 
    // Perform any other desired actions after resetting the token
  };
  const fetchData = async (storedToken) => {
    try {
      const response = await axios.get('http://192.168.16.90:8000/api/user/', {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      });
  
      const responseData = response.data;
      
  
      if (responseData ) {
        setData(responseData);
      
      } else {
        console.error('Error: Invalid response data or user ID mismatch');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  
  console.log(data)
  return (
    <div className='perfil flex flex-col gap-4 justify-center items-center'>
      {data && (
       
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
              <h3 className="mb-1 text-lg font-bold">{data.name}</h3>
              <span className="text-sm">{data.email}</span><br/>
              <span className="text-sm">Ultima donacion: {data.ult_vez_donado}</span>
            
              <PersonIcon className="text-red-600" />
              <span className="text-sm ">{data.sexo}</span>
            </div>
            <div className="flex items-center justify-between w-full ml-auto">
              <div className="text-sm text-slate-400">{data.fecha_nacimiento}</div>
              <div className="flex items-center gap-x-1">
                <BadgeIcon className="text-red-600" />
                <span className="text-sm font-bold">{data.nro_cedula}</span>
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
