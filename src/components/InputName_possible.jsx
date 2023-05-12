
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser } from '@fortawesome/free-solid-svg-icons';
const InputName = (onChange, value ,name, type, placeholder , icon) => {
    return (
        <>
            <div className="bg-white border-2 rounded-lg w-3/12 p-3  ml-10 mr-10">
                <FontAwesomeIcon icon={icon} />
                <input type={type} placeholder={placeholder} name={name}  className="text-grey"/>
            </div>
            
        </>

    );
}

export default InputName;