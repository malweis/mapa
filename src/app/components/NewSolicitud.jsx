"use client";

"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import axios from 'axios';

function NewSolicitud() {
  
    const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');




  useEffect(() => {
    getAndSetData();
  }, []);
  
  const fakeData = [
    { id: 1, lugar_donacion: 'Option 1' },
    { id: 2, lugar_donacion: 'Option 2' },
    { id: 3, lugar_donacion: 'Option 3' },
  ];
  const fakeSangre = [
    { id: 1, tipo_sangre: 'A+' },
    { id: 2, tipo_sangre: 'B-' },
    { id: 3, tipo_sangre: 'O+' },
  ];
  
  const getAndSetData = () => {
      axios.get('http://192.168.16.90:8000/api/solicitudes')
        .then((response) => {
          console.log('API request succeeded');
          console.log(response.data.data);
          setData(response.data.data);
        })
        .catch((error) => {
          console.log('API request failed');
          console.log(error);
        });
    };


  const handleDateChange = (e) => {
    const inputDate = e.target.value;

    // Get the current date
    const currentDate = new Date().toISOString().split('T')[0];

    if (inputDate > currentDate) {
      setSelectedDate(currentDate);
    } else {
      setSelectedDate(inputDate);
    }
  };
  
  const renderOptions = () => {
    return fakeData.map((record) => (
      <option key={record.id} value={record.lugar_donacion}>
        {record.lugar_donacion}
      </option>
    ));
  };
  const renderTiposangre = () => {
    return fakeSangre.map((record) => (
      <option key={record.id} value={record.tipo_sangre}>
        {record.tipo_sangre}
      </option>
    ));
  };



  return (
    <div className="flex flex-col justify-center items-center register p-5">
    <form
        autoComplete="off"
        className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
        aria-label="signup-form"
      
      >
        <h2 className="mb-10 text-3xl font-bold text-center">Nueva solicitud</h2>

        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="nombreYApellido"
            className="text-sm font-medium cursor-pointer"
          >
            Nombre y Apellido
          </label>
          <input
            id="nombreYApellido"
            name="nombreYApellido"
            type="text"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Ingrese nombre y apellido"
          />
        </div>
      

        <div className="flex flex-col items-start mb-5 gap-y-3 ">
          <label htmlFor="tipo_sangre" className="text-sm font-medium cursor-pointer">
           Tipo de sangre
          </label>
          <div className="relative w-[340px] text-sm font-medium">
            <select
              id="tipo_sangre"
              name='tipo_sangre'
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
       
            >
              <option value=""  disabled>
                Escoja una opcion
              </option>
              {renderTiposangre()}
            </select>
         
           
          </div>
        </div>
       

        <div className="flex flex-col items-start mb-5 gap-y-3 ">
          <label htmlFor="localizacion" className="text-sm font-medium cursor-pointer">
            Lugar de donacion
          </label>
          <div className="relative w-[340px] text-sm font-medium">
            <select
              id="localizacion"
              name='localizacion'
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
       
            >
              <option value=""  disabled>
                Escoja una opcion
              </option>
              {renderOptions()}
            </select>
         
           
          </div>
        </div>

        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="volumen"
            className="text-sm font-medium cursor-pointer"
          >
            Volumen
          </label>
          <input
            id="volumen"
            name="volumen"
            type="number"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Ingresa el volumen requerido"
          />
        </div>


        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="finalCountdown" className="text-sm font-medium cursor-pointer">
            Fecha limite
          </label>
          <input
            id="finalCountdown"
            name="finalCountdown"
            type="date"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Ingrese la fecha limite"
            value={selectedDate}
            onChange={handleDateChange}
            max={new Date().toISOString().split('T')[0]} // Set the max attribute to the current date
          />
        </div>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="telefono"
            className="text-sm font-medium cursor-pointer"
          >
            Telefono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Ingrese su nro de contacto"
          />
        </div>

        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="desc"
            className="text-sm font-medium cursor-pointer"
          >
            Descripcion
          </label>
          <textarea
            id="desc"
            name="desc"
            cols={3}
            rows={3}
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none resize-none"
            placeholder="Descripcion de la solicitud"
          />
        </div>
      
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
        >
          Crear solicitud
        </button>
      </form>
    </div>
  );
}

export default NewSolicitud;
