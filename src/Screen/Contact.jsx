import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Header } from "./Header";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Input from "../components/form";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faSms } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
    return (
        <div className="bg-primary">
        <Header />
        <div className="text-white flex flex-col justify-center items-center">
            <h1 className="text-6xl">Nous Contacter</h1>
            <p className="w-7/12 text-center">Si vous avez des questions, des commentaires ou des demandes spécifiques, n'hésitez pas à nous contacter. Notre équipe est là pour vous aider et vous répondre dans les plus brefs délais.</p>
        </div>
        <div className="">
            <form action="" className="">
                <div className="flex items-center justify-center">
                    <div className="bg-white border-2 rounded-lg w-3/12 p-3  ml-10 mr-10">
                        <FontAwesomeIcon icon={faUser} />
                        <input type="text" name="nom" id="nom" placeholder="Nom" />
                    </div>
                    <div className="bg-white border-2 rounded-lg w-3/12 p-3 ml-10 mr-10 ">
                        <FontAwesomeIcon icon={faUser} />
                        <input type="text" name="prenom" id="prenom" placeholder="Prénom" />
                    </div>
                </div>
                <div className="m-auto">

                    <Input type="text" name="email" id="email" placeholder="Email" icon={faEnvelope} />
                    <Input type="text" name="telephone" id="telephone" placeholder="Téléphone" icon={faPhone} />
                    <Input type="textarea" name="message" id="message" placeholder="Message" icon={faSms} />
                </div>
            </form>
        </div>
        </div>
    );
    }

export default Contact;