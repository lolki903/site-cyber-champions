import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import compte from '../assets/icon/compte.svg';
import panier from '../assets/icon/panier.svg';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [quantite, setQuantite] = useState(JSON.parse(localStorage.getItem('panier')) || 1);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
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
    }, [quantite]);
  return (
    <header className='flex mb-40 pt-10'>
      <a href="/"><img src={logo} className="ml-20 w-11/12" alt="logo cyber champions" /></a>
      <nav className={`ml-40 ${menuOpen ? 'flex' : 'hidden'} md:flex `}>
       
        <a className="text-white mt-5 ml-10" href="/notrejeu">Notre jeu</a>
        <a className="text-white mt-5 ml-10" href="/apropos">A propos</a>
        <a className="text-white mt-5 ml-10" href="/contact">Nous contacter</a>
        <div className='flex ml-40'>
          <a href="/compte"><img className="w-6/12 ml-10" src={compte} alt="" /></a>
          <a href={url}><img className="w-6/12 ml-10" src={panier} alt="" /></a>
        </div>
      </nav>
      <div className="md:hidden ml-auto">
        <button className="text-white" onClick={handleMenuToggle}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}
