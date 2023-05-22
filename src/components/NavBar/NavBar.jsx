import "./navbar.css"
import iconoGithub from "../../assets/iconoGithub.png"
import iconoLinkedIn from "../../assets/iconoLinkedIn.png"
import iconoInstagram from "../../assets/iconoInstagram.png"
import { Home } from "../Home/Home"
import { useEffect, useRef, useState } from "react"

export const NavBar = () => {
    const [click, setClick] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const navRef = useRef(null);
  
    const handleClick = () => setClick(!click);
    const handleClose = () => setClick(false);
  
    const handleLinkClick = (link) => {
      setActiveLink(link);
    };
  
    useEffect(() => {
      const handleScroll = () => {

        const sections = [
          {
            id: 'home',
            ref: document.getElementById('home'),
          },
          {
            id: 'projects',
            ref: document.getElementById('projects'),
          },
          {
            id: 'about',
            ref: document.getElementById('about'),
          },
          {
            id: 'contact',
            ref: document.getElementById('contact'),
          },
        ];
  
        const navHeight = navRef.current.offsetHeight;
  
        sections.forEach((section) => {
          const sectionTop = section.ref.offsetTop - navHeight;
          const sectionBottom = sectionTop + section.ref.clientHeight;
  
          if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
            setActiveLink(section.id);
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <>
        <nav ref={navRef} className={click ? 'navbar navbar-active' : 'navbar'}>
          <ul className={click ? 'navbar-list1 active' : 'navbar-list1'}>
            <li id="home-nav">
              <a
                className={activeLink === 'home' ? 'active' : ''}
                onClick={() => handleLinkClick('home')}
                href="#home"
              >
                Home
              </a>
            </li>
            <li id="quiensoy-nav">
              <a
                className={activeLink === 'about' ? 'active' : ''}
                onClick={() => handleLinkClick('about')}
                href="#about"
              >
                Quien soy?
              </a>
            </li>
            <li id="proyectos-nav">
              <a
                className={activeLink === 'projects' ? 'active' : ''}
                onClick={() => handleLinkClick('projects')}
                href="#projects"
              >
                Proyectos
              </a>
            </li>
    
            <li id="contacto-nav">
              <a
                className={activeLink === 'contact' ? 'active' : ''}
                onClick={() => handleLinkClick('contact')}
                href="#contact"
              >
                Contactame
              </a>
            </li>
          </ul>
  
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
          </div>
        </nav>
      </>
    );
  };