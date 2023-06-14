import React from 'react';
import enfant from '../assets/enfant.svg';

const Newsletter = ({ text }) => {
    return (
        <div className='flex bg-rose pt-20 md:pt-30 '>  
            <div className='flex-col mx-auto md:ml-20 md:flex md:items-center md:justify-center md:text-center'>
                <h3 className='text-2xl md:text-4xl text-white font-bold w-10/12 md:w-9/12 mb-5 md:mb-10'>
                Vous souhaitez être au courant des nouvelles sorties et mises à jour sur notre jeu ?
                </h3>
                <div className='flex rounded-lg w-8/12 flex-col rounded-lg pt-1 pb-1' >
                    <input type="text" placeholder="Renseignez votre e-mail" className=" tex-primary rounded-lg p-3 w-12/12 mb-4 " />
                    <button className='p-2 md:p-3 bg-primary text-white rounded-lg w-12/12'>Envoyer mon message</button>
                </div>
            </div>
            <div>
                <img src={enfant} alt="Des enfants" />
            </div>
        </div>
    //     <div className='flex flex-col bg-rose pt-20 md:pt-20'>  
    //     <div className='flex-row mx-auto md:ml-20 md:flex md:items-center md:justify-center md:text-center'>
    //       <h3 className='text-2xl md:text-4xl text-white font-bold w-10/12 md:w-9/12 mb-5 md:mb-10'>
    //         Vous souhaitez être au courant des nouvelles sorties et mises à jour sur notre jeu ?
    //       </h3>
    //       <div className='rounded-lg w-11/12 md:w-8/12 bg-white rounded-lg pt-1 pb-1'>
    //         <input type="text" placeholder="Renseignez votre e-mail" className="tex-primary rounded-lg p-2 md:p-3 ml-3 md:ml-7 w-8/12 md:w-6/12" />
    //         <button className='p-2 md:p-3 ml-3 md:ml-10 bg-primary text-white rounded-lg'>Envoyer mon message</button>
    //       </div>
    //     </div>
    //     <div className="text-center md:text-left">
    //       <img src={enfant} alt="Des enfants" className="mx-auto md:ml-0 mt-5 md:mt-0" />
    //     </div>
    //   </div>
      
    );
};

export default Newsletter;
