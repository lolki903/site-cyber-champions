
import React from "react";
import Blockinfo from "./Blockinfo";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ButonDeconec from "./ButonDeconnec";
import { useLocation } from "react-router-dom";

const Connec = () => {
    const location = useLocation();
  const currentRoute = location.pathname;
  console.log(currentRoute);
    return (
        <div className="">
            <Blockinfo title="Informations personnelles" icon={faArrowRight} path="/informationperso"/>
            <Blockinfo title="Adresses enregistrées" icon={faArrowRight} />
            <Blockinfo title="Suivi de commandes" icon={faArrowRight} />
            <ButonDeconec text="Se déconnecter" />
            <button className="text-1xl mb-5 text-red-600 text-center">Supprimer mon compte</button>
          
        </div>
    );
}

export default Connec;