
"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useSelector } from "react-redux";
import { getToken } from "../(auth)/reducers/authSlice";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Texto from "./Texto";
import SelectList from "./SelectList";


function EditPerfil() {
  const [sexo, setSexo] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const wholeState = useSelector(getToken); // Access the token value from the Redux store
  const storedToken = wholeState.payload.token;

 
  

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


  



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    // Regular expression for email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Ingrese un correo valido');
    } else {
      setEmailError('');
    }
  };


  const handleSexoChange = (e) => {
    setSexo(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    console.log(storedToken)
    // Proceed with form submission if there are no errors
    if ((!passwordError && !confirmPasswordError) || !emailError) {
      // Create a data object with the form values
      const data = {
        name: e.target.name.value,
        surname: e.target.surname.value,
        email: email,
        sexo: sexo.id,
        fecha_nacimiento: selectedDate,
        // Add other form fields as needed
      };
  
      // Make a POST request to the API endpoint using Axios
      axios
        .post("http://192.168.16.90:8000/api/editar-perfil/", data, {
          headers: {
            Authorization: `Bearer ${storedToken}`
          }
        })
        .then((response) => {
          // Handle the response from the API
          console.log(response.data); // Replace with your desired logic
  
          // Display success toast notification
          toast.success('Se ha registrado correctamente');
  
          // Reset the form
          e.target.reset();
        })
        .catch((error) => {
          // Handle error during API request
          console.error(error);
  
          // Display error toast notification
          toast.error('Hubo un error en el proceso de registro', error);
        });
    }
  };
  
  
  const people = [
    { id: 'H', name: 'Masculino' },
    { id: 'M', name: 'Femenino' },
  
  ];



  return (
    <div className="flex flex-col justify-center items-center register  p-5">
    <form
        autoComplete="off"
        className="w-full max-w-[600px] p-10 bg-white border-2 border-red-600 rounded-lg shadow-xl"
        aria-label="signup-form"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-10 text-3xl font-bold text-center">Editar Perfil</h2>

     
        <Texto 
        label={"Nombres"}
         tipo={"text"} 
         id={"name"} 
         validation={"valid"}
          required={"true"} 
          mode={"text"}
           placeholder={"Ingresa tu nombre"}/>

        <Texto 
        label={"Apellidos"}
         tipo={"text"} 
         id={"surname"} 
         validation={"valid"}
          required={"true"} 
          mode={"text"}
           placeholder={"Ingresa tus apellidos"}/>



       
        

        <SelectList loading={false} options={people} nombre={'name'} nameClass={'sexos'} evento={handleSexoChange}/>
       
        <div className="flex flex-col items-start mb-5 gap-y-3">
        <Texto 
        label={"Correo electronico"}
         tipo={"email"} 
         id={"email"} 
         validation={emailError ? 'invalid' : 'valid'}
         error={emailError ? 'Escriba un formato adecuado de email' : ''}
          required={"true"} 
          mode={"email"}
           placeholder={"Ingresa tu correo electronico"}
           patron={ "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"}
           evento={handleEmailChange}
           eventoblur={validateEmail}
           />
            {emailError && <p className="text-red-500">{emailError}</p>}
            </div>



            
       
        

        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="Fecha" className="text-sm font-medium cursor-pointer">
            Fecha de nacimiento
          </label>
          <input
            id="Fecha"
            name="Fecha"
            type="date"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Ingresa tus apellidos"
            value={selectedDate}
            onChange={handleDateChange}
            max={new Date().toISOString().split('T')[0]} // Set the max attribute to the current date
          />
        </div>
        
       
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-red-600 rounded-lg h-[60px]"
        >
          Cambiar Datos
        </button>
      </form>
    </div>
  );
}

export default EditPerfil;
