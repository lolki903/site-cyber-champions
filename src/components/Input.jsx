import { faEye, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = ({ type, placeholder, name, value, onChange,icon, className,label , onclick,handleclick }) => {
    let classDiv = ""
    let classlabel = ""
    let classmoinsplus = ""
    if(name === "nom" || name === "prenom"){
        classDiv = "m-auto border-2 border-gray-400 rounded-2xl bg-white mb-7 w-6/12 mr-3 ml-1 mobile:w-full mobile:mr-0 mobile:ml-0 mobile:py-3 mobile:mb-7 mobile:flex-wrap"
        classlabel = "label relative z-10 ml-20  mobile:hidden"
        classmoinsplus = "z-0 moins realtive focus-visible:outline-none "
    }
        else if(name === "pays" || name === "ville" || name === "codepostal"){
            classDiv = "m-auto border-2 border-gray-400 rounded-2xl bg-white mb-7 w-3/12 mr-8 ml-1 mobile:w-full mobile:mr-0 mobile:py-8"
            classlabel = "label relative z-10 ml-20 mobile:mr-44 mobile:ml-0 mobile:hidden"
            classmoinsplus = "z-0 moinspluss realtive focus-visible:outline-none "
    }
    else if(type === "button"){
        classDiv = "mt-10 mb-10"
        classlabel = "label relative z-10 ml-20"
        classmoinsplus = "z-0 moinspluss realtive focus-visible:outline-none"
    }
    else{
        classDiv = "m-auto border-2 border-gray-400 rounded-2xl bg-white mb-7 mobile:py-4 py-0.75 "
        classlabel = "label relative z-10 ml-20 mobile:ml-0 mobile:hidden"
        classmoinsplus = "z-0  moins realtive focus-visible:outline-none  "
    }
    return (
        <div className={classDiv}>
        <label className={classlabel}>{value ? label : " "}</label>
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
       {name ==="password" ?<button onClick={handleclick}><FontAwesomeIcon icon={faEye} className="pl-7" /></button> :null}
        </div>
        </div>
    );
    }

export default Input;