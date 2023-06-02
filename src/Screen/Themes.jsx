import React from 'react';
import cadena from '../assets/icon/cadenas.svg';
import donnee from '../assets/icon/donne.svg';
import ecran from '../assets/icon/ecran.svg';
import resaux from '../assets/icon/resaux.svg';
import BlockDiv from '../components/blocktheme';
import Buton from '../components/Button';

const Themes = () => {
   return (
      <div className="bg-primary pt-20">
         <div className=' flex justify-center items-center flex-col text-white'>
            <h1 className='text-4xl'>Découvrez de nombreux thèmes :</h1>
            <p className='pt-5'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
         </div>
         <div className="flex text-white justify-center w-12/12 m-auto pt-20 flex-wrap">
            <BlockDiv text="Sécurité et mot de passe" img={cadena} />
            <BlockDiv text="Gestion des écrans" img={ecran} />
            <BlockDiv text="Réseaux sociaux" img={resaux} />
            <BlockDiv text="Données personnelles" img={donnee} />
         </div>
         <div className="text-center pt-20 pb-40">
            <Buton text="En savoir plus sur le jeu" />
         </div>
      </div>
   );
};

export default Themes;
