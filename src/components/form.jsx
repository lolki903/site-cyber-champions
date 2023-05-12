import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = ({ type, placeholder, name, value, onChange,icon }) => {
    return (
        <div className=" m-auto border-1 border-gray-400 rounded-lg w-3/5 bg-white">
        <FontAwesomeIcon icon={icon} className="pl-10" />
        <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="border-1 border-gray-400 rounded-lg p-3 ml-7 w-10/12"
        />
        </div>
    );
    }

export default Input;