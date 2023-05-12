import React from 'react';
import enfant from '../assets/enfant.svg';

const Newsletter = ({ text }) => {
    return (
        <div className='flex bg-rose pt-20 '>  
            <div className='flex-row ml-20'>
                <h3 className='text-4xl text-white font-bold w-9/12 mb-10'>
                Vous souhaitez être au courant des nouvelles sorties et mises à jour sur notre jeu ?
                </h3>
                <div className='rounded-lg w-8/12 bg-white rounded-lg pt-1 pb-1' >
                    <input type="text" placeholder="Renseignez votre e-mail" className=" tex-primary rounded-lg p-3 ml-7 w-6/12 " />
                    <button className=' p-3 ml-10 bg-primary text-white rounded-lg'>Envoyer mon message</button>
                </div>
            </div>
            <div>
                <img src={enfant} alt="Des enfants" />
            </div>
        </div>
    );
};

export default Newsletter;
