import im1 from '../assets/games.svg';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Gamesblock = ({ title, number, icon, text, button, classNameButton, classNameTitle, diver, blocktext,setNumber }) => {
    if(number < 1){
        setNumber(1)
    }
    return (
        <div className={diver}>
            <img src={im1} className='w-1/2' alt='banner cyber champions' />
            <div className={blocktext}>
                <h1 className={classNameTitle}>{title}</h1>
                {title === 'Cyber-Champions : Le jeu' ?
                    <>
                        <h3 className='text-acheter mb-5'>29.99 €</h3>
                    </> : null}
                <p className='mb-3'>{text}</p>
                <div>
                    {title === 'Cyber-Champions : Le jeu' ?
                        <>
                            <div className='flex bg-white w-1/5 p-3 border-2 rounded-2xl justify-center items-center'>
                                <button onClick={() => setNumber(number - 1)} className='text-primary'><FontAwesomeIcon icon={faMinus} /></button>
                                <input type="number" name="number" id="number" value={number} className="w-5/12 text-center text-primary pl-2" readOnly />
                                <button onClick={() => setNumber(number + 1)} className='text-primary'><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                            <p className='text-labell w-3/12'>La quantité maximum de commande est de 5</p>
                        </>
                        : null}
                    <button className={classNameButton}><FontAwesomeIcon icon={icon} className='text-primary' />{button}</button>
                </div>
            </div>
        </div>
    );
}

export default Gamesblock;