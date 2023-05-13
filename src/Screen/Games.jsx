import React, { useState } from 'react';
import Gamesblock from '../components/gamesblock';
import { Header } from './Header';
import panier from '../assets/icon/panieradd.svg';
import Themes from './Themes';
import Footer from './Footer';

const Games = () => {
    const numbers = 1
    const [number, setNumber] = useState(numbers)
    const cssdiv ="flex justify-center items-center text-white pl-40 pr-40 pb-40 w-full bg-primary"
    const cssdiv2 ="flex flex-row-reverse justify-center items-center pt-40 pl-40 pr-40 pb-40 bg-white"
    const cssdiv3 ="flex justify-center items-center pt-40 pl-40 pr-40 pb-40 bg-white"
    const text1 = "Si vous avez des questions, des commentaires ou des demandes spécifiques, n'hésitez pas à nous contacter. Notre équipe est là pour vous aider et vous répondre dans les plus brefs délais."
    const text2 ="Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl."
    const text3 ="Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl."
  return (
    <div className='bg-primary'>
      <Header />
        <Gamesblock title="Cyber-Champions : Le jeu" number={number} classNameTitle='text-3xl mb-5' text={text1} icon={panier} button="Ajouter au panier" classNameButton="mt-10 p-3 m-0 bg-acheter text-primary rounded-lg" diver={cssdiv} blocktext="ml-10" setNumber={setNumber}/>
        <Gamesblock title="Des questions adaptées aux enfants" classNameTitle='text-3xl mb-5' text={text2}  button="Tester le jeu" classNameButton="mt-10 p-3 m-0 bg-black text-white rounded-lg" diver={cssdiv2} blocktext="mr-20" />
        <Gamesblock title="Un jeu de plateau ludique" classNameTitle='text-3xl mb-5' text={text3}  button="Découvrir le jeu" classNameButton="mt-10 p-3 m-0 bg-black text-white rounded-lg" diver={cssdiv3} blocktext="ml-20" />
        <Themes />
        <Footer />
    </div>
  );
};

export default Games;
