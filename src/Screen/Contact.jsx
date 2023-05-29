
import React, { useState } from "react";
import { Header } from "./Header";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Input from "../components/Input";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faSms } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
const Contact = () => {
    const cssform =  " border-gray-400 rounded-lg p-4 pb-8 ml-2 w-10/12"
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [message, setMessage] = useState("")
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const cssName ="border-gray-400 rounded-lg p-4 pb-8 ml-8 w-8/12 flex-row"

    return (
        <div className="bg-primary">
        <Header />
        <div className="text-white flex flex-col justify-center items-center mb-10">
            <h1 className="text-6xl mb-5">Nous Contacter</h1>
            <p className="w-7/12 text-center">Si vous avez des questions, des commentaires ou des demandes spécifiques, n'hésitez pas à nous contacter. Notre équipe est là pour vous aider et vous répondre dans les plus brefs délais.</p>
        </div>
        <div className="pb-40">
            <form action="" className="">
                    {/* <div className="bg-white border-2 rounded-2xl w-3/12 p-3  ml-10 mr-10">
                        <FontAwesomeIcon icon={faUser} className="pl-5" />
                        <input type="text" name="nom" id="nom" placeholder="Nom" className="ml-5" onChange={(e) => setNom(e.target.value)} value={nom} label="Nom" />
                    </div> */}
                    {/* <div className="bg-white border-2 rounded-2xl w-3/12 p-3 ml-10 mr-10 ">
                        <FontAwesomeIcon icon={faUser} className="pl-5" />
                        <input type="text" name="prenom" id="prenom" placeholder="Prénom" className="ml-5" onChange={(e) => setPrenom(e.target.value)} value={prenom} label="Prénom" />
                    </div> */}
                    <div className=" flex formname m-auto">
                    <Input type="text" name="nom" id="nom" placeholder="Nom" icon={faUser} className= {cssName} onChange={(e) => setNom(e.target.value)} value={nom} label="Nom" />
                    <Input type="text" name="prenom" id="prenom" placeholder="Prénom" icon={faUser} className= {cssName} onChange={(e) => setPrenom(e.target.value)} value={prenom} label="Prénom" />
                </div>
                <div className="m-auto forminput">
                    <Input type="text" name="email" id="email" placeholder="Email" icon={faEnvelope} className= {cssform} onChange={(e) => setEmail(e.target.value)} value={email} label="Email" />
                    <Input type="text" name="telephone" id="telephone" placeholder="Téléphone" icon={faPhone} className= {cssform} onChange={(e) => setTelephone(e.target.value)} value={telephone} label="Téléphone" />
                    <Input type="text" name="message" id="message" placeholder="Message" icon={faSms} className= {cssform} onChange={(e) => setMessage(e.target.value)} value={message} label="Message" />
                
                    <Input type="button" name="envoyer" id="envoyer" value="Envoyer" className= "bg-acheter text-primary rounded-2xl p-4 w-full justify-center items-center"  />
                </div>
            </form>
        </div>
        <Footer />
        </div>
    );
    }

export default Contact;