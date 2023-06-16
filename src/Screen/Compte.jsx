import axios from "axios";
import React, { useEffect, useState } from "react";
import Connec from "../components/Connec";
import ContactBlock from "../components/Contactblock";
import Adress from "./Adress";

import Footer from "./Footer";
import { Header } from "./Header";
import SuiviDeCommande from "./SuivideCommande";
import Suppr from "./Suppr";

const Compte = () => {
    const token = localStorage.getItem("token")
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (token) {
                    const toke = JSON.parse(localStorage.getItem("token"));
                    const response = await axios.get(`https://cyber-champion.onrender.com/user/gets/${toke}`);
                    setNom(response.data.lastname)
                    setPrenom(response.data.firstname)
                    setNom(response.data.lastname)
                    setEmail(response.data.email)
                    setPassword(response.data.password)

                   if (response.data.status === "pas valide") {
                        window.location.href = "/verif";
                    }
                   
                }else{
                    window.location.href = "/login"
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [token]);
    // console.log(toke[0].lastname);
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [email, setEmail] = useState();
    const [telephone, setTelephone] = useState("");
    const [passsword, setPassword] = useState();

    const [infoperso, setInfoperso] = useState(true)
    const [commande, setCommande] = useState(false)
    const [adressespage, setAdressespage] = useState(false)
    const [disp , setDisp] = useState("block")
    const [mobiles , setMobiles] = useState(false)
    const [displaynone , setDisplaynone] = useState("mobile:hidden")
    const [suppr,setSuppr] = useState(false)
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
        setSuppr(false)
    }
    const handlecommand = () => {
        setInfoperso(false)
        setCommande(true)
        setAdressespage(false)
        setDisp("mobile:hidden")
        setMobiles(true)
        setDisplaynone("mobile:block")
        setSuppr(false)
    }
    const handleadress = () => {
        setInfoperso(false)
        setCommande(false)
        setAdressespage(true)
        setDisp("mobile:hidden")
        setMobiles(true)
        setDisplaynone("mobile:block")
        setSuppr(false)
    }
    const displayconnect = () =>{
        setInfoperso(false)
        setCommande(false)
        setAdressespage(false)
        setSuppr(false)
        setDisp("mobile:block")
        setMobiles(true)
        setDisplaynone("mobile:hidden")
    }
    const handlesuppr =()=>{
        setInfoperso(false)
        setCommande(false)
        setAdressespage(false)
        setDisp("mobile:hidden")
        setMobiles(true)
        setSuppr(true)
        setDisplaynone("mobile:block")
    }
    return (
        <div className="bg-primary" >
            <Header />
            <div className="flex px-40 mobile:px-0 mobile:text-center">
                <Connec info={handleinfo} commande={handlecommand} adresses={handleadress} suppr={handlesuppr} display={`${disp} mobile:pb-20`} />
                {infoperso ? <ContactBlock nom={nom} prenom={prenom} email={email} telephone={telephone} onChange={onChange} setNom={setNom} setPrenom={setPrenom} setEmail={setEmail} setTelephone={setTelephone} setPassword={setPassword} passsword={passsword} title="Informations personnelles" informationperso={true} mobile={mobiles} displaynone={displaynone} onClick={displayconnect}/>
                    : null}
                    {
                        adressespage ? <Adress mobile={mobiles} displaynone={displaynone} onClick={displayconnect} /> : null
                    }
                    {
                        commande ? <SuiviDeCommande displaynone={displaynone} /> : null
                    }
                    {
                        suppr ? <Suppr onClick={displayconnect}/> : null 
                    }

            </div>
            <Footer />
        </div>
    );
}

export default Compte;