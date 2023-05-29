import React,{useState} from "react";
import Connec from "../components/Connec";
import ContactBlock from "../components/Contactblock";

import Footer from "./Footer";
import { Header } from "./Header";

const Compte = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token.email);
    const [nom, setNom] = useState(token.lastname);
    const [prenom, setPrenom] = useState(token.firstname);
    const [email, setEmail] = useState(token.email);
    const [telephone, setTelephone] = useState("");
    const [passsword, setPassword] = useState(token.password);
    
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
    return (
        <div className="bg-primary" >
            <Header />
            <div className="flex px-40">
                <Connec />
                <ContactBlock nom={nom} prenom={prenom} email={email} telephone={telephone}  onChange={onChange} setNom={setNom} setPrenom={setPrenom} setEmail={setEmail} setTelephone={setTelephone} setPassword={setPassword} passsword={passsword} title="Informations personnelles"/>
            </div>
            <Footer />
        </div>
    );
    }

export default Compte;