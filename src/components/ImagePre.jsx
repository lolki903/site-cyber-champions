import React from 'react';
import im1 from '../assets/im1.svg';
import im2 from '../assets/im2.svg';

const ImagePre = ({image,className}) => {
  return (
    <div className='flex justify-center mt-20'>
        <img src={image} className={className} alt='banner cyber champions' />
    </div>
  );
};

export default ImagePre;
