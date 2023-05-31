"use client"
import React, { useState, useEffect } from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import axios from 'axios';




function Perfil() {

  const [data, setData] = useState([]);

  
const fakeData = [
  {
    id: 1,
    nombre: "John Doe",
    email: "johndoe@example.com",
    ultima_fecha: "2022-05-30",
    sexo: "Male",
    fecha_nacimiento: "1990-01-01",
    ci: "12345678"
  },
  // Add more fake data objects as needed
];

  useEffect(() => {
    setData(fakeData);
  }, []);

  // const getAndSetData = () => {
  //   axios.get('http://192.168.16.90:8000/api/solicitudes')
  //     .then(response => {
  //       console.log('API request succeeded');
  //       console.log(response.data.data);
  //       setData(response.data.data);
  //     })
  //     .catch(error => {
  //       console.log('API request failed');
  //       console.log(error);
  //     });
  // };





  return (
    <div className='perfil flex flex-col gap-4 justify-center items-center '>
        {data.map((fakeItem) => (
        <div className="bg-white w-[250px] rounded-xl shadow" aria-label="card-overlay-v3" key={fakeItem.id}>
          <div className="w-full rounded-xl h-[250px] flex-shrink-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1682309704250-6bac0f499665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1512&q=80"
              alt=""
              className="object-cover w-full h-full rounded-xl object-center"
            />
          </div>
          <div className="flex flex-col flex-1 p-5">
            <div className="pb-5 mb-5 border-b border-gray-200">
              <h3 className="mb-1 text-lg font-bold">{fakeItem.nombre}</h3>
              <span className="text-sm">{fakeItem.email}</span><br/>
              <span className="text-sm">Ultima donacion: {fakeItem.ultima_fecha}</span>
            
              <PersonIcon className="text-red-600" />
              <span className="text-sm ">{fakeItem.sexo}</span>
            </div>
            <div className="flex items-center justify-between w-full ml-auto">
              <div className="text-sm text-slate-400">{fakeItem.fecha_nacimiento}</div>
              <div className="flex items-center gap-x-1">
                <BadgeIcon className="text-red-600" />
                <span className="text-sm font-bold">{fakeItem.ci}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
        <button className="text-white w-[250px] bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Editar Información</button>
             
        <button className="text-white w-[250px] bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link href={'/recover'} >Cambiar contraseña</Link></button>
           
        <button className="text-white w-[250px] bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Cerrar sesión</button>
            
    </div>
  )
}

export default Perfil