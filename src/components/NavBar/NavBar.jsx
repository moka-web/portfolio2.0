import "./navbar.css"
import iconoGithub from "../../assets/iconoGithub.png"
import iconoLinkedIn from "../../assets/iconoLinkedIn.png"
import iconoInstagram from "../../assets/iconoInstagram.png"
import { Home } from "../Home/Home"

export const NavBar =  ()=>{
    
    

    return(
        <>
            <nav className="navbar">
                <ul className="navbar-list1">
                    <li><a href="#home">Home</a></li>
                    <li> <a href="#projects">Proyectos</a> </li>
                    <li> <a href="#about"> Quien soy?</a> </li>
                    <li> <a href="#contact"> Contactame</a> </li>
                </ul>

                {/* <ul className="navbar-list2">
                    <li><img style={{width:"1.5rem"}} src={iconoGithub} alt="" /></li>
                    <li><img style={{width:"1.5rem"}} src={iconoLinkedIn} alt="" /></li>
                    <li><img style={{width:"1.5rem"}} src={iconoInstagram} alt="" /></li>
                </ul> */}


            </nav>
        </>
    )
}