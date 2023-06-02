import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Input from "../components/Input";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";
import axios from "axios";
import check from "../assets/icon/Check.svg"
import checked from "../assets/icon/checked.svg"

const Create = () => {
    const cssform = " border-gray-400 rounded-lg p-4 ml-2 w-10/12"
    const cssName = "border-gray-400 rounded-lg p-4 ml-8 w-8/12 flex-row"
    const [email, setEmail] = useState("")
    const [passsword, setPassword] = useState("")
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [telephone, setTelephone] = useState("")
    const [checkedd, setCheckedd] = useState(true)
    const [checker, setChecker] = useState(true)
    useEffect(() => {
      const token = localStorage.getItem("token") 
        if(token){  
            window.location.href = "/informationperso"
        }


    }, [nom, prenom, email,checkedd]);
    const checkde = () =>{
        setCheckedd(!checkedd)
    }
    const checkde2 = () =>{
        setChecker(!checker)
    }
    const send = async () =>{
    try{
        const response = await axios.post("https://cyber-champion.onrender.com/user/create", {
        lastname: nom,
        firstname: prenom,
        email: email,
        password: passsword
        });
        localStorage.setItem("token", JSON.stringify(response.data));
        window.location.reload();
    }catch(error){
        console.log(error);
    }
    }
    const redirection = () =>{
        window.location.href = "/login"
    }

    return (
        <div className="bg-primary">
            <Header />
            <div className="text-white flex flex-col justify-center items-center mb-10">
                <h1 className="text-6xl mb-5">Crée un compte</h1>
            </div>
            <div className="pb-40">
                <form action="/" className="">
                    <div className=" flex formname m-auto">
                        <Input type="text" name="nom" id="nom" placeholder="Nom" icon={faUser} className={cssName} onChange={(e) => setNom(e.target.value)} value={nom} label="Nom" />
                        <Input type="text" name="prenom" id="prenom" placeholder="Prénom" icon={faUser} className={cssName} onChange={(e) => setPrenom(e.target.value)} value={prenom} label="Prénom" />
                    </div>
                    <div className="m-auto forminput">
                        <Input type="text" name="email" id="email" placeholder="Email" icon={faEnvelope} className={cssform} onChange={(e) => setEmail(e.target.value)} value={email} label="Email" />
                        <Input type="text" name="telephone" id="telephone" placeholder="Téléphone" icon={faPhone} className={cssform} onChange={(e) => setTelephone(e.target.value)} value={telephone} label="Téléphone" />
                        <Input type="password" name="password" id="password" placeholder="Mot de passe" icon={faLock} className={cssform} onChange={(e) => setPassword(e.target.value)} value={passsword} label="Mot de passe" />
                        <div className="flex items-center py-5">
                        {checker ? <img src={check} alt="" className="mr-2 p-2 cursor-pointer" onClick={checkde2} /> : <img src={checked} alt="" className="mr-2 p-2 cursor-pointer" onClick={checkde2} /> }
                            <label className="text-white text-lg" htmlFor="newsletter">En vous inscrivant, vous acceptez les <span className="text-acheter">termes et conditions ainsi que les conditions générales d’utilisation </span></label>
                        </div>
                        <div className="flex items-center pb-5">
                        {checkedd ? <img src={check} alt="" className="mr-2 p-2 cursor-pointer" onClick={checkde} /> : <img src={checked} alt="" className="mr-2 p-2 cursor-pointer" onClick={checkde} /> }
                        <label className="text-white" htmlFor="newsletter">Je souhaite recevoir des offres promotionnelles de la part de Cyber Champion</label>
                        </div>
                        <Input type="button" name="envoyer" id="envoyer" value="Envoyer" className="bg-acheter text-primary rounded-2xl p-4 w-full justify-center items-center cursor-pointer" onclick={send}/>
                        <p className="text-white font-light">Vous avez déjà un compte ?<span className="text-white pl-3 font-bold cursor-pointer" onClick={redirection}>Se connecter</span></p>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Create;