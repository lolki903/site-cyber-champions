import React from 'react';
import enfant from '../assets/enfant.svg';

const Newsletter = ({ text }) => {
    return (
        <div className='flex bg-rose pt-20 md:pt-30 mobile:flex-wrap mobile:px-7'>  
            <div className='flex-col mx-auto md:ml-20 md:flex md:items-center md:justify-center md:text-center pl-7 mobile:pl-0'>
                <h3 className='text-3xl md:text-4xl text-white font-bold w-10/12 md:w-9/12 mb-5 md:mb-10'>
                Vous souhaitez être au courant des nouvelles sorties et mises à jour sur notre jeu ?
                </h3>
                <div className='flex rounded-lg w-8/12 mobile:w-full flex-col rounded-lg pt-1 pb-1' >
                    <input type="text" placeholder="Renseignez votre e-mail" className=" tex-primary rounded-lg p-3 w-full mb-4 " />
                    <button className='p-2 md:p-3 bg-primary text-white rounded-lg w-full'>Envoyer mon message</button>
                </div>
            </div>
            <div>
                <img src={enfant} alt="Des enfants" />
            </div>
        </div>
    );
};

export default Newsletter;
