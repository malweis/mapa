"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Texto from "./Texto";
import SelectList from "./SelectList";


function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [nroCedula, setNroCedula] = useState('');


  const handleNroCedulaChange = (e) => {
    setNroCedula(e.target.value);
  };
  

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validatePassword = () => {
    // Define your password validation rules here
    // For example, at least 8 characters with at least one uppercase, one lowercase, and one digit
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Las contraseñas deben tener al menos 8 caracteres , una mayuscula , una minuscula y un numero');
    } else {
      setPasswordError('');
    }
  };


  const validateConfirmPassword = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('Las contraseñas no coinciden');
    } else {
      setConfirmPasswordError('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
  
    // Proceed with form submission if there are no errors
    if ((!passwordError && !confirmPasswordError) || !emailError) {
      // Create a data object with the form values
      const data = {
        name: e.target.nombres.value,
        surname: e.target.apellidos.value,
        nro_cedula: nroCedula, // Add the nro_cedula field
        password: password,
        email: email,
        fecha_nacimiento: selectedDate,
        // Add other form fields as needed
      };
  
      // Make a POST request to the API endpoint using Axios
      axios
  .post("http://192.168.16.90:8000/api/registro", data)
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
    { id: 'M', name: 'Masculino' },
    { id: 'F', name: 'Femenino' },
  
  ];



  return (
    <div className="flex flex-col justify-center items-center register  p-5">
    <form
        autoComplete="off"
        className="w-full max-w-[600px] p-10 bg-white border-2 border-red-600 rounded-lg shadow-xl"
        aria-label="signup-form"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-10 text-3xl font-bold text-center">Registro</h2>

     
        <Texto 
        label={"Nombres"}
         tipo={"text"} 
         id={"nombres"} 
         validation={"valid"}
          required={"true"} 
          mode={"text"}
           placeholder={"Ingresa tu nombre"}/>

        <Texto 
        label={"Apellidos"}
         tipo={"text"} 
         id={"apellidos"} 
         validation={"valid"}
          required={"true"} 
          mode={"text"}
           placeholder={"Ingresa tus apellidos"}/>

<Texto 
        label={"Numero de cedula"}
         tipo={"text"} 
         id={"nro_cedula"} 
         validation={"valid"}
          required={"true"} 
          mode={"text"}
           placeholder={"Ingresa tu numero de cedula"}/>

       
        

        <SelectList loading={false} options={people} nombre={'name'}/>
       
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
           patron={ /^[^\s@]+@[^\s@]+\.[^\s@]+$/}
           evento={handleEmailChange}
           eventoblur={validateEmail}
           />
            {emailError && <p className="text-red-500">{emailError}</p>}
            </div>


        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="password" className="text-sm font-medium cursor-pointer">
            Contraseña
          </label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full p-4 pr-12 transition-all bg-transparent border rounded-lg outline-none border-slate-200 focus:border-blue-500"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={handlePasswordChange}
              onBlur={validatePassword}
            />

          

            <span
              className="absolute cursor-pointer text-slate-400 right-4 top-2/4 -translate-y-2/4"
              onClick={() => setShowPassword(!showPassword)}
            >
              {/* Password visibility toggle icons */}
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                   <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                   <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                </svg>
            
              )}
            </span>
            
          </div>
            {/* Password validation error */}
            {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>

        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="confirmPassword" className="text-sm font-medium cursor-pointer">
            Confirmar contraseña
          </label>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              className="w-full p-4 pr-12 transition-all bg-transparent border rounded-lg outline-none border-slate-200 focus:border-blue-500"
              placeholder="Repite tu constraseña"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onBlur={validateConfirmPassword}
            />

        

            <span
              className="absolute cursor-pointer text-slate-400 right-4 top-2/4 -translate-y-2/4"
              onClick={() => setShowPassword(!showPassword)}
            >
              {/* Password visibility toggle icons */}
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                   <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                   <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                </svg>
            
              )}
            </span>
          </div>
              {/* Confirm password validation error */}
              {confirmPasswordError && <p className="text-red-500">{confirmPasswordError}</p>}
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
        
        <div className="flex items-center justify-end mb-5 text-slate-400">
          <p>¿Ya tienes una cuenta?</p>
          <Link href="/login" className="text-red-500 underline">
          &nbsp;&nbsp;  Inicia sesion
          </Link>
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-red-600 rounded-lg h-[60px]"
        >
          Crear la cuenta
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;
