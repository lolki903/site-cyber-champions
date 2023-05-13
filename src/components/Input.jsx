import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = ({ type, placeholder, name, value, onChange,icon, className,label }) => {
    return (
        <div className=" m-auto border-2 border-gray-400 rounded-2xl bg-white mb-7">
        <label className="label relative z-10 ">{value ? label : ""}</label>
        <div className="z-0 moins realtive">
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