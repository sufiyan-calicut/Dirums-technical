import React from 'react';

const PromoInfo = () => {
  return (
    <div className="flex justify-center items-center bg-bgBlack py-2 ">
      <div className="text-center text-2xs sm:text-xs text-fontGray  flex mx-auto gap-2 h-full items-center justify-center">
        <p className=''>Worldwide Shipping*</p>
        <div className="border-r h-2 sm:h-3 border-fontGray "></div>
        <p> Free Returns* </p>
        <div className="border-r h-2 sm:h-3 border-fontGray"></div>
        <p>Handpicked Artwork</p>
      </div>
    </div>
  );
};

export default PromoInfo;
