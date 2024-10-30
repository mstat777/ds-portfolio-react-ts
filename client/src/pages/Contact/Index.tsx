import './Contact.scss';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { validateInput } from '../../utils/validate';
import MainBtn from '../../components/MainBtn/Index';

export default function Contact(){
    const { t } = useTranslation();
    const trPath = "pages.contact."; // translation path

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [okMsg, setOkMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');

    // not submit the form, if inputs are not valid:
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    // verify if all inputs are valid :
    const validateForm = () => {
        const nameVerif = validateInput("userName", userName.trim());
        const emailVerif = validateInput("email", userEmail.trim());
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
        console.log("The from is validated now. Let's send the mail! :)");
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
                    { (okMsg && userName && userEmail && userMessage) ? 
                        <p className="ok_msg">{okMsg}</p> : null }
                    { (errMsg && userName && userEmail && userMessage) ? 
                        <p className="err_msg">{errMsg}</p> : null }

                    <form onSubmit={handleSubmit} className="contact_form">
                        <input type="text" 
                            name="userName" 
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            onFocus={handleOnFocus}
                            placeholder={t(`${trPath}form.namePlholder`)}
                            required/> 

                        <input type="email" 
                            name="userEmail" 
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            onFocus={handleOnFocus}
                            placeholder={t(`${trPath}form.emailPlholder`)}
                            required/> 

                        <textarea name="userMessage"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            onFocus={handleOnFocus}
                            placeholder={t(`${trPath}form.msgPlholder`)}
                            rows={8}
                            maxLength={600}
                            required />

                        <MainBtn type="submit" 
                                onClick={handleSubmit} text={t(`${trPath}form.sendBtn`)}/>
                    </form>
                </div>
        
            </section>
        </main>
    )
}