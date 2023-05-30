"use client";

import React, { useState } from "react";
import Link from "next/link";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

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
      setEmailError('Please enter a valid email address');
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
    if (!passwordError && !confirmPasswordError || !emailError) {
      // Perform form submission logic here
    }
  };
  



  return (
    <div className="flex flex-col justify-center items-center register p-5">
    <form
        autoComplete="off"
        className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
        aria-label="signup-form"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-10 text-3xl font-bold text-center">Registro</h2>

        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="nombres"
            className="text-sm font-medium cursor-pointer"
          >
            Nombres
          </label>
          <input
            id="nombres"
            name="nombres"
            type="text"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Ingresa tus nombres"
          />
        </div>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="apellidos"
            className="text-sm font-medium cursor-pointer"
          >
            Apellidos
          </label>
          <input
            id="apellidos"
            name="apellidos"
            type="text"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Ingresa tus apellidos"
          />
        </div>

        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="sexo" className="text-sm font-medium cursor-pointer">
            Sexo
          </label>
          <div className="relative w-[340px] text-sm font-medium">
            <select
              id="sexo"
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            >
              <option value="" selected>
                Escoja una opcion
              </option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
            <div
              id="sexo-options"
              className="absolute left-0 w-full p-2 mt-2 bg-white rounded-lg shadow top-full hidden"
            >
              <div
                className="p-3 rounded cursor-pointer hover:text-blue-500 hover:bg-blue-50"
                onClick={() => {
                  const select = document.getElementById("sexo");
                  select.value = "M";
                  select.click();
                }}
              >
                Masculino
              </div>
              <div
                className="p-3 rounded cursor-pointer hover:text-blue-500 hover:bg-blue-50"
                onClick={() => {
                  const select = document.getElementById("sexo");
                  select.value = "F";
                  select.click();
                }}
              >
                Femenino
              </div>
              <div
                className="p-3 rounded cursor-pointer hover:text-blue-500 hover:bg-blue-50"
                onClick={() => {
                  const select = document.getElementById("sexo");
                  select.value = "O";
                  select.click();
                }}
              >
                Otro
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="email" className="text-sm font-medium cursor-pointer">
            Email
          </label>
          <input
            id="email"
            name='email'
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
              onBlur={validatePassword}
            />

            {/* Password validation error */}
            {passwordError && <p className="text-red-500">{passwordError}</p>}

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
                  {/* ... */}
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* ... */}
                </svg>
              )}
            </span>
          </div>
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

            {/* Confirm password validation error */}
            {confirmPasswordError && <p className="text-red-500">{confirmPasswordError}</p>}

            <span
              className="absolute cursor-pointer text-slate-400 right-4 top-2/4 -translate-y-2/4"
              onClick={() => setShowPassword(!showPassword)}
            >
              {/* Password visibility toggle icons */}
              {/* ... */}
            </span>
          </div>
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
          <Link href="#" className="text-blue-500 underline">
            Inicia sesion
          </Link>
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
        >
          Crear la cuenta
        </button>
      </form>
    </div>
  );
}

export default Register;
