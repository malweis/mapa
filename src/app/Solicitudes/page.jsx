"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const page = () => {
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
    <div className=" w-screen h-full bg-red-600 grid place-items-center gap-6 p-8">
      <label>
        <div className="flex" id="checks">
          <input
            type="checkbox"
            id="choose-me"
            className="peer hidden"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="choose-me"
            className="select-none cursor-pointer rounded-lg border-2 border-gray-200
              py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out
              peer-checked:bg-white peer-checked:text-gray-900 peer-checked:border-gray-200"
          >
            Ver mis donaciones
          </label>
        </div>
      </label>
    {renderCards()}
    </div>
  );
};

export default page;