"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewCertificado() {
   
    const [locales, setLocales] = useState({ data: [] });
    const [loading, setLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState('');
 
    

    
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData(e.target);

    // Create a data object and populate it with the form values
    const data = {
     
      fecha_donacion: selectedDate,
      local_donacion_id: formData.get("localizacion"),
    };

    // Make a POST request to the API endpoint using Axios
    const promise = new Promise((resolve, reject) => {
      const storedToken = localStorage.getItem('token');;
      console.log(storedToken);
      axios
        .post("http://192.168.16.90:8000/api/certificados", data, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        .then((response) => {
          // Resolve the promise with the response data
          resolve(response.data);
        })
        .catch((error) => {
          // Reject the promise with the error
          reject(error);
        });
    });

    // Handle the promise
    promise
      .then((data) => {
        // Handle the response from the API
        console.log(data); // Replace with your desired logic

        // Reset the form
        e.target.reset();
      })
      .catch((error) => {
        // Handle error during API request
        console.error(error);
      });
  };
    



    
      useEffect(() => {
        const fetchLocales = () => {
          axios
            .get("http://192.168.16.90:8000/api/locales")
            .then((response) => {
              setLocales(response.data);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching locales:", error);
            });
        };
    
        fetchLocales();
      }, []);
    
      const renderOptions = () => {
        if (loading) {
          return <option>Loading...</option>;
        }
    
        if (locales.data.length === 0) {
          return <option>No options available</option>;
        }
        const datos = locales.data;
        console.log(datos);
        return datos.map((record) => (
          <option key={record.id} value={record.id} >
            {record.local_donacion}
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
         className="w-full max-w-[600px] p-10 bg-white border-2 border-red-600  rounded-lg shadow-xl"
         aria-label="signup-form"
         onSubmit={handleSubmit}
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
            Localzacion
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
           className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-red-600 rounded-lg h-[60px]"
         >
           Crear un certificado
         </button>
       </form>
    </div>
  )
}

export default NewCertificado