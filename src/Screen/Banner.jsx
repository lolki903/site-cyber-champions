import React from 'react';
import bannerimg from '../assets/banner.svg';
import { Header } from './Header';

const Banner = () => {
  return (
    <div className='banner pb-60'>
      <Header />
      <div className='flex justify-center items-center'>
        <div className='w-1/2 mr-20 ml-40'>
          <h3 className='text-5xl text-white font-bold'>
            Un jeu <span className='text-acheter'>éducatif</span> pour sensibiliser nos enfants au numérique
          </h3>
          <button className='mt-10 p-3 m-0 bg-acheter rounded-lg'>Découvrir le jeu</button>
          <button className='mt-10 p-3 ml-10 border-2 rounded-lg text-white'>Tester le jeu</button>
        </div>
        <div className='float-left '>
          <img src={bannerimg} className='w-full' alt='banner cyber champions' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
