import React from 'react';
import Buton from '../components/Button';
import ImagePre from '../components/ImagePre';
import im2 from '../assets/im2.svg';

const TestGame = () => {
  return (
   <div className='pt-40 pb-20'>
        <div className="text-center ">
            <h1 className='text-5xl text-primary pb-10'>Testez notre jeu de société en ligne</h1>
            <p className='w-1/2 m-auto pb-20'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <Buton text="Commencer à jouer" />
        </div>
        <ImagePre image={im2} />
   </div>
  );
};

export default TestGame;
