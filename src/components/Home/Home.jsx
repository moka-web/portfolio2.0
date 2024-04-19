import "./home.css";
import iconoReact from "../../assets/iconoReact.png";
import iconoMongo from "../../assets/iconoMongo.png";
import iconoNode from "../../assets/iconoNode.png";
import iconoExpress from "../../assets/iconoExpress.png";
import micara from "../../assets/miCaraEnPng.png";

export const Home = () => {
  return (
    <>
      <div id="home" className="home">
        <div className="home-container2">
          {/* <img style={{width:"8rem",position:"absolute", top:"18%",left:"-25%"}} src="https://em-content.zobj.net/source/microsoft-teams/337/waving-hand_1f44b.png" alt="" /> */}

          <div className="home-info">
            <h1> Hi there ! </h1>
            <p>
              "Hello, I'm Tomas! A web developer specialized in the MERN stack.
              I create captivating and functional digital experiences.
              <br />
              If you're in search of a web developer, contact me! I'm excited to
              turn ideas into reality in the digital world.
            </p>
            <a download href="./CVTomasJuarezFront.pdf">
              <button>My Resume</button>
            </a>
          </div>
          <div className="stack-icons">
            <img className="react-icon" src={iconoReact} alt="" />
            <img className="react-icon" src={iconoMongo} alt="" />
            <img className="react-icon" src={iconoNode} alt="" />
            <img className="react-icon" src={iconoExpress} alt="" />
          </div>
        </div>
        <div className="container-main-img">
          {/* <img   src="https://em-content.zobj.net/source/microsoft-teams/337/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png" alt="" /> */}

          <img src={micara} alt="" />
        </div>
      </div>
    </>
  );
};
