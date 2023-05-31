"use client"
import React, { useRef, useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import { BloodtypeOutlined } from '@mui/icons-material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import 'leaflet/dist/leaflet.css';

function createCustomIcon() {
  return L.divIcon({
    html: ReactDOMServer.renderToStaticMarkup(
      <BloodtypeOutlined className="icono" />
    ),
    className: '',
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });
}



function Mapas() {
  const [locales, setLocales] = useState([]);
  const [isButtonToggled, setButtonToggled] = useState(false);

  const [isButtonContainerVisible, setButtonContainerVisible] = useState(false);

  const mapRef = useRef();
  console.log(mapRef.current)
 
  const handleButtonShowClick = () => {
    setButtonToggled(!isButtonToggled)
    setButtonContainerVisible(!isButtonContainerVisible);
  };
  

  useEffect(() => {
    fetch('http://192.168.16.90:8000/api/locales')
      .then((response) => response.json())
      .then((data) => setLocales(data));
  }, []);

  const position = [-25.306076, -57.625237];

  const customIcon = createCustomIcon();

  const handleMapClick = (e) => {
    const { latlng } = e;
    const map = mapRef.current;
    console.log(mapRef.current)
    if (map != null) {
      map.flyTo(latlng, 16);
    }
  };


  


  return (
    <div className="bg-rose-800 mapa w-full h-screen grid grid-cols-3 grid-rows-2 gap-8">
      <div className='col-start-1 col-end-4  row-start-1 row-end-4 z-0'>
        <MapContainer id="map" ref={mapRef} center={position} zoom={13} scrollWheelZoom={true} >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {Array.isArray(locales.data) && locales.data.length > 0 ? (
            locales.data.map((local) => (
              <Marker
                key={local.id}
                position={[local.latitud, local.longitud]}
                icon={customIcon}
              >
                <Popup>
                  <div>
                    <h3>Dirección: {local.direccion}</h3>
                    <h4>Nombre de local: {local.local_donacion}</h4>
                    <p>
                      Horario: De {local.hora_apertura} a {local.hora_cierre}
                    </p>
                    <a
                      href={`https://www.google.com/maps?q=${local.latitud},${local.longitud}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))
          ) : (
            <p>No hay locales disponibles.</p>
          )}
        
        </MapContainer>
      </div>

      <div className={` w-full fixed  navegar bg-red-600 p-8  box-border  self-end ${isButtonContainerVisible ? 'ver' : ''}`} >
        <h1 className='text-white font-bold text-xl button-show mb-4 ' ><button onClick={handleButtonShowClick}>Locales de donación <KeyboardArrowUpIcon className={`button-icon ${isButtonToggled ? 'rotated' : ''}`} /></button> </h1>

        <div className={`button-container flex flex-col justify-start items-center gap-2 h-full  z-20 ${isButtonContainerVisible ? '' : 'hidden'}`}>

           
          {Array.isArray(locales.data) && locales.data.length > 0 ? (
            locales.data.map((local) => (
              <button key={local.id} onClick={() => handleMapClick({ latlng: [local.latitud, local.longitud] })} className='flex justify-start  px-2 py-2 font-sans font-semibold tracking-wide rounded-2xl h-9 md:w-9/12 w-full h-full bg-white'>
              Ir a  {local.local_donacion}
            </button>
            ))
          ) : (
            <p>No hay locales disponibles.</p>
          )}
        </div>
      </div>
     
    </div>
  );
}

export default Mapas;
