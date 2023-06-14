import React from 'react';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImagePre from '../components/ImagePre';
import im1 from '../assets/boite.svg';

const Preven = () => {
    return (
        <div className='pt-20 md:mt-20 pb-40 px-40 mobile:px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className=''>
            <p className='text-2xl md:text-3xl w-10/12 md:w-8/12 text-primary mx-auto md:ml-0'>
              Prévention et sécurité numérique, rendons responsables nos enfants sur internet
            </p>
          </div>
          <div className='col-span-1 w-10/12 md:w-9/12 mx-auto md:mx-0'>
            <p className='mt-4 md:mt-0'>
            Préparez-vous à plonger dans un monde virtuel où l'éducation, la prévention, le divertissement et la responsabilité se rejoignent. Notre jeu promeut la sécurité numérique et permet d'enseigner aux enfants à être responsables lors de leurs aventures en ligne.
            </p>
            <div className='grid grid-cols-2 mt-4 md:mt-8'>
              <div className='col-span-1'>
                <p>
                  <FontAwesomeIcon icon={faCircleCheck} color='#44DC4E' /> Educatif
                </p>
                <p>
                  <FontAwesomeIcon icon={faCircleCheck} color='#44DC4E' /> Ludique
                </p>
              </div>
              <div className='col-span-1'>
                <p>
                  <FontAwesomeIcon icon={faCircleCheck} color='#44DC4E' /> Préventif
                </p>
                <p>
                  <FontAwesomeIcon icon={faCircleCheck} color='#44DC4E' /> Responsable
                </p>
              </div>
            </div>
          </div>
        </div>
        <ImagePre image={im1} className="w-10/12" />
      </div>      
            );
};

export default Preven;
