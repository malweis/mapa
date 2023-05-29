import React from 'react';

const CustomButton = ({
  bgColor = 'bg-blue-500',
  textColor = 'text-white',
  lineColor = 'border-black',
  sideImage,
  opacity = 'opacity-100',
  children,
}) => {
  const buttonStyle = `inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide rounded-2xl h-[30px] ${bgColor} ${textColor} ${lineColor} ${opacity}`;

  const imageStyle = 'mr-2 h-5 w-5';

  return (
    <button className={buttonStyle}>
      {sideImage && <span className={imageStyle}>{sideImage}</span>}
      {children}
    </button>
  );
};

export default CustomButton;
