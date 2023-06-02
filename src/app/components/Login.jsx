"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";

import Link from "next/link";
import Image from "next/image";
import icono from "../../../public/assets/Imagenes/donacion-de-sangre (1) 1.imageset/donacion-de-sangre (1).png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const router = useRouter();



  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
   

    // Set the default X-CSRF-TOKEN header for all requests
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
  }, [])

  
  const login = async () => {
    try {
      const response = await axios.post('http://192.168.16.90:8000/api/login', {
        email: email,
        password: password
      });
      const { token , user} = response.data;
      // Store the token locally in the browser
      localStorage.setItem('token', token);
      localStorage.setItem('user', user);
      console.log('Token stored:', token);
     
  
      // Redirect to '/perfil' page
      toast.success('Ingreso exitoso');
      router.push('/perfil');
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error.response.data.message || 'Ocurrio un error';
      toast.error(errorMessage);

    }
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
  

    // Proceed with form submission if there are no errors
    if (!passwordError || !emailError) {
      // Perform form submission logic here
    }
  };
  

  return (
    <>
      <div className="w-full h-screen flex flex-col gap-4 items-center justify-center login bg-white">
        <form className="w-full md:w-1/3 rounded-lg border-2 border-red-600 shadow-lg"  onSubmit={handleSubmit}>
       
          <div className="flex  flex-col items-center font-bold justify-center mt-6">
        
            <Image
              className="h-20 w-20 mb-3 ml-3"
             src={icono}
             width={100}
             height={100}
             alt="Imagen bolsa de sangre"
             priority
            />
          </div>
          <h2 className="text-2xl text-center text-black mb-8">Iniciar sesión</h2>
          <div className="px-12 pb-10">
          <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="email-login" className="text-sm font-medium cursor-pointer">
            Email
          </label>
          <input
            id="email-login"
            name='email-login'
            type="email"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Ingresa tu correo..."
            value={email}
            onChange={handleEmailChange}
            onBlur={validateEmail}
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
            <button
              type="submit"
              className="
                  w-full
                  py-2
                  mt-8
                  rounded-full
                  bg-red-600
                  text-gray-100
                  focus:outline-none
                "
                onClick={login}
            >
              Login
            </button>
          </div>
        </form>
        <div>¿Nuevo en el sitio? <Link className="text-red-500" href={'/sign-up'}> ¡Registrate!</Link></div>
        <div><Link href={'/recover'} className="text-red-500">¿Olvidaste tu contraseña?</Link></div>
      </div>
    </>
  );
}

export default Login;
