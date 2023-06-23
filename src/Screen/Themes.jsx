import React from 'react';
import cadena from '../assets/icon/cadenas.svg';
import donnee from '../assets/icon/donne.svg';
import ecran from '../assets/icon/ecran.svg';
import resaux from '../assets/icon/resaux.svg';
import BlockDiv from '../components/blocktheme';
import Buton from '../components/Button';

const Themes = () => {
   return (
      <div className="bg-primary pt-20 mobile:px-7">
         <div className=' flex justify-center items-center flex-col text-white'>
            <h3 className='text-4xl pb-5 mobile:text-3xl text-center'>Découvrez de nombreux thèmes :</h3>
            <div className='w-8/12 mobile:w-full'>
               <p className='text-center text-lg mobile:text-g pb-5'>Découvrez les multiples facettes de notre jeu qui explore des thèmes essentiels tels que la sécurité des mots de passe, la gestion des écrans, les réseaux sociaux et la protection des données personnelles. </p>
               <p className='text-center text-lg mobile:text-g'> Plongez vous dans des aventures interactives tout en apprenant à naviguer en toute sécurité dans le monde numérique.</p>
            </div>
         </div>
         <div className="flex text-white justify-center w-full m-auto pt-20 flex-wrap">
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
