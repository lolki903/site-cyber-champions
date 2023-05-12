import React from 'react';
import bannerimg from '../assets/banner.svg';
import { Header } from './Header';

const Banner = () => {
  return (
    <div className='bg-gradient-to-r from-backgroundlinear1 to-backgroundlinear2 h-screen'>
      <Header />
      <div className='flex justify-center items-center'>
        <div className=''>
          <h3 className='text-5xl text-white font-bold'>
            Un jeu <span className='text-acheter'>éducatif</span> pour sensibiliser nos enfants au numérique
          </h3>
          <button className='mt-10 p-3 m-0 bg-acheter rounded-lg'>Découvrir le jeu</button>
          <button className='mt-10 p-3 m-0 bg-acheter rounded-lg'>Tester le jeu</button>
        </div>
        <div className='float-left '>
          <img src={bannerimg} className='w-1/2' alt='banner cyber champions' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
