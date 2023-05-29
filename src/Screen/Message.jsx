import React from "react";
import Final from "../components/Final";
import confetti from "../assets/icon/confetti.svg";

const MessagEnvoi =() => {
    return (
        <div className="bg-primary">
            <Final icon={confetti} button="Se rendre sur la page d’accueil" title="Votre message a bien été envoyé !" text="Notre équipe traitera votre demande dans les plus brefs délais. Nous reviendrons vers vous directement par e-mail."/>
        </div>
    );
}

export default MessagEnvoi;