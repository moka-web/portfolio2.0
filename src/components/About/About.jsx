

import "./about.css"
import iconoReact from "../../assets/iconoReact.png";
import iconoMongo from "../../assets/iconoMongo.png";
import iconoNode from "../../assets/iconoNode.png";
import iconoExpress from "../../assets/iconoExpress.png";

export const About = ()=>{
    return(
        <>
            <div id="about" className="about" >
                
                <div className="card-about"> 

                    <div className="about-text">
                        <h1>Quien Soy? </h1>
                        <hr style={{color:"#ffff", width:"100%"}} />
                        <p>"Hola, soy Tomás Juárez, un apasionado desarrollador front-end con dos años de experiencia. Me especializo en HTML, CSS, JavaScript, React.js y Node.js. Mi enfoque se basa en combinar la pasión por la programación con un compromiso constante con la excelencia. Me encanta crear experiencias interactivas y visualmente atractivas en el desarrollo web. Si quieres colaborar o conocer más sobre mi trabajo, ¡explora mi portafolio! Estoy emocionado de conectar con personas apasionadas y embarcarme en nuevas oportunidades para crecer y crear un impacto significativo."</p>
                    </div>


                  
                    <div className="about-images">
                        <div>
                            <img src={iconoMongo} alt="" />
                            <img  src={iconoExpress} alt="" />
                            <img src={iconoReact} alt="" />
                            <img src={iconoNode} alt="" />
                        </div>    
                    </div>    
        
                </div>
            </div>
        </>
    )
}