import './Contact.scss';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { validateInput } from '../../utils/validate';
import MainBtn from '../../components/MainBtn/Index';
import { motion } from 'framer-motion';
import { mainVariants } from '../../configs/motionFramer';
import ReCAPTCHA from "react-google-recaptcha";
import { useMediaQuery } from "react-responsive";

export default function Contact(){
    const BASE_URL: string = process.env.REACT_APP_BASE_URL as string;
    const { t } = useTranslation();
    // translation paths:
    const trPath = "pages.contact."; //general
    const msgTrPath = "msg.mailForm."; // messages & alerts

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const captchaRef = useRef<ReCAPTCHA>(null);
    const [captcha, setCaptcha] = useState<string | null | undefined>('');

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: ""
    });

    // for the log message notifications
    const [okMsg, setOkMsg] = useState<string>('');
    const [errMsg, setErrMsg] = useState<string>('');

    // not submit the form, if inputs are not valid
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const MotionMainBtn = motion.create(MainBtn);

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    // verify if all inputs are valid
    const validateForm = () => {
        const nameVerif = validateInput("userName", inputs.name.trim());
        const emailVerif = validateInput("email", inputs.email.trim());
        // show all error messages
        setErrMsg(nameVerif.errMsg + emailVerif.errMsg);
        
        // form is valid if all inputs are valid
        if (nameVerif.isValid && emailVerif.isValid) {
            setIsFormValid(true);
            
            const captchaValue = captchaRef.current?.getValue();

            if (!captchaValue) {
                setErrMsg(t(`${msgTrPath}verifyRecaptcha`));
            } else {
                setCaptcha(captchaValue);
                captchaRef.current?.reset();
            }
        }
    }

    useEffect(() => {
        if (isFormValid && captcha) {
            submitForm();
        }
    },[isFormValid, captcha]);

    async function submitForm() {
        const res = await fetch(`${BASE_URL}/api/v1/sendmail`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                captcha,
                name: inputs.name,
                email: inputs.email,
                message: inputs.message
            })
        });

        const json = await res.json();
        
        if (res.status === 201) {
            setOkMsg(t(`${msgTrPath}thankYou`));
        } else {
            setErrMsg(t(`${msgTrPath}notSend`));
            console.log(`Error: ${res.status}`);
            console.log(json.msg);
        }

        // clear inputs
        setInputs({name: "", email: "", message: ""});
    }

    function handleOnFocus(){
        setOkMsg('');
        setErrMsg('');
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputs({ ...inputs, [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        validateForm();
    }

    return (
        <motion.div 
            className="wrapper"
            variants={mainVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
        <main id="contact">
            <section className="contact_section">
                <h1>{t(`${trPath}title`)}</h1>

                <p>{t(`${trPath}text`)}</p>

                <div className="contact_section_details">
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

                <div className="contact_section_form_ctn">
                    <h2>{t(`${trPath}form.title`)}</h2>

                    { okMsg  && 
                        <p className="ok_msg">{okMsg}</p> }
                    { errMsg && 
                        <p className="err_msg">{errMsg}</p> }

                    <form onSubmit={handleSubmit} className="contact_form">
                        <input type="text" 
                            name="name" 
                            value={inputs.name}
                            onChange={handleChange}
                            onFocus={handleOnFocus}
                            placeholder={t(`${trPath}form.namePlholder`)}
                            required/> 

                        <input type="email" 
                            name="email" 
                            value={inputs.email}
                            onChange={handleChange}
                            onFocus={handleOnFocus}
                            placeholder={t(`${trPath}form.emailPlholder`)}
                            required/> 

                        <textarea name="message"
                            value={inputs.message}
                            onChange={handleChange}
                            onFocus={handleOnFocus}
                            placeholder={t(`${trPath}form.msgPlholder`)}
                            rows={8}
                            maxLength={600}
                            required />

                        <ReCAPTCHA 
                            ref={captchaRef}
                            theme="dark"
                            size={isMobile ? "compact" : "normal"}
                            sitekey={process.env.REACT_APP_SITE_KEY as string}/>

                        <MotionMainBtn 
                            type="submit" 
                            onClick={() => console.log("submitted")} 
                            text={t(`${trPath}form.sendBtn`)}
                            whileHover={{ scale: 1.05 }}
                        />
                    </form>
                </div>
        
            </section>
        </main>
        </motion.div>
    )
}