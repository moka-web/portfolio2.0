
import "./contact.css"
import iconoLinkedin from "../../assets/iconoLinkedin.png"
import iconoGithub from "../../assets/iconoGithub.png"
import iconoInstagram from "../../assets/iconoInstagram.png"


export const Contact = ()=>{
    return(
        <>
        
            {/* <img  className="rocket-contact" src="https://em-content.zobj.net/source/microsoft-teams/337/rocket_1f680.png" alt="" /> */}

            <div id="contact"  className="contact">
                <h1>contact me ! </h1>
                <div className="form-container">

                    <div className="contact-list"> 
                        <ul>
                            <li>
                                <a target="_blank" href="">
                                    {/* <img style={{width:"1.5vw"}} src={iconoLinkedin} alt="" />  */}
                                    linkedin 
                                </a> 
                            </li>
                            <li>
                                <a target="_blank" href="">
                                    {/* <img style={{width:"1.5vw"}} src={iconoGithub} alt="" />  */}
                                    Github
                                </a> 
                            </li>
                            <li>
                                <a target="_blank" href="">
                                 {/* <img style={{width:"1.5vw"}} src={iconoInstagram} alt="" />  */}
                                     instagram     
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    facebook
                                </a>
                                
                            </li>
                        </ul>
                    </div>

                    <form id="form" className="topBefore">
                        <input id="name" type="text" placeholder="NAME"/>
                        <input id="email" type="text" placeholder="E-MAIL"/>
                        <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
                        <input id="submit" type="submit" value="GO!"/>
                    </form>
                </div>
            </div>
        </>
    )
}





