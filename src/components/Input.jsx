import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = ({ type, placeholder, name, value, onChange,icon, className,label }) => {
    let classDiv = ""
    let classlabel = ""
    let classmoinsplus = ""
    if(name === "nom" || name === "prenom"){
        classDiv = "m-auto border-2 border-gray-400 rounded-2xl bg-white mb-7 w-6/12 mr-3 ml-3"
        classlabel = "label relative z-10 ml-20 "
        classmoinsplus = "z-0 moinsplus realtive"

    }else{
        classDiv = "m-auto border-2 border-gray-400 rounded-2xl bg-white mb-7"
        classlabel = "label relative z-10 "
        classmoinsplus = "z-0 moins realtive"
    }
    return (
        <div className={classDiv}>
        <label className={classlabel}>{value ? label : ""}</label>
        <div className={classmoinsplus}>
        <FontAwesomeIcon icon={icon} className="pl-5" />
        <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        />
        </div>
        </div>
    );
    }

export default Input;