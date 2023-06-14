import React from 'react'
import logo from '../assets/logocouleur.svg';
import faceebook from '../assets/icon/facebook.svg';
import twitter from '../assets/icon/twitter.svg';
import insta from '../assets/icon/insta.svg';
import mastercard from '../assets/mpaiement/amex-alt@2x 1.svg'
import applepay from '../assets/mpaiement/applepay@2x 1.svg'
import cartebancaire from '../assets/mpaiement/cartebancaire@2x.svg'
import frame from '../assets/mpaiement/Frame 127.svg'
import visa from '../assets/mpaiement/visa@2x.svg'
import colisimo from '../assets/modelivraison/Frame 127-1.svg'
import mondialrelay from '../assets/modelivraison/Frame 127-2.svg'
import chronopost from '../assets/modelivraison/Frame 127.svg'

const Footer = () => {
    return (
        <footer>
            <div className='flex justify-around bg-bluebase py-10 mobile:hidden'>
                <div className='flex-col text-center'>
                    <h3 className='text-lg mb-6'>Moyens de paiement disponibles</h3>
                    <div className='flex'>
                        <img src={mastercard} alt="" className='mx-2' />
                        <img src={applepay} alt="" className='mx-2' />
                        <img src={cartebancaire} alt="" className='mx-2' />
                        <img src={frame} alt="" className='mx-2' />
                        <img src={visa} alt="" className='mx-2' />
                    </div>
                </div>
                <div className='flex-col text-center justify-center mobile:pt-5'>
                    <h3 className='text-lg mb-6'>Modes de livraison disponibles</h3>
                    <div className='flex justify-center'>
                        <img src={colisimo} alt="" className='mx-2'/>
                        <img src={mondialrelay} alt="" className='mx-2'/>
                        <img src={chronopost} alt=""className='mx-2' />
                    </div>
                </div>
            </div>
            <div className='flex foot justify-center py-20 bg-white'>

            <img src={logo} className="w-2/12 logofooter mobile:pb-10" alt="logo cyber champions" />
            <div className='mt-2 foot ml-20'>
                <a className="text-primary" href="/">Mentions légales</a>
                <a className="text-primary ml-10" href="/">Politiques de confidentialité</a>
                <a className="text-primary ml-10 mr-10" href="/">Conditions Générales de Vente</a>
            </div>
            <div className='flex'>
                <img src={faceebook} className="ml-10" alt="logo cyber champions" />
                <img src={twitter} className="ml-10" alt="logo cyber champions" />
                <img src={insta} className="ml-10" alt="logo cyber champions" />
            </div>
            </div>
        </footer>
    )
}

export default Footer