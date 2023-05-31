"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Link from 'next/link';

const Solicitudes = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

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

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      const filtered = data.filter(record => record.creado_por === 50);
      setFilteredData(filtered);
    } else {
      getAndSetData();
      setFilteredData([]);
    }
  };
  
  const renderCards = () => {
    const records = isChecked ? filteredData : data;
    return records.map(record => (
      <Card key={record.id} record={record} />
    ));
  };

  return (
    <div className=" w-screen h-full bg-white grid place-items-center gap-6 p-8">
      <label className='flex  gap-4'>
        <div className="flex justify-center items-center " id="checks">
          <input
            type="checkbox"
            id="choose-me"
            className="peer hidden"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="choose-me"
            className="select-none cursor-pointer flex justify-center items-center rounded-lg border-2 border-red-600
            px-8 py-4  h-[60px] font-bold text--red-600 transition-colors duration-200 ease-in-out
              peer-checked:bg-white peer-checked:text-gray-900 peer-checked:border-gray-200"
          >
            Ver mis donaciones
          </label>
        </div>
        <Link className="inline-flex items-center gap-2 justify-center px-8 py-4 font-sans font-semibold tracking-wide text-black border-2 border-red-600 rounded-lg h-[60px]" href={'/solicitud-nueva'}>
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
            <span>Nueva solicitud</span>
          </Link>
      </label>
   
    {renderCards()}
    </div>
  );
};

export default Solicitudes;