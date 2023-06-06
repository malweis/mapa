"use client";

import React, { useState, useEffect } from "react";

import axios from "axios";
import { getToken } from "../(auth)/reducers/authSlice";
import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewSolicitud() {
  const [locales, setLocales] = useState({ data: [] });
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const wholeState = useSelector(getToken); // Access the token value from the Redux store
  const storedToken = wholeState.payload.token;
  const router = useRouter();



  useEffect(() => {
    console.log(storedToken);

    if (storedToken) {
    } else {
      router.push('/Login');
    }
  }, []);



  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Create a new FormData object
    const formData = new FormData(e.target);
  
    // Create a data object and populate it with the form values
    const data = {
      solicitud: formData.get("desc"),
      fecha_limite: formData.get("finalCountdown"),
      volumenes_necesarios: parseInt(formData.get("volumen")),
      nombre_apellido_donatario: formData.get("nombreYApellido"),
      cedula_donatario: formData.get("cedula"),
      telefono_contacto: formData.get("telefono"),
      tipo_sangre: parseInt(formData.get('tipo_sangre')),
      establecimiento: formData.get("localizacion"),
    };
  
    // Make a POST request to the API endpoint using Axios
    console.log(storedToken);
  
    axios
      .post("http://192.168.16.90:8000/api/solicitudes", data, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      })
      .then((response) => {
        // Display success toast notification
        toast.success('Solicitud enviada de forma exitosa!');
  
        // Reset the form
        e.target.reset();
      })
      .catch((error) => {
        // Display error toast notification
        toast.error('Ocurrio un error durante el envio de la solicitud, por favor intente de nuevo', error);
  
        // Handle error during API request
        console.error(error);
      });
  };

  const fakeSangre = [
    { id: 1, tipo_sangre: "A+" },
    { id: 2, tipo_sangre: "A-" },
    { id: 3, tipo_sangre: "B+" },
    { id: 4, tipo_sangre: "B-" },
    { id: 5, tipo_sangre: "O+" },
    { id: 6, tipo_sangre: "O-" },
    { id: 7, tipo_sangre: "AB+" },
    { id: 8, tipo_sangre: "AB-" },
  ];

  const handleDateChange = (e) => {
    const inputDate = e.target.value;

    // Get the current date
    const currentDate = new Date().toISOString().split("T")[0];

    if (inputDate > currentDate) {
      setSelectedDate(currentDate);
    } else {
      setSelectedDate(inputDate);
    }
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
          console.error('Error:', error);
          const errorMessage = error.response.data.message || 'Ocurrió un error';
          toast.error(errorMessage);
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
    return datos.map((record, index) => (
      <option key={record.id} value={record.local_donacion} >
        {record.local_donacion}
      </option>
    ));
  };

  const renderTiposangre = () => {
    return fakeSangre.map((record) => (
      <option key={record.id} value={record.id}>
        {record.tipo_sangre}
      </option>
    ));
  };

  return (
    <div className="flex flex-col justify-center items-center register p-5">
      <form
        autoComplete="off"
        className="w-full max-w-[600px] p-10 bg-white  border-2 border-red-600 rounded-lg shadow-xl"
        aria-label="signup-form"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-10 text-3xl font-bold text-center">
          Nueva solicitud
        </h2>

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

        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="cedula"
            className="text-sm font-medium cursor-pointer"
          >
            Cedula
          </label>
          <input
            id="cedula"
            name="cedula" // Corrected name attribute
            type="text"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Ingrese su nro de cedula"
          />
        </div>

        <div className="flex flex-col items-start mb-5 gap-y-3 ">
          <label
            htmlFor="tipo_sangre"
            className="text-sm font-medium cursor-pointer"
          >
            Tipo de sangre
          </label>
          <div className="relative w-full text-sm font-medium">
            <select
              id="tipo_sangre"
              name="tipo_sangre"
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            >
              <option value="" disabled>
                Escoja una opcion
              </option>
              {renderTiposangre()}
            </select>
          </div>
        </div>

        <div className="flex flex-col items-start mb-5 gap-y-3 ">
          <label
            htmlFor="localizacion"
            className="text-sm font-medium cursor-pointer"
          >
            Lugar de donacion
          </label>
          <div className="relative w-full text-sm font-medium">
            <select
              id="localizacion"
              name="localizacion"
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            >
              <option value="" disabled>
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
          <label
            htmlFor="finalCountdown"
            className="text-sm font-medium cursor-pointer"
          >
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
            max={new Date().toISOString().split("T")[0]} // Set the max attribute to the current date
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
          <label htmlFor="desc" className="text-sm font-medium cursor-pointer">
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
          className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-red-600 rounded-lg h-[60px]"
        >
          Crear solicitud
        </button>
      </form>
    </div>
  );
}

export default NewSolicitud;
