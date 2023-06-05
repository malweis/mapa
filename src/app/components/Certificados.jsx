"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Certificado from './Certificado';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Certificados = () => {
  const [data, setData] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    console.log(storedToken);
    if (storedToken) {
      fetchData(storedToken);
    } else {
      router.push('/Login');
    }
  }, []);

  const fetchData = async (storedToken) => {
    console.log(storedToken);
    try {
      const response = await axios.get('http://192.168.16.90:8000/api/certificados?desc=1', {
        headers: {
          Authorization: `Bearer ${storedToken}`
        }
      });

      const responseData = response.data;
     

      if (Array.isArray(responseData.data) && responseData.data.length > 0) {
        setData([responseData]); // Wrap the object in an array to maintain consistency
        toast.success('Certificados cargados!'); // Display success notification
      } else {
        console.error('Error: Invalid response data format');
        toast.error('No hay registros'); // Display error notification
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Ocurrió un error: ' + error); // Display error notification
    }
  };

 
  
     const renderCards = () => {
   
      return data.map((record, index) => (
        <Certificado key={record.data[index].id} record={record} index={index} />
      ));
    
    };
    
  return (
    <div className=" w-screen h-full bg-white grid place-items-center gap-6 p-8">
          <Link className="inline-flex items-center gap-2 justify-center px-8 py-4 font-sans font-semibold tracking-wide text-red-600 border-2 border-red-600 rounded-lg h-[60px]" href={'/Certificado-nuevo'}>
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