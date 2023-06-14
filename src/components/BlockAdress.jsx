import React from "react";

import { faEnvelope, faHouse, faHome ,faBuilding} from "@fortawesome/free-solid-svg-icons";

import Input from "./Input";
const BlockAdress = ({ adress, setAdress, societe, setSociete, codepostal, setCodepostal, ville, setVille, pays, setPays }) => {
    const cssform = " border-gray-400 rounded-lg p-4 ml-2 w-10/12 focus:outline-none"
    const cssName = "border-gray-400 rounded-lg p-4 ml-8 w-8/12 flex-row focus:outline-none"
    return (
        <div className="m-auto mobile:flex-wrap">
            <Input type="text" name="societe" id="societe" placeholder="Sociéte" icon={faBuilding} className={cssform} onChange={(e) => setSociete(e.target.value)} value={societe} label="Societé" />
            <Input type="text" name="adress" id="adress" placeholder="Adresse" icon={faHouse} className={cssform} onChange={(e) => setAdress(e.target.value)} value={adress} label="Adresse" />
            <div className="flex w-adress mobile:w-full mobile:flex-wrap ">
                <Input type="text" name="codepostal" id="codepostal" placeholder="Code postal" icon={faHome} className={cssName} onChange={(e) => setCodepostal(e.target.value)} value={codepostal} label="Code postal" />
                <Input type="text" name="ville" id="ville" placeholder="Ville" icon={faHome} className={cssName} onChange={(e) => setVille(e.target.value)} value={ville} label="Ville" />
                <Input type="text" name="pays" id="pays" placeholder="Pays" icon={faHome} className={cssName} onChange={(e) => setPays(e.target.value)} value={pays} label="Pays" />
            </div>
        </div>
    );
}

export default BlockAdress;