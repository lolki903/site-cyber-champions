import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Input from "../components/Input";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import axios from "axios";
import check from "../assets/icon/Check.svg"
import checked from "../assets/icon/checked.svg"

const Login = () => {
    const cssform = " border-gray-400 rounded-lg p-4 ml-2 w-10/12"
    const [email, setEmail] = useState("")
    const [passsword, setPassword] = useState("")
    const cssName = "border-gray-400 rounded-lg p-4 ml-8 w-8/12 flex-row"
    const [checkedd, setCheckedd] = useState(true)
    const [checker, setChecker] = useState(true)
    // useEffect(() => {
    //   const token = localStorage.getItem("token") 
    //     if(token){  
    //         window.location.href = "/informationperso"
    //     }

    // }, [nom, prenom, email]);
    const send = async () =>{
        const response = await axios.post("https://cyber-champion.onrender.com/user/login", {
        email: email,
        password: passsword
        });
        console.log(response.data.user);
        localStorage.setItem("token", JSON.stringify(response.data.user));
        if(response.data.user === null || response.data.user === undefined || response.data.user === ""){
            window.location.href = "/login"
        }else{
            window.location.href = "/informationperso"
        }
    }
    const redirection = () =>{
        window.location.href = "/compte"
    }
    const checkde = () =>{
        setCheckedd(!checkedd)
    }

    return (
        <div className="bg-primary">
            <Header />
            <div className="text-white flex flex-col justify-center items-center mb-10">
                <h1 className="text-6xl mb-5">Se connecter</h1>
            </div>
            <div className="pb-40">
                <form action="/" className="">
                    <div className="m-auto forminput">
                        <Input type="text" name="email" id="email" placeholder="Email" icon={faEnvelope} className={cssform} onChange={(e) => setEmail(e.target.value)} value={email} label="Email" />
                        <Input type="password" name="password" id="password" placeholder="Mot de passe" icon={faLock} className={cssform} onChange={(e) => setPassword(e.target.value)} value={passsword} label="Mot de passe" />
                        <div className="flex justify-between">
                        <div className="flex items-center ">
                        {checkedd ? <img src={check} alt="" className="mr-2 p-2 cursor-pointer" onClick={checkde} /> : <img src={checked} alt="" className="mr-2 p-2 cursor-pointer" onClick={checkde} /> }
                        <label className="text-white" htmlFor="newsletter">Se souvenir de moi</label>
                        </div>
                        <div className="items-center flex">
                        <p className="font-bold text-white">Mot de passe oublié ?</p>
                        </div>
                        </div>
                        <Input type="button" name="envoyer" id="envoyer" value="Envoyer" className="bg-acheter text-primary rounded-2xl p-4 w-full justify-center items-center cursor-pointer" onclick={send}/>
                        <p className="text-white font-light">Vous avez déjà un compte ?<span className="text-white pl-3 font-bold cursor-pointer" onClick={redirection}>S'inscricre</span></p>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Login;