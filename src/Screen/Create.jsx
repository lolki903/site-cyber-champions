import React, { useState } from "react";
import { Header } from "./Header";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Input from "../components/Input";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
const Create = () => {
    const cssform = " border-gray-400 rounded-lg p-4 ml-2 w-10/12"
    const [email, setEmail] = useState("")
    const [passsword, setPassword] = useState("")
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const cssName = "border-gray-400 rounded-lg p-4 ml-8 w-8/12 flex-row"
    return (
        <div className="bg-primary">
            <Header />
            <div className="text-white flex flex-col justify-center items-center mb-10">
                <h1 className="text-6xl mb-5">Crée un compte</h1>
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
                        <Input type="text" name="nom" id="nom" placeholder="Nom" icon={faUser} className={cssName} onChange={(e) => setNom(e.target.value)} value={nom} label="Nom" />
                        <Input type="text" name="prenom" id="prenom" placeholder="Prénom" icon={faUser} className={cssName} onChange={(e) => setPrenom(e.target.value)} value={prenom} label="Prénom" />
                    </div>
                    <div className="m-auto forminput">
                        <Input type="text" name="email" id="email" placeholder="Email" icon={faEnvelope} className={cssform} onChange={(e) => setEmail(e.target.value)} value={email} label="Email" />
                        <Input type="password" name="password" id="password" placeholder="Mot de passe" icon={faLock} className={cssform} onChange={(e) => setPassword(e.target.value)} value={passsword} label="Mot de passe" />
                        <Input type="button" name="envoyer" id="envoyer" value="Envoyer" className="bg-acheter text-primary rounded-2xl p-4 w-full justify-center items-center" />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Create;