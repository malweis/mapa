"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Certificado from './Certificado';
import Link from 'next/link';

const Certificados = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    getAndSetData();
  }, []);

  const getAndSetData = () => {
    axios.get('http://192.168.16.90:8000/api/solicitudes')
      .then(response => {
        console.log('API request succeeded');
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch(error => {
        console.log('API request failed');
        console.log(error);
      });
  };

 
  
  const renderCards = () => {
    const records =  data;
    return records.map(record => (
      <Certificado key={record.id} record={record} />
    ));
  };

  return (
    <div className=" w-screen h-full bg-red-600 grid place-items-center gap-6 p-8">
          <Link className="inline-flex items-center gap-2 justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white border-2 border-white rounded-lg h-[60px]" href={'/certificado-nuevo'}>
            <span>
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
            <span>Nuevo Certificado</span>
          </Link>
    {renderCards()}
    </div>
  );
};

export default Certificados;