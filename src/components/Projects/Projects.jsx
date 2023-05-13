
import "./Projects.css"
import bloq from "../../assets/capturas y flow de mis sitios/Bloq-capital/bloq.jpg"
import avisense from "../../assets/capturas y flow de mis sitios/avisense/avisense-main.jpg"
import apelie from "../../assets/capturas y flow de mis sitios/apelie/avisense-primera-version.jpg"
import filo from "../../assets/capturas y flow de mis sitios/filo/filo-web.jpg"
import buyers from "../../assets/capturas y flow de mis sitios/Buyers/home-buyers.jpg"
import prestamos from "../../assets/capturas y flow de mis sitios/prestamos/prestamos.jpg"
import iconoGithub from "../../assets/iconoGithub.png"

export const Projects = ()=>{
    return(
        <>
            <div id="projects" className="projects">
                <h1>Projects</h1>
                <p>Estos son algunos de mis proyectos mas recientes... <br /> podes ver mas proyectos en mi repositorio <a href=""><img style={{width:"2vw"}} src={iconoGithub} alt="" /></a></p>

                <div className="list-projects">
                    <div className="card-project">
                        <img src={bloq} alt="" />
                        <a className="card-link" href="">Website Link</a>
                    </div>

                    <div className="card-project">
                        <img src={avisense} alt="" />
                        <a className="card-link" href="">Website Link</a>
                    </div>

                    <div className="card-project">
                        <img src={apelie} alt="" />
                        <a className="card-link" href="">Website Link</a>
                    </div>

                    <div className="card-project">
                        <img src={filo} alt="" />
                        <a className="card-link" href="">Website Link</a>
                    </div>


                    <div className="card-project">
                        <img src={buyers} alt="" />
                        <a className="card-link" href="">Website Link</a>
                    </div>

                    <div className="card-project">
                        <img src={prestamos} alt="" />
                        <a className="card-link" href="">Website Link</a>
                    </div>

                    
                    
                </div>
                
            </div>
        </>
    )
}