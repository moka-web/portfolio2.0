
import miFoto from "../../assets/miFoto.jpg"
import "./about.css"
import micara from "../../assets/miCaraEnPng.png"

export const About = ()=>{
    return(
        <>
            <div id="about" className="about" >
                
                <div className="card-about"> 

                <div className="about-text">
                    <h1>Quien Soy? </h1>
                    <hr style={{color:"#ffff", width:"100%"}} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro at nam nesciunt officiis sint qui temporibus? Exercitationem iste, porro incidunt excepturi doloremque, veniam dolor blanditiis nulla, illo delectus impedit dicta?</p>
                </div>


                {/* <div className="about-image">
                    <img className="mifoto" src={micara} alt="" />
                </div>
                <img style={{width:"10rem",display:"flex",position:"absolute",top:"178vh",left:"15vw",zIndex:"3"}} src="https://em-content.zobj.net/source/microsoft-teams/337/man-raising-hand-light-skin-tone_1f64b-1f3fb-200d-2642-fe0f.png" alt="" /> */}
            
            </div>
                </div>
        </>
    )
}