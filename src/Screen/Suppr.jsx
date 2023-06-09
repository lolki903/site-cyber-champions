import React, { useState } from "react";
import Input from "../components/Input";
import { Header } from "./Header";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import bouton from '../assets/icon/bouton-icone.svg'
import axios from "axios";

const Suppr = ({onClick,displaynone}) => {
    const [password,setPassword] = useState("")
    const [typepassword,setTypepassword] =useState(false)
    const token = JSON.parse(localStorage.getItem("token"));
    let type;
    const changetype = () => {
        setTypepassword(!typepassword)
    }
    console.log(typepassword);
    if(typepassword===false){
        type="password"
    }else{
        type="text"
    }
    const deleteuser = async() => {
        try {
        await axios.post('https://cyber-champion.onrender.com/user/delete', {
            password: password,
            id: token
        })
        localStorage.removeItem("token")
        window.location.href = "/login"
        } catch (error) {
            console.log(error);
        }
        

    }
    console.log(localStorage.getItem("token"));
    return (
        <div className={`pl-20 w-full pb-20 mobile:px-7 ${displaynone}`}>
            <div className="flex flex-col">
                <div className="flex">
                    <button onClick={onClick} className="hidden mobile:block top-28"><img src={bouton} alt="" /></button>
                    <h1 className=" text-white text-4xl mb-5 mobile:text-left">Supprimer mon compte</h1>
                </div>
                <div>
                    <h3  className="text-white text-2xl">
                    Souhaitez vous vraiment supprimer votre compte ?
                    </h3>
                    <p className="text-white text-xs mb-8 w-full">Toutes les données vous concernant seront supprimées. Vous n’aurez plus accès à vos commandes et à vos factures. Pour plus de sécurité, vous devez renseigner votre mot de passe avant de supprimer votre compte.</p>
                    <Input type={type} name="password" id="password" placeholder="Mot de passe" icon={faLock} className="border-gray-400 rounded-lg p-3 ml-2 w-10/12 mobile:w-7/12" onChange={(e) => setPassword(e.target.value)} value={password} label="Mot de passe" handleclick={changetype} />
                    <button onClick={deleteuser} className="bg-red text-primary py-5 px-7 rounded-2xl">Supprimer compte</button>
                </div>
            </div>
        </div>
    )
}

export default Suppr