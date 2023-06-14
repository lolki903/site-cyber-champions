import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import compte from '../assets/icon/compte.svg';
import panier from '../assets/icon/panier.svg';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [moncompte, setMoncompte] = useState("");
 
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

    const ajoutpanier = () => {
        const quantite = JSON.parse(localStorage.getItem('panier'))
        if(quantite === null){
            setUrl("/login")
        }
        if(quantite === 1){
           setUrl("https://buy.stripe.com/14k2b97cj6Mx2v6aEF")
        }
        if(quantite === 4){
             setUrl("https://buy.stripe.com/dR67vtdAHeeZb1CbII")
        }
        if(quantite === 5){
                setUrl("https://buy.stripe.com/5kAg1ZfIPfj3d9KbIM")
        }
        if(quantite === 2){
                setUrl("https://buy.stripe.com/8wMbLJ0NV5ItglW4gj")
        }
        if(quantite === 3){
                setUrl("https://buy.stripe.com/4gw9DB9kr3Alb1CcMO")}
    }
  return (
    <header className={`flex mb-40 pt-10 w-full justify-center ${menuOpen ? 'mobile:pb-screen mobile:mb-20 mobile:fixed':' mobile:h-auto mobile:mb-20 mobile:static'}`}>
      <a href="/"><img src={logo} className="ml-20 w-11/12 mobile:ml-0" alt="logo cyber champions" /></a>
      <div className={`hidden mobile:flex`}>
        <button className="text-white" onClick={handleMenuToggle}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <nav className={`flex ml-40 ${menuOpen ? 'mobile:flex' : 'mobile:hidden'}  mobile:text-primary mobile:w-10/12 `}>
        <a className="text-white mt-5 ml-10 mobile:m-auto mobile:mb-9 mobile:mt-9 mobile:text-center" href="/">Accueil</a>
        <a className="text-white mt-5 ml-10 mobile:m-auto mobile:mb-9 mobile:text-center " href="/notrejeu">Notre jeu</a>
        <a className="text-white mt-5 ml-10 mobile:m-auto mobile:mb-9 mobile:text-center " href="/contact">Nous contacter</a>
        <div className='flex ml-40 mobile:flex-col mobile:ml-0 mobile:w-full '>
          <a className='text-white mobile:flex navmobile mobile:items-center mobile:mb-9' href="/compte"><img className="w-6/12 ml-10 mobile:w-2/12" src={compte} alt="" /><span className='hidden mobile:inline '>Mon compte</span></a>
          <a className='text-white mobile:flex navmobile mobile:items-center mobile:mb-9' href={url} onClick={ajoutpanier}><img className="w-6/12 ml-10 mobile:w-2/12" src={panier} alt="" />{menuOpen ? 'Mon Panier' :null}</a>
        </div>
      </nav>
    </header>
  )
}
