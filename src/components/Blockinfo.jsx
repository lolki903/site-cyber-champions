import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blockinfo = ({ title, icon,handleClick }) => {
    const click =false;
    // const handleClick = () => {
    //     if(title === "Informations personnelles"){
    //         window.location.href = "/informationperso"
    //     }
    //     if(title === "Adresses enregistrées"){
    //         window.location.href = "/addressenrigistre"
    //     }
    //     if(title === "Suivi de commandes"){
    //         window.location.href = "/suivi"
    //     }
        

    // }
    return (
        <div className="text-left text-white"> 
            <button onClick={handleClick} className="text-1xl mb-5 w-full text-left mobile:text-lg mobile:bg-white mobile:text-primary mobile:text-center mobile:py-5 mobile:px-10 rounded-lg">{click ?<FontAwesomeIcon icon={icon}/> : null} {title}</button>
        </div>
    );
}

export default Blockinfo;