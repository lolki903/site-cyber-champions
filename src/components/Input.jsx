import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = ({ type, placeholder, name, value, onChange,icon, className }) => {
    return (
        <div className=" m-auto border-2 border-gray-400 rounded-2xl bg-white mb-7">
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
    );
    }

export default Input;