import { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import stylesBtn from '../css/Button.module.css';
import styles from '../css/Contact.module.css';
import Button from './Button';

const Contact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [text,setText] = useState("");
    const handleSSubmit = (event) => {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
        console.log("I am FUnction");
    };
    return (
        <>
            <section className={`${styles.container}`}>
                <div className={`${styles.contact_form}`}>
                    <div className={styles.top_btn}>
                    <Button icon={<MdMessage fontSize="24px"/>} text="VIA SUPPORT CHAT" design={stylesBtn.primary_btn}/>
                    <Button icon={<FaPhoneAlt fontSize="24px"/>} text="VIA CALL" design={stylesBtn.primary_btn}/>
                    </div>
                    <Button icon={<MdMessage fontSize="24px"/>} text="VIA EMAIL FORM" design={stylesBtn.outline_btn}/>

                    <form onSubmit={handleSSubmit}>
                        <div className={styles.form_control}>
                            <label htmlFor="name">Name</label>
                            <input type='text' name='name' />
                        </div>

                        <div className={styles.form_control}>
                            <label htmlFor="email">Email</label>
                            <input type='email' name='email' />
                        </div>
                        
                        <div className={styles.form_control}>
                            <label htmlFor="text">Text</label>
                            <textarea name='text' style={{resize : 'none',padding : '12px 10px',}} rows="8"/>
                        </div>
           
                        <div style={{
                            display : "flex",
                            justifyContent : 'end',
                        }}>
                        <Button text="SUBMIT FORM" design={stylesBtn.primary_btn}/>
                        </div>

                    </form>
                        {(name.length >0 && email.length >0 && text.length >0) && <h1>Name : {name} <br/> Mail : {email} <br/> Text : {text}</h1>}
                </div>
                <div className={`${styles.image}`}>
                    <img src='images/Service 24_7-pana 1.svg' alt='Contact form' />
                </div>
            </section>
        </>
    );
}

export default Contact;