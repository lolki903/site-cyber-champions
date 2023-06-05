import React from 'react';
import bannerimg from '../assets/banner.svg';
import Buton from '../components/Button';
import { Header } from './Header';

const Banner = () => {
  return (
    <div className='banner pb-10 md:pb-60'>
  <Header />
  <div className='flex flex-col md:flex-row justify-center items-center'>
    <div className='md:w-1/2 mx-4 md:mx-20'>
      <h3 className='text-3xl md:text-5xl text-white font-bold mb-6 md:mb-10'>
        Un jeu <span className='text-acheter'>éducatif</span> pour sensibiliser nos enfants au numérique
      </h3>
      <Buton text='Découvrir le jeu' />
      <button className='p-2 mt-4 border-2 rounded-lg text-white'>Tester le jeu</button>
    </div>
    <div className='flex justify-center'>
      <img src={bannerimg} className='w-10/12 md:w-full' alt='banner cyber champions' />
    </div>
  </div>
</div>

  );
};

export default Banner;
