import React, {useState} from 'react';
import "./Contact.scss";
import Fade from "react-reveal/Fade";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from 'react-bootstrap-alert';

function Contact() {

    const showToastMessage = () => {
        toast.success("Votre formulaire a bien été envoyé !",{
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastClassName: 'my-toast-class',
        });


    }

    const AIRTABLE_API_KEY = 'keyBUlnaxRN7JkNZM';
    const AIRTABLE_BASE_ID = 'app5a4XbZQtdGoFUX';
    const AIRTABLE_TABLE_NAME = 'Formulaire';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sujet, setSujet] = useState('');
    const [description, setDescription] = useState('');

    const submitForm = (e) => {
        e = e || window.event; // ajout du paramètre e

        e.preventDefault();
        const fields = {
            name: name,
            email: email,
            sujet: sujet,
            description: description
        };

        console.log(fields)

        const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;

        axios.post(url, { fields }, {
            headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` },
        }).then((response) => {
            console.log('Data sent to Airtable:', response.data);
            // Reset form values
            setName('');
            setEmail('');
            setSujet('');
            setDescription('');
        }).catch((error) => {
            console.error('Error sending data to Airtable:', error);
        });
    };

    let formSubmitted = false;

    return (
            <div>
                {/*<div>*/}
                {/*    <div className="cursor" style={{ left: cursorPos.x, top: cursorPos.y }} />*/}
                {/*</div>*/}
                <Fade left delay={500} duration={1000}>
                    <h2 className="title-contact">Contactez-moi !</h2>
                </Fade>

                <Fade left delay={1000}>
                    <p className="text-contact">
                        Vous souhaitez me contacter ? Remplissez le formulaire ci-dessous. Je serai ravie de vous répondre dans les plus brefs délais !
                    </p>

                    <div>
                        {formSubmitted && <p>Votre formulaire a été envoyé avec succès !</p>}
                    </div>

                    <form className="form">
                        <div className="block-form">
                            <label>
                                <input type="text" className="name" name="name" placeholder="Nom de l'entreprise" value={name} onChange={(e) => setName(e.target.value)} />
                            </label>
                            <br/>
                            <label>
                                <input type="text" className="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </label>
                                <br/>
                            <label>
                                <input type="text" className="subject" name="sujet" placeholder="Sujet" value={sujet} onChange={(e) => setSujet(e.target.value)} />
                            </label>
                            <br/>
                            <label>
                                <input type="text" className="message" name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                            </label>
                        </div>

                        <Fade bottom delay={1000}>
                            <div className="buttons">
                                <button className="raise custom-button" href="#contact" onClick={() => {
                                    submitForm();
                                    showToastMessage();
                                }}>
                                    Envoyez votre message !
                                </button>
                            </div>
                        </Fade>

                    </form>
                </Fade>
                <ToastContainer />
            </div>
        );
}

export default Contact;

