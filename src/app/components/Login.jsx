import React from "react";
import Link from "next/link";

function Login() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center login bg-white">
        <form className="w-full md:w-1/3 rounded-lg border-2 border-red-600">
          <div>Donacion de sangre</div>
          <div className="flex font-bold justify-center mt-6">
            <img
              className="h-20 w-20 mb-3"
              src="https://dummyimage.com/64x64"
            />
          </div>
          <h2 className="text-2xl text-center text-gray-200 mb-8">Iniciar sesión</h2>
          <div className="px-12 pb-10">
            <div className="w-full mb-2">
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Correo electronico"
                  className="
                      w-full
                      border
                      rounded
                      px-3
                      py-2
                      text-gray-700
                      focus:outline-none
                    "
                />
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center">
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="
                      w-full
                      border
                      rounded
                      px-3
                      py-2
                      text-gray-700
                      focus:outline-none
                    "
                />
              </div>
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
            >
              Login
            </button>
          </div>
        </form>
        <div>¿Nuevo en el sitio? <Link className="text-blue-500" href={'/Sign-up'}> ¡Registrate!</Link></div>
        <div><Link href={'/Recover'} className="text-blue-500">¿Olvidaste tu contraseña?</Link></div>
      </div>
    </>
  );
}

export default Login;
