import React,{useState} from "react";
import Connec from "../components/Connec";
import Footer from "./Footer";
import { Header } from "./Header";

const SuiviDeCommande = ({displaynone}) => {
    // const [commande, setCommande] = useState([])
    return (
        // <div className="bg-primary">
        //     <Header />
        //     <div className="flex px-40">
        //      <Connec />
             <div className={`pl-20 ${displaynone}`}>
                <h1 className="text-4xl text-white">Suivi de commandes</h1>
                <table className="w-full">
                    <thead className="border-b">
                    <tr>
                        <th className="text-white text-left pl-7">Réference</th>
                        <th className="text-white text-left pl-7">Status</th>
                        <th className="text-white text-left pl-7">Adresse</th>
                        <th className="text-white text-left pl-7">Livraison</th>
                        <th className="text-white text-left pl-7">N° de suivi</th>
                        <th className="text-white text-left pl-7">Facture</th>
                    </tr>
                    </thead>
                    <tbody> 
                    <tr className="border-b">
                        <td className="text-white pl-7">1</td>
                        <td className="text-white pl-7">En cours de préparation</td>
                        <td className="text-white pl-7">1 rue de la paix</td>
                        <td className="text-white pl-7">Livraison standard</td>
                        <td className="text-white pl-7">1</td>
                        <td className="text-white pl-7">1</td>
                    </tr>
                    </tbody>
                    
                </table>
             </div>
        //     </div>
        //     <Footer />
        // </div>
    );
}

export default SuiviDeCommande;