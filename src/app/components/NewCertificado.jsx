"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewCertificado() {
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
    const getAndSetData = () => {
        axios
          .get('http://192.168.16.90:8000/api/solicitudes')
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

    
      const renderOptions = () => {
        return fakeData.map((record) => (
          <option key={record.id} value={record.lugar_donacion}>
            {record.lugar_donacion}
          </option>
        ));
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

  return (
    <div className='newcert flex justify-center items-center'>
       <form
         autoComplete="off"
         className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
         aria-label="signup-form"
       >
         <h2 className="mb-10 text-3xl font-bold text-center">Nuevo certificado</h2>
         <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="Fecha-donacion" className="text-sm font-medium cursor-pointer">
            Fecha de donacion
          </label>
          <input
            id="Fecha-donacion"
            name="Fecha-donacion"
            type="date"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Ingresa tus apellidos"
            value={selectedDate}
            onChange={handleDateChange}
            max={new Date().toISOString().split('T')[0]} // Set the max attribute to the current date
          />
        </div>
        <div className="flex flex-col items-start mb-5 gap-y-3 ">
          <label htmlFor="localizacion" className="text-sm font-medium cursor-pointer">
            Sexo
          </label>
          <div className="relative w-[340px] text-sm font-medium">
            <select
              id="localizacion"
              name='localizacion'
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
             
            >
              <option value="" >
                Escoja una opcion
              </option>
              {renderOptions()}
            </select>
         
           
          </div>
        </div>
      
         <button
           type="submit"
           className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
         >
           Crear un certificado
         </button>
       </form>
    </div>
  )
}

export default NewCertificado