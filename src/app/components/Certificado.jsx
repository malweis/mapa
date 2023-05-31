"use client"
import React from 'react';




const Certificado = ({ record , index }) => {

  const datos = record.data[index];
  
  
  return (
    
    <div className="w-[300px] h-[400px] bg-white text-black border-2 border-red-600 flex flex-col justify-between rounded-lg p-4 certificado shadow-lg" key={record.id}>
    
      <div className="flex justify-between">
        <div className="flex-1" id="establecimiento">Establecimiento:</div>
        <div id="establecimiento">{datos.local_donacion}</div>
      </div>
      <div className="flex justify-between">
        <div id="ci">CI:</div>
        <div id="nro-ci">{datos.user.nro_cedula}</div>
      </div>
  
      <div className="flex justify-between">
        <div id="nombre">Nombre: </div>
        <div id="nombreField">{datos.user.name}</div>
      </div>
      <div className="flex justify-between">
        <div id="apellido">Apellido: </div>
        <div id="apellidoField">{datos.user.surname}</div>
      </div>
   
      <div className="flex justify-between">
        <div id="sexo">Sexo: </div>
        <div id="sexoField">{datos.user.sexo}</div>
      </div>
      <div className="flex justify-between">
        <div id="fecha">Fecha de donacion</div>
        <div id="fecha-donacion">{datos.fecha_donacion}</div>
      </div>
    
    </div>
  );
};

export default Certificado;