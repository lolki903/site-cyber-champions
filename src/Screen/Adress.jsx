import React from "react";
import ContactBlock from "../components/Contactblock";

import { useState } from "react";
import axios from "axios";

const Adress = ({mobile,displaynone,onClick}) => {
    const [codepostal, setCodepostal] = useState("")
    const [ville, setVille] = useState("")
    const [pays, setPays] = useState("")
    const [adress, setAdress] = useState("")
    const [societe, setSociete] = useState("")

    const token = JSON.parse(localStorage.getItem("token"));
    axios.get(`https://cyber-champion.onrender.com/user/gets/${token}`).then((data)=>{
        setNom(data.data.lastname)
        setPrenom(data.data.firstname)
    })

    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [numberadress , setNumberadress] = useState([])
    const ajouteAdress = () => {
        const newadress = {
            adress: adress,
            societe: societe,
            codepostal: codepostal,
            ville: ville,
            pays: pays,
        }
        setNumberadress([...numberadress, newadress])
        console.log(numberadress)
    }
    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === "nom") {
            setNom(value);
        } else if (name === "prenom") {
            setPrenom(value);
        } else if (name === "codepostal") {
            setCodepostal(value);
        } else if (name === "ville") {
            setVille(value);
        } else if (name === "pays") {
            setPays(value);
        } else if (name === "adress") {
            setAdress(value);
        } else if (name === "societe") {
            setSociete(value);
        }
    };
    
    return (
        // <div className="bg-primary">
        // <Header />
        // <div className="flex px-40">
        //     <Connec />
            <div className="w-full">
                <ContactBlock title="Adresses enregistrées" nom={nom} prenom={prenom} adress={adress} setAdress={setAdress} societe={societe} setSociete={setSociete} codepostal={codepostal} setCodepostal={setCodepostal} ville={ville} setVille={setVille} pays={pays} setPays={setPays} onChange={onChange} setNom={setNom} setPrenom={setPrenom} click={ajouteAdress} adresspage={true} mobile={mobile} displaynone={displaynone} onClick={onClick}/>
            </div>
        // </div>
        // <Footer />
        // </div>
    );
    }

export default Adress;