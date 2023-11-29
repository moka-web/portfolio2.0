

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
                        <h1>Who am I?... </h1>
                        <hr style={{color:"#ffff", width:"100%"}} />
                        <p>
                            
"Hello, I'm Tomás Juárez, a passionate front-end developer with two years of experience. I specialize in HTML, CSS, JavaScript, React.js, and Node.js. My focus revolves around combining a passion for programming with a constant commitment to excellence. I love creating interactive and visually appealing experiences in web development. If you want to collaborate or learn more about my work, explore my portfolio! I'm excited to connect with passionate individuals and embark on new opportunities to grow and make a meaningful impact."
                        </p>
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