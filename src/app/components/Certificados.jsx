"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Certificado from './Certificado';

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
    
    {renderCards()}
    </div>
  );
};

export default Certificados;