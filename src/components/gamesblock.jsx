import im1 from '../assets/games.svg';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Gamesblock = ({ title, number, icon, text, button, classNameButton, classNameTitle, diver, blocktext,setNumber,text2,text3,image }) => {
    const dzd = localStorage.getItem('panier')
    if(number < 1){
        setNumber(1)
    }
    if(number > 5){
        setNumber(5)
    }
    
    const ajoutpanier = () => {
        localStorage.setItem('panier', JSON.stringify(number))
    }


    return (
        <div className={diver}>
            <img src={image} className='w-6/12  mobile:w-full mobile:pt-20' alt='banner cyber champions' />
            <div className={blocktext}>
                <h1 className={classNameTitle}>{title}</h1>
                {title === 'Cyber-Champions : Le jeu' ?
                    <>
                        <h3 className='text-acheter mb-5'>39.99 €</h3>
                    </> : null}
                <p className='mb-3'>{text}</p>
                <p className='mb-3'>{text2}</p>
                <p className='mb-3'>{text3}</p>
                
                <div className='md:p-0'>
                    {title === 'Cyber-Champions : Le jeu' ?
                        <>
                            <div className='flex bg-white w-3/12 p-3 border-2 rounded-2xl justify-center items-center mobile:w-6/12 mobile:p-0 mobile:mt-10'>
                                <button onClick={() => setNumber(number - 1)} className='text-primary'><FontAwesomeIcon icon={faMinus} /></button>
                                <input type="number" name="number" id="number" value={number} className="w-6/12 text-center text-primary pl-2 focus:outline-none" readOnly />
                                <button onClick={() => setNumber(number + 1)} className='text-primary'><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                            <p className='text-labell w-3/12 mobile:w-7/12'>La quantité maximum de commande est de 5</p>
                        </>
                        : null}
                         {title === 'Cyber-Champions : Le jeu' ?
                    <button onClick={ajoutpanier} className={classNameButton}><FontAwesomeIcon icon={icon} className='text-primary mobile:ml-10' />{button}</button>
                    : <button className={classNameButton}><FontAwesomeIcon icon={icon} className='text-primary' />{button}</button>}
                </div>
            </div>
        </div>
    );
}

export default Gamesblock;