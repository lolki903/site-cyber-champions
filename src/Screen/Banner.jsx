import React from 'react';
import bannerimg from '../assets/banner.svg';
import Buton from '../components/Button';
import { Header } from './Header';

const Banner = () => {
  return (
    <div className='banner pb-10 pb-60 mobile:pb-3'>
  <Header />
  <div className='flex mobile:flex-col md:flex-row justify-center items-center px-40 mobile:px-4 '>
    <div className='md:w-1/2 mx-4 md:mx-20 mobile:pb-20'>
      <h3 className='text-4xl md:text-5xl text-white font-bold mb-6 md:mb-10 font-bold'>
        Un jeu <span className='text-acheter'>éducatif</span> pour sensibiliser nos enfants au numérique
      </h3>
      <Buton text='Découvrir le jeu' />
      <button className=' ml-6 mobile:ml-0 py-4 px-8 mt-4 border-2 rounded-lg text-primary bg-white mobile:w-full '>Tester le jeu</button>
    </div>
    <div className='flex justify-center'>
      <img src={bannerimg} className='w-10/12 mobile:w-full md:w-full mobile:pb-10' alt='banner cyber champions' />
    </div>
  </div>
</div>

  );
};

export default Banner;
