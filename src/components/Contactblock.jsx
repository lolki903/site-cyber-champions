import React, { useEffect, useState } from "react";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Input from "../components/Input";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import BlockAdress from "./BlockAdress";

const ContactBlock = ({ title, nom, prenom, email, telephone, passsword, onChange, setEmail, setTelephone, setNom, setPrenom, setPassword, adress, setAdress, societe, setSociete, codepostal, setCodepostal, ville, setVille, pays, setPays, click }) => {
    const cssform = " border-gray-400 rounded-lg p-4 ml-2 w-10/12 my-2"
    const location = useLocation();
    const currentRoute = location.pathname;
    const token = JSON.parse(localStorage.getItem("token"));
    const [modif, setModif] = useState(false)
    const [adresspage, setAdresspage] = useState(false)
    const [informationperso, setInformationperso] = useState(false)
    const [adresses, setAdresses] = useState([])

    const ajouteAdress = () => {
        const newadress = {
            adress: adress,
            societe: societe,
            codepostal: codepostal,
            ville: ville,
            pays: pays,
        }
        setAdresses([...adresses, newadress]);
    }

    useEffect(() => {
        if (nom !== token.lastname || prenom !== token.firstname || email !== token.email || passsword !== token.password) {
            setModif(true)
        }
        if (currentRoute === "/addressenrigistre") {
            setAdresspage(true)
        }
        if (currentRoute === "/informationperso") {
            setInformationperso(true)
        }
    }, [nom, prenom, email, passsword, token])

    const cssName = "border-gray-400 rounded-lg p-3 my-2 ml-8 w-8/12 flex-row"

    return (
        <div className="pl-20 w-full pb-20">
            <div className="flex justify-between">
                <h1 className=" text-white text-4xl mb-5">{title}</h1>
                {adresspage ?
                    <button onClick={ajouteAdress} className="text-1xl mb-5 bg-acheter text-primary rounded-lg px-4 py-2 text-right">
                        Ajouter une adresse
                        <FontAwesomeIcon icon={faPlus} className="ml-2" />
                    </button>
                    : null}
            </div>
            <div className="flex flex-col">
                <h1 className="text-white text-2xl mb-4">Adresse 1</h1>
                <div className="flex justify-between">
                    <form action="" className="pb-20">
                        <div className="flex m-auto">
                            <Input type="text" name="nom" id="nom" placeholder="Nom" icon={faUser} className={cssName} onChange={onChange} value={nom} label="Nom" />
                            <Input type="text" name="prenom" id="prenom" placeholder="Prénom" icon={faUser} className={cssName} onChange={(e) => setPrenom(e.target.value)} value={prenom} label="Prénom" />
                        </div>
                        {informationperso ?
                            <div className="m-auto ">
                                <Input type="text" name="email" id="email" placeholder="Email" icon={faEnvelope} className={cssform} onChange={(e) => setEmail(e.target.value)} value={email} label="Email" />
                                <Input type="text" name="telephone" id="telephone" placeholder="Téléphone" icon={faPhone} className={cssform} onChange={(e) => setTelephone(e.target.value)} value={telephone} label="Téléphone" />
                                <Input type="text" name="password" id="password" placeholder="Mot de passe" icon={faLock} className={cssform} onChange={(e) => setPassword(e.target.value)} value={passsword} label="Mot de passe" />
                            </div> : null}
                        {adresspage ?
                            <BlockAdress adress={adress} setAdress={setAdress} societe={societe} setSociete={setSociete} setPays={setPays} setVille={setVille} setCodepostal={setCodepostal} codepostal={codepostal} ville={ville} pays={pays} /> : null}

                        {modif ?
                            <div>
                                <input type="button" name="modif" id="modif" placeholder="Modifier" className="bg-vert text-primary rounded-lg p-4 ml-2 w-5/12" value="Modifier" label="Modifier" />
                                <input type="button" name="supp" id="supp" placeholder="Annuler" className="bg-rose text-primary rounded-lg p-4 ml-2 w-5/12" value="Annuler" label="Annuler" />
                            </div> : null}
                    </form>
                </div>
            </div>

            {adresses.map((adresse, index) => (
                <div>
                    <h1 className="text-white text-2xl mb-4">Adresse {index + 2}</h1>
                    <div className="flex justify-between">
                        <form action="" className="pb-20">
                            <div className="flex m-auto">
                                <Input type="text" name="nom" id="nom" placeholder="Nom" icon={faUser} className={cssName} onChange={onChange} value={nom} label="Nom" />
                                <Input type="text" name="prenom" id="prenom" placeholder="Prénom" icon={faUser} className={cssName} onChange={(e) => setPrenom(e.target.value)} value={prenom} label="Prénom" />
                            </div>
                            {informationperso ?
                                <div className="m-auto ">
                                    <Input type="text" name="email" id="email" placeholder="Email" icon={faEnvelope} className={cssform} onChange={(e) => setEmail(e.target.value)} value={email} label="Email" />
                                    <Input type="text" name="telephone" id="telephone" placeholder="Téléphone" icon={faPhone} className={cssform} onChange={(e) => setTelephone(e.target.value)} value={telephone} label="Téléphone" />
                                    <Input type="text" name="password" id="password" placeholder="Mot de passe" icon={faLock} className={cssform} onChange={(e) => setPassword(e.target.value)} value={passsword} label="Mot de passe" />
                                </div> : null}
                            {adresspage ?
                                <BlockAdress adress={adress} setAdress={setAdress} societe={societe} setSociete={setSociete} setPays={setPays} setVille={setVille} setCodepostal={setCodepostal} codepostal={codepostal} ville={ville} pays={pays} /> : null}

                            {modif ?
                                <div>
                                    <input type="button" name="modif" id="modif" placeholder="Modifier" className="bg-vert text-primary rounded-lg p-4 ml-2 w-5/12" value="Modifier" label="Modifier" />
                                    <input type="button" name="supp" id="supp" placeholder="Annuler" className="bg-rose text-primary rounded-lg p-4 ml-2 w-5/12" value="Annuler" label="Annuler" />
                                </div> : null}
                        </form>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ContactBlock;
