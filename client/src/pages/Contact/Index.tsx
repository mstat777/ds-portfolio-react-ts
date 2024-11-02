import './Contact.scss';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { validateInput } from '../../utils/validate';
import MainBtn from '../../components/MainBtn/Index';

export default function Contact(){
    const BASE_URL: string = process.env.REACT_APP_BASE_URL as string;
    const { t } = useTranslation();
    const trPath = "pages.contact."; // translation path

    const [name, setName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [message, setMessage] = React.useState<string>('');

    // for the log message notifications:
    const [okMsg, setOkMsg] = React.useState<string>('');
    const [errMsg, setErrMsg] = React.useState<string>('');

    // not submit the form, if inputs are not valid:
    const [isFormValid, setIsFormValid] = React.useState<boolean>(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    // verify if all inputs are valid :
    const validateForm = () => {
        const nameVerif = validateInput("userName", name.trim());
        const emailVerif = validateInput("email", email.trim());
        // show all error messages :
        setErrMsg(nameVerif.errMsg + emailVerif.errMsg);
        // form is valid if all inputs are valid :
        setIsFormValid((nameVerif.isValid && emailVerif) ? true : false);
    }

    useEffect(() => {
        if (isFormValid) {
            submitForm();
        }
    },[isFormValid]);

    async function submitForm() {
        const res = await fetch(`${BASE_URL}/api/v1/sendmail`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                name,
                email,
                message})
        });
        if (res.status === 201) {
            setOkMsg("Merci de nous avoir contacté.\nVotre message a bien été transmis à notre équipe.");
        } else {
            setErrMsg("Le message n'a pas été envoyé.");
            console.log(res.status);
        }
    }

    function handleOnFocus(){
        setOkMsg('');
        setErrMsg('');
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        validateForm();
    }

    return (
        <main id="contact">
            <section className="contact">
                <h1>{t(`${trPath}title`)}</h1>

                <p>{t(`${trPath}text`)}</p>

                <div className="contact_details">
                    <div className="detail_ctn">        
                        <span>
                            <FontAwesomeIcon icon={faEnvelope} className="icon"/> 
                            {t(`${trPath}email`)} : 
                        </span>
                        <a href="mailto:statevd@gmail.com">statevd@gmail.com</a>
                    </div>

                    <div className="detail_ctn">        
                        <span>
                            <FontAwesomeIcon icon={faGithub} className="icon"/> 
                            GitHub :
                        </span>
                        <a href="https://github.com/mstat777" target="_blank"  rel="noreferrer">mstat777</a>
                    </div>

                    <div className="detail_ctn">        
                        <span>
                            <FontAwesomeIcon icon={faLinkedin} className="icon"/> 
                            LinkedIn :
                        </span>
                        <a href="https://www.linkedin.com/in/dimitar-statev/" target="_blank"  rel="noreferrer">dimitar-statev</a>
                    </div>
                </div>

                <div className="contact_form_ctn">
                    <h2>{t(`${trPath}form.title`)}</h2>
                    { (okMsg && name && email && message) ? 
                        <p className="ok_msg">{okMsg}</p> : null }
                    { (errMsg && name && email && message) ? 
                        <p className="err_msg">{errMsg}</p> : null }

                    <form onSubmit={handleSubmit} className="contact_form">
                        <input type="text" 
                            name="name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onFocus={handleOnFocus}
                            placeholder={t(`${trPath}form.namePlholder`)}
                            required/> 

                        <input type="email" 
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={handleOnFocus}
                            placeholder={t(`${trPath}form.emailPlholder`)}
                            required/> 

                        <textarea name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onFocus={handleOnFocus}
                            placeholder={t(`${trPath}form.msgPlholder`)}
                            rows={8}
                            maxLength={600}
                            required />

                        <MainBtn type="submit" 
                                onClick={() => console.log("submitted")} text={t(`${trPath}form.sendBtn`)}/>
                    </form>
                </div>
        
            </section>
        </main>
    )
}