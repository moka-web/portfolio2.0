
import "./projects.css"
import bloq from "../../assets/capturas y flow de mis sitios/Bloq-capital/bloq.jpg"
import avisense from "../../assets/capturas y flow de mis sitios/avisense/avisense-main.jpg"
import apelie from "../../assets/capturas y flow de mis sitios/apelie/avisense-primera-version.jpg"
import filo from "../../assets/capturas y flow de mis sitios/filo/filo-web.jpg"
import buyers from "../../assets/capturas y flow de mis sitios/Buyers/home-buyers.jpg"
import prestamos from "../../assets/capturas y flow de mis sitios/prestamos/prestamos.jpg"
import iconoGithub from "../../assets/iconoGithub.png"
import iconoWeb from "../../assets/iconoWeb.png"
import cryptoTracker from "../../assets/capturas y flow de mis sitios/cryptotracker/crypto-tracker-main.jpg"
import NikeEcommerceImg from "../../assets/capturas y flow de mis sitios/NikeEcommerce/imgNikeEcommerce.jpg"



export const Projects = ()=>{
    return(
        <>
            <div id="projects" className="projects">
                <h1>Projects </h1>
                <p>These are some of my most recent projects...
                <br />You can see more projects on my Github <a style={{color:"black",fontSize:"1.5vw"}} href="">repository.</a> </p>

                <div className="list-projects">
                    <div  className="card-project">
                        <img src={bloq} alt="" />
                        <a className="card-link" target="_blank" href="https://peaceful-salmiakki-4d27e2.netlify.app/"><img style={{width:"6vw"}} src={iconoWeb} alt="" /></a>
                         <a className="card-link2" href="https://github.com/moka-web/bloq-capital"><img style={{width:"4vw"}} src={iconoGithub} alt="" /></a>
                    </div>

                    <div className="card-project">
                        <img src={avisense} alt="" />
                        <a className="card-link"  target="_blank" href="https://vocal-manatee-c51659.netlify.app/"><img style={{width:"6vw"}} src={iconoWeb} alt="" /></a>
                        <a className="card-link2" href="https://github.com/moka-web/apelie"><img style={{width:"4vw"}} src={iconoGithub} alt="" /></a>
                    </div>

                    <div className="card-project">
                        <img src={apelie} alt="" />
                        <a className="card-link" target="_blank" href="https://iridescent-belekoy-dd77f7.netlify.app/"><img style={{width:"6vw"}} src={iconoWeb} alt="" /></a>
                        <a className="card-link2" href="https://github.com/moka-web/avisense"><img style={{width:"4vw"}} src={iconoGithub} alt="" /></a>
                    </div>

                    <div className="card-project">
                        <img src={filo} alt="" />
                        <a className="card-link" target="_blank" href="https://filogourmet.netlify.app/"><img style={{width:"6vw"}} src={iconoWeb} alt="" /></a>
                        <a className="card-link2" href="https://github.com/moka-web/coderhouse"><img style={{width:"4vw"}} src={iconoGithub} alt="" /></a>
                    </div>


                    <div className="card-project">
                        <img src={buyers} alt="" />
                        <a className="card-link"  target="_blank" href="https://bejewelled-bublanina-9b9052.netlify.app/"><img style={{width:"6vw"}} src={iconoWeb} alt="" /></a>
                        <a className="card-link2" href="https://github.com/moka-web/my-ecommerce"><img style={{width:"4vw"}} src={iconoGithub} alt="" /></a>
                    </div>

                    <div className="card-project">
                        <img src={prestamos} alt="" />
                        <a className="card-link"  target="_blank" href="https://naughty-booth-71559c.netlify.app/"><img style={{width:"6vw"}} src={iconoWeb} alt="" /></a>
                        <a className="card-link2" href="https://github.com/moka-web/Javascript-coder"><img style={{width:"4vw"}} src={iconoGithub} alt="" /></a>
                    </div>

                    <div className="card-project">
                        <img src={cryptoTracker} alt="" />
                        <a className="card-link"  target="_blank" href="https://crypto-tracker-lemon-ten.vercel.app/"><img style={{width:"6vw"}} src={iconoWeb} alt="" /></a>
                        <a className="card-link2" href="https://github.com/moka-web/Crypto-Tracker"><img style={{width:"4vw"}} src={iconoGithub} alt="" /></a>
                    </div>

                    <div className="card-project">
                        <img src={NikeEcommerceImg} alt="" />
                        <a className="card-link"  target="_blank" href="https://nike-ecommerce-zeta.vercel.app/"><img style={{width:"6vw"}} src={iconoWeb} alt="" /></a>
                        <a className="card-link2" href="https://github.com/moka-web/nikeEcommerce"><img style={{width:"4vw"}} src={iconoGithub} alt="" /></a>
                    </div>

                    
                    
                </div>
                
            </div>
        </>
    )
}