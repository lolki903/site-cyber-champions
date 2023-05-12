import React from 'react';
import bannerimg from '../assets/banner.svg';
import Buton from '../components/Button';
import { Header } from './Header';

const Banner = () => {
  return (
    <div className='banner pb-60'>
      <Header />
      <div className='flex justify-center items-center'>
        <div className='w-1/2 mr-20 ml-40'>
          <h3 className='text-5xl text-white font-bold mb-10'>
            Un jeu <span className='text-acheter'>éducatif</span> pour sensibiliser nos enfants au numérique
          </h3>
          <Buton text='Découvrir le jeu' />
          <button className=' p-3 ml-6 border-2 rounded-lg text-white'>Tester le jeu</button>
        </div>
        <div className='float-left '>
          <img src={bannerimg} className='w-10/12' alt='banner cyber champions' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
