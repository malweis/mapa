"use client"
import React from 'react';
import Image from 'next/image';



const Card = ({ record }) => {
  let tipo_san = record.tipo_sangre;
  console.log(tipo_san)
  const getBloodTypeImage = (tipo_san) => {
    switch (tipo_san) {
      case 1:
        return '../../public/Assets.xcassets/A+.imageset/A+.png';
      case 2:
        return '../../public/Assets.xcassets/A-.imageset/A-.png';
      case 3:
        return '../../public/Assets.xcassets/B+.imageset/B+.png';
      case 4:
        return '../../public/Assets.xcassets/B-.imageset/B-.png';
      case 5:
        return '../../public/Assets.xcassets/O+.imageset/O+.png';
      case 6:
        return '../../public/Assets.xcassets/O-.imageset/O-.png';
      case 7:
        return '../../public/Assets.xcassets/AB+.imageset/AB+.png';
      case 8:
        return '../../public/Assets.xcassets/AB-.imageset/AB-.png';
      default:
        return 'default.png';
    }
  };
  
  const createWhatsAppLink = () => {
    const message = `Hola, quiero contactarme contigo acerca de la donación de sangre. Mi nombre es ${record.nombre_apellido_donatario}, mi teléfono es ${record.creado_por}, mi CI es ${record.cedula_donatario}, y necesito ${record.volumenes_necesarios} volumen(es) de sangre ${record.tipo_sangre}. ¿Podemos coordinar la donación en ${record.establecimiento} antes de la fecha límite ${record.fecha_limite}?`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/595986501547?text=${encodedMessage}`;
  };

  const bloodTypeImage = getBloodTypeImage(record.tipo_sangre);
  
  return (
    <div className="w-[300px] h-[400px] bg-white text-black flex flex-col justify-between rounded-lg p-4 " key={record.id}>
      <div className="flex justify-between">
        <div className="flex-1 font-bold" id="bold-title">{record.nombre_apellido_donatario}</div>
        <div id="basura">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
        <div id="whatsapp">
          <a href={createWhatsAppLink()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
          </a>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex-1" id="telefono">Telefono:</div>
        <div id="nro-telefono">{record.creado_por}</div>
      </div>
      <div className="flex justify-between">
        <div id="ci">CI:</div>
        <div id="nro-ci">{record.cedula_donatario}</div>
      </div>
      <div className="flex justify-between">
        <div id="lugar">Lugar establecido: </div>
        <div id="lugarD">{record.establecimiento}</div>
      </div>
      <div className="flex justify-between">
        <div id="sangre">Tipo de sangre:</div>
        <div id="tipo">  <Image src={bloodTypeImage} alt={record.tipo_sangre} width={"30px"} height={"30px"} /></div>
      </div>
      <div className="flex justify-between">
        <div id="volumenes">Volumenes requeridos: </div>
        <div id="nro-vol">{record.volumenes_necesarios}</div>
      </div>
      <div className="flex justify-between">
        <div id="fecha">Fecha limite</div>
        <div id="fecha-limite">{record.fecha_limite}</div>
      </div>
      <div className="flex justify-center">
        <div id="token">{record.solicitud}</div>
      </div>
    </div>
  );
};

export default Card;