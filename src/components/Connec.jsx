
import React from "react";
import Blockinfo from "./Blockinfo";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ButonDeconec from "./ButonDeconnec";
import { useLocation } from "react-router-dom";

const Connec = ({ info, adresses, commande,display,suppr }) => {
    const location = useLocation();
  const currentRoute = location.pathname;
  console.log(currentRoute);
    return (
        <div className={display}>
            <h1 className="text-center mobile:block hidden text-white text-4xl mobile:mb-7">Mon compte</h1>
            <Blockinfo title="Informations personnelles" icon={faArrowRight} handleClick={info}/>
            <Blockinfo title="Adresses enregistrées" icon={faArrowRight} handleClick={adresses} />
            <Blockinfo title="Suivi de commandes" icon={faArrowRight} handleClick={commande} />
            <ButonDeconec text="Se déconnecter" />
            <button onClick={suppr} className="mobile:px-6 mobile:py-4 text-1xl mb-5 text-red mobile:text-primary text-center mobile:bg-red rounded-2xl leading-19 mobile:w-full">Supprimer mon compte</button>
          
        </div>
    );
}

export default Connec;