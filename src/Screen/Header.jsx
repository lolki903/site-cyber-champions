import React from 'react'
import logo from '../assets/logo.svg';
import compte from '../assets/icon/compte.svg';
import panier from '../assets/icon/panier.svg';

export const Header = () => {
    return (
        <header className='flex wrap mb-40 pt-10'>
                <img src={logo} className="ml-20 w-2/12" alt="logo cyber champions" />
            <nav className=' flex ml-40'>
                <a className="text-white mt-5" href="/">Accueil</a>
                <a className="text-white mt-5 ml-10" href="/notrejeu">Notre jeu</a>
                <a className="text-white mt-5 ml-10" href="/apropos">A propos</a>
                <a className="text-white mt-5 ml-10" href="/contact">Nous contacter</a>
                <div className='flex ml-40'>
                <a href="/"><img className="w-6/12 ml-10" src={compte} alt="" /></a>
                <a href="/"><img className="w-6/12 ml-10"src={panier} alt="" /></a>
                </div>
            </nav>
        </header>
    )
  }
