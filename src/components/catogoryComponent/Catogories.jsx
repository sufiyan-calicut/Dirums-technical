import React from 'react';

const Catogories = () => {
  return (
    <div className="bg-darkThemeOrange text-fontGray h-12 relative ">
      <div className='flex whitespace-nowrap font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm justify-evenly w-full md:text-base gap-2'>
        <div>Artwork For Wall</div>
        <div>Folk Art & Craft</div>
        <div>Wildlife Paintings</div>
        <div>Home & Living</div>
        <div>Painting For Living Room</div>
        <div>Religious Paintings</div>
      </div>
    </div>
  );
};

export default Catogories;
