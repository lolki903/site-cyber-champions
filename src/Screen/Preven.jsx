import React from 'react';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImagePre from '../components/ImagePre';

const Preven = () => {
    return (
        <div className='mt-20 pb-40'>
            <div className='grid grid-cols-2'>
                <div className=''>
                    <p className='text-3xl w-8/12 text-primary ml-40'>
                        Prévention et sécurité numérique, rendons responsables nos enfants sur internet
                    </p>
                </div>
                <div className='col-span-1 w-9/12'>
                    <p >Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    <div className='grid grid-cols-2 mt-8'>
                        <div className='col-span-1'>
                            <p><FontAwesomeIcon icon={faCircleCheck} color="#44DC4E"/>  Educatif</p>
                            <p><FontAwesomeIcon icon={faCircleCheck} color="#44DC4E"/>  Ludique</p>
                        </div>
                            <div className='col-span-1'>
                            <p><FontAwesomeIcon icon={faCircleCheck} color="#44DC4E"/>  Préventif</p>
                            <p><FontAwesomeIcon icon={faCircleCheck} color="#44DC4E" />  Responsable</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ImagePre />
            </div>
            );
};

            export default Preven;
