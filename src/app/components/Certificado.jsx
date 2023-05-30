"use client"
import React from 'react';




const Certificado = ({ record }) => {



  
  return (
    <div className="w-[300px] h-[400px] bg-white text-black border-2 border-red-600 flex flex-col justify-between rounded-lg p-4 " key={record.id}>
    
      <div className="flex justify-between">
        <div className="flex-1" id="establecimiento">Establecimiento:</div>
        <div id="establecimiento">{record.lugar_donacion}</div>
      </div>
      <div className="flex justify-between">
        <div id="ci">CI:</div>
        <div id="nro-ci">{record.cedula_donatario}</div>
      </div>
  
      <div className="flex justify-between">
        <div id="nombre">Nombre: </div>
        <div id="nombreField">{record.nombre}</div>
      </div>
      <div className="flex justify-between">
        <div id="apellido">Apellido: </div>
        <div id="apellidoField">{record.apellido}</div>
      </div>
      <div className="flex justify-between">
        <div id="apellido">Apellido: </div>
        <div id="apellidoField">{record.apellido}</div>
      </div>
      <div className="flex justify-between">
        <div id="sexo">Sexo: </div>
        <div id="sexoField">{record.sexo}</div>
      </div>
      <div className="flex justify-between">
        <div id="fecha">Fecha de donacion</div>
        <div id="fecha-donacion">{record.fecha_donacion}</div>
      </div>
    
    </div>
  );
};

export default Certificado;