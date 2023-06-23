import React from 'react';
import Buton from '../components/Button';
import ImagePre from '../components/ImagePre';
import im2 from '../assets/plateaucomplet.svg';

const TestGame = () => {
  return (
   <div className='pt-40 pb-20 mobile:pt-20'>
        <div className="text-center ">
            <h3 className='text-5xl text-primary pb-10'>Testez notre jeu de société en ligne</h3>
            <div className='text-center w-1/2 mobile:w-8/12 m-auto pb-8'>
            <p className='pb-5'>Plongez vous dans une expérience interactive unique où vous pourrez découvrir par vous-même les thèmes pratiques que nous abordons.</p>
            <p className='pb-5'>Jouez, explorez et soyez convaincu(e) de l'efficacité de notre approche ludique et éducative.</p>
            <p className='pb-5'>Prenez les commandes de votre expérience numérique et préparez vous à être impressionné(e) par les connaissances et les compétences que vous acquerrez. </p>
            <p className=''>N'attendez plus, lancez vous dans cette démo en ligne !</p>
            </div>
            <Buton text="Commencer à jouer" />
        </div>
        <ImagePre image={im2} className="w-9/12" />
   </div>
  );
};

export default TestGame;
