import React from 'react'
import logo from '../assets/logo.svg';

export const Header = () => {
    return (
        <header className='flex wrap mb-40 pt-10'>
                <img src={logo} className="ml-20 w-2/12" alt="logo cyber champions" />
            <nav className=' ml-20'>
                <a className="text-white" href="/">Accueil</a>
                <a className="text-white ml-20" href="">Notre jeu</a>
                <a className="text-white ml-20" href="/apropos">A propos</a>
                <a className="text-white ml-20" href="/contact">Nous contacter</a>
                <button className='ml-40  p-3 m-0 bg-acheter rounded-lg'>Acheter le jeu</button>
            </nav>
        </header>
    )
  }
