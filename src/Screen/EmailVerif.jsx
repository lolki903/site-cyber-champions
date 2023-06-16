import { faCableCar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import Footer from "./Footer";
import { Header } from "./Header";

const EmailVerif = ()=>{
    const [verif,setVerif] = useState()
    const[email,setEmail] =useState()
    const toke = JSON.parse(localStorage.getItem("token"));
    const [erreur,setErreur] =useState("")
    useEffect(()=>{

         axios.get(`https://cyber-champion.onrender.com/user/gets/${toke}`).then((data)=>{
             setEmail(data.data.email)
         })
    })
const verifemail=()=>{

    axios.post(`https://cyber-champion.onrender.com/user/email`,{
        email:email,
        code:verif
    }).then(()=>{
        window.location.href ="/informationperso"
    }).catch(()=>{
        setErreur("Le code est incorrect")
    })
}
    const cssform = " border-gray-400 rounded-lg p-4 ml-2 w-10/12 focus:outline-none"
    return(
        <div className="bg-primary">
            <Header />
            <div className="px-40 mobile:px-7 flex flex-col text-center justify-center">
                <h1 className="text-5xl text-white m-auto w-6/12 mobile:w-full">Valider la création de votre compte</h1>
                <h2>{erreur}</h2>
                <div className="w-5/12 mobile:w-full m-auto">
                <p className="text-white mb-4">Veuillez renseigner le code envoyé par e-mail. Cela évite la création de faux profils. L’e-mail peut mettre en 1 à 10min avant de s’envoyer.</p>
                </div>
                <p className="text-white mb-8">Vous n’avez pas reçu le code ? <a href="#" className="font-bold">Renvoyer un nouveau code de validation.</a></p>
            <div className="mobile:w-full w-9/12 m-auto pb-40">
            <Input name="verif" id="verif" icon={faCableCar} placeholder="Code de vérification" className={cssform} onChange={(e) => setVerif(e.target.value)} value={verif} label="Code de vérification"/>
            <Input type="button" name="envoyer" id="envoyer" value="Envoyer" className="bg-acheter moinspluss text-primary rounded-2xl p-4 w-full justify-center items-center cursor-pointer" onclick={verifemail}/>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default EmailVerif