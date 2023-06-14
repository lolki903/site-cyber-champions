import React, { useState } from "react";
import Connec from "../components/Connec";
import ContactBlock from "../components/Contactblock";
import Adress from "./Adress";

import Footer from "./Footer";
import { Header } from "./Header";
import SuiviDeCommande from "./SuivideCommande";

const Compte = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token.email);
    const [nom, setNom] = useState(token.lastname);
    const [prenom, setPrenom] = useState(token.firstname);
    const [email, setEmail] = useState(token.email);
    const [telephone, setTelephone] = useState("");
    const [passsword, setPassword] = useState(token.password);
    const [infoperso, setInfoperso] = useState(true)
    const [commande, setCommande] = useState(false)
    const [adressespage, setAdressespage] = useState(false)
    const [disp , setDisp] = useState("block")
    const [mobiles , setMobiles] = useState(false)
    const [displaynone , setDisplaynone] = useState("mobile:hidden")
    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === "nom") {
            setNom(value);
        } else if (name === "prenom") {
            setPrenom(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const handleinfo = () => {
        setInfoperso(true)
        setCommande(false)
        setAdressespage(false)
        setDisp("mobile:hidden")
        setMobiles(true)
        setDisplaynone("mobile:block")
    }
    const handlecommand = () => {
        setInfoperso(false)
        setCommande(true)
        setAdressespage(false)
        setDisp("mobile:hidden")
        setMobiles(true)
        setDisplaynone("mobile:block")
    }
    const handleadress = () => {
        setInfoperso(false)
        setCommande(false)
        setAdressespage(true)
        setDisp("mobile:hidden")
        setMobiles(true)
        setDisplaynone("mobile:block")
    }
    const displayconnect = () =>{
        setInfoperso(false)
        setCommande(false)
        setAdressespage(false)
        setDisp("mobile:block")
        setMobiles(true)
        setDisplaynone("mobile:hidden")
    }
    return (
        <div className="bg-primary" >
            <Header />
            <div className="flex px-40 mobile:px-0 mobile:text-center">
                <Connec info={handleinfo} commande={handlecommand} adresses={handleadress} display={`${disp} mobile:pb-20`} />
                {infoperso ? <ContactBlock nom={nom} prenom={prenom} email={email} telephone={telephone} onChange={onChange} setNom={setNom} setPrenom={setPrenom} setEmail={setEmail} setTelephone={setTelephone} setPassword={setPassword} passsword={passsword} title="Informations personnelles" informationperso={true} mobile={mobiles} displaynone={displaynone} onClick={displayconnect}/>
                    : null}
                    {
                        adressespage ? <Adress mobile={mobiles} displaynone={displaynone} onClick={displayconnect} /> : null
                    }
                    {
                        commande ? <SuiviDeCommande displaynone={displaynone} /> : null
                    }

            </div>
            <Footer />
        </div>
    );
}

export default Compte;