import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import "./CSS Files/Navbar.css";
import Typewriter from "typewriter-effect/dist/core";

function Navbar() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: [
        "I am a Self-Taught Developer",
        "I love to study, code and repeat",
        "Portfolio Under Development",
        "Please Be Patient!",
      ],
      autoStart: true,
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 50,
    });

    typewriterRef.current.style.display = "flex";
    typewriterRef.current.style.flexWrap = "wrap";

    return () => {
      typewriter.stop();
    };
  }, []);

 

  const onResumeClick = () => {
    window.open(Pdf);
  };

  return (
    <nav id="navbar">
      
      <a href="https://github.com/jeffersonfed" target="_blank" className="icons">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <ul className="nav-links">
        <div className="name-box">
         
          <li className="Name">
            RJJ<span className="period"></span>
          </li>
                
        </div>
        
      </ul>
      <div className="Introduction">
        <h1>Hey, I'm Ritch Johan Jefferson</h1>
        <h2>
          <span ref={typewriterRef}></span>
        </h2>
        <p>
          I'm a self-taught developer, and this portfolio site is currently under development. I will be using React.js or Next.js
        </p>
        <h1>Portfolio Under Development</h1>

        {/* <Link to="Contact"  smooth={true} duration={900}>
          <button>Contact Me</button>
        </Link> */}
      </div>
    </nav>
  );
}

export default Navbar;