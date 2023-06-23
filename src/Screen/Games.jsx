import React, { useState } from 'react';
import Gamesblock from '../components/gamesblock';
import { Header } from './Header';
import panier from '../assets/icon/panieradd.svg';
import Themes from './Themes';
import Footer from './Footer';
import boite from '../assets/boite.svg';
import plateau from '../assets/plateau.svg';
import cartes from '../assets/carte.svg';
import TestGame from './TestGame';
import Rectangle from '../assets/Rectangle 39.svg'

const Games = () => {
    const numbers = 1
    const [number, setNumber] = useState(numbers)
    const cssdiv ="flex justify-center items-center text-white px-40 pb-40 w-full bg-primary divmobile"
    const cssdiv2 ="flex flex-row-reverse justify-center items-center px-40 pt-10 bg-white divmobile mobile:w-full"
    const cssdiv3 ="flex justify-center items-center p-40 bg-white divmobile"

    const text1 = "Si vous avez des questions, des commentaires ou des demandes spécifiques, n'hésitez pas à nous contacter. Notre équipe est là pour vous aider et vous répondre dans les plus brefs délais."
    const text2 ="Découvrez le plateau de jeu captivant qui vous transportera dans un voyage passionnant à travers le monde numérique."
    const text22 ="Chaque case vous réserve une expérience unique : défiez vos connaissances avec des questions stimulantes, et faites face à des situations où vous devrez prendre des décisions responsables."
    const text23 ="Mais ce n'est pas tout ! Des cases bonus jalonnent également le parcours, offrant des opportunités de gagner des récompenses spéciales."
    const text3 ="Chaque fois que vous tirez une carte, vous serez confronté(e) à une question stimulante ou à un scénario pratique qui mettra vos connaissances à l'épreuve."
    const text32 ="Nos questions ne sont pas seulement là pour tester les connaissances, elles sont également conçues pour enseigner de nouvelles informations et des bonnes pratiques."
    const text33 ="Vous pouvez également utiliser les cartes pour jouer à des jeux de rôle et simuler des situations réelles, ce qui vous permettra de développer vos compétences et de vous préparer à faire face à des situations réelles."
  
    return (
    <div className='bg-primary'>
      <Header />
        <Gamesblock title="Cyber-Champions : Le jeu" number={number} classNameTitle='text-4xl mb-5 mobile:mt-10' text={text1} icon={panier} button="Ajouter au panier" classNameButton="mt-10 p-3 m-0 bg-acheter text-primary rounded-lg mobile:text-center w-full flex items-center justify-center" diver={cssdiv} blocktext="blocktext ml-10 mobile:m-auto" setNumber={setNumber} image={Rectangle} />
        <Gamesblock title="Un jeu de plateau ludique" classNameTitle='text-4xl mb-5 mobile:mt-10' text={text2} text2={text22} text3={text23}    diver={cssdiv2} blocktext="blocktext mr-20 mobile:m-auto" image={plateau}/>
        <Gamesblock title="Des questions adaptées aux enfants" classNameTitle='text-4xl mb-5 mobile:mt-7' text={text3} text2={text32} text3={text33}  diver={cssdiv3} blocktext="blocktext ml-20 mobile:m-auto"image={cartes} />
        <Themes />
        <div className='bg-white border-b-4'>
        <TestGame />
        </div>
        <Footer />
    </div>
  );
};

export default Games;
