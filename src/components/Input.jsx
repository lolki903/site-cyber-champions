import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = ({ type, placeholder, name, value, onChange,icon, className,label , onclick }) => {
    let classDiv = ""
    let classlabel = ""
    let classmoinsplus = ""
    if(name === "nom" || name === "prenom"){
        classDiv = "m-auto border-2 border-gray-400 rounded-2xl bg-white mb-7 w-6/12 mr-3 ml-1"
        classlabel = "label relative z-10 ml-20 "
        classmoinsplus = "z-0 moins realtive focus-visible:outline-none"
    }else{
        classDiv = "m-auto border-2 border-gray-400 rounded-2xl bg-white mb-7 "
        classlabel = "label relative z-10 "
        classmoinsplus = "z-0 moins realtive focus-visible:outline-none"
    }
    if(name === "pays" || name === "ville" || name === "codepostal"){
        classDiv = "m-auto border-2 border-gray-400 rounded-2xl bg-white mb-7 w-3/12 mr-8 ml-1"
        classlabel = "label relative z-10 ml-20"
        classmoinsplus = "z-0 moinspluss realtive focus-visible:outline-none"
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
        onClick={onclick}
        />
        </div>
        </div>
    );
    }

export default Input;