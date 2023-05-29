import React from "react";
import Final from "../components/Final";
import error from "../assets/icon/error.svg";

const ErrorMessage = () => {
    return (
        <div className="bg-primary">
            <Final icon={error} button="Se rendre sur la page de contact" title="Une erreur est survenue" text="Malheureusement, votre message n’a pas été envoyé... N’hésitez pa sà réessayer dès que possible ou bien à nous contacter directement à l’adresse e-mail suivante : contact@cyber-champions.fr"/>
        </div>
    );
    }

export default ErrorMessage;