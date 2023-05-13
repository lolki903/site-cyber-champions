import React from 'react'
import logo from '../assets/logocouleur.svg';
import faceebook from '../assets/icon/facebook.svg';
import twitter from '../assets/icon/twitter.svg';
import insta from '../assets/icon/insta.svg';

const Footer = () => {
    return (
        <footer className='flex justify-center pt-10 mb-10 bg-white'>
            <img src={logo} className="w-2/12" alt="logo cyber champions" />
            <div className='mt-2 ml-20'>
                <a className="text-primary" href="/">Mentions légales</a>
                <a className="text-primary ml-10" href="/">Politiques de confidentialité</a>
                <a className="text-primary ml-10 mr-10" href="/">Conditions Générales de Vente</a>
            </div>
            <div className='flex'>
                <img src={faceebook} className="ml-10" alt="logo cyber champions" />
                <img src={twitter} className="ml-10" alt="logo cyber champions" />
                <img src={insta} className="ml-10" alt="logo cyber champions" />
            </div>
        </footer>
    )
}

export default Footer