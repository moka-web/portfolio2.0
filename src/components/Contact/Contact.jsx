
import "./contact.css"
import iconoLinkedin from "../../assets/iconoLinkedin.png"
import iconoGithub from "../../assets/iconoGithub.png"
import iconoInstagram from "../../assets/iconoInstagram.png"
import toast, { Toaster } from 'react-hot-toast';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = ()=>{

    const notify = () => toast('Here is your toast.');

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
      }

        let username = e.target.user_name.value;
        let email = e.target.user_email.value;
        let message = e.target.message.value ;

        if (!expresiones.usuario.test(username) || !expresiones.correo.test(email)) {
            return toast.error("los campos no son correctos")
        }else{
            
            emailjs.sendForm('service_m551caz', 'template_tei8h0e', form.current, 'w1YVZgG5PWG7M2jhN')

            .then((result) => {
                return toast.success('el Email fue enviado!')
    
            });
            
            
        }     
    };






    return(
        <>
        
            {/* <img  className="rocket-contact" src="https://em-content.zobj.net/source/microsoft-teams/337/rocket_1f680.png" alt="" /> */}
            <div id="contact"  className="contact">
            <div><Toaster/></div>
                <h1>contact me ! </h1>
                <div className="form-container">
                    <div className="contact-list"> 
                        <ul>
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/in/tomasjuarez/">
                                    {/* <img style={{width:"1.5vw"}} src={iconoLinkedin} alt="" />  */}
                                    linkedin 
                                </a> 
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/moka-web">
                                    {/* <img style={{width:"1.5vw"}} src={iconoGithub} alt="" />  */}
                                    Github
                                </a> 
                            </li>
                        </ul>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="topBefore">
                        <input type="hidden" name="contact_number"/>
                        <input  name="user_name" id="name" type="text" placeholder="NAME"/>
                        <input  name="user_email" id="email" type="text" placeholder="E-MAIL"/>
                        <textarea name="message" id="message" type="text" placeholder="MESSAGE"></textarea>
                        <input  id="submit" type="submit" value="Send"/>
                    </form>
                </div>
            </div>
        </>
    )
}





