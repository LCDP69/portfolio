import React from "react";

const SocialNetwork = () => {

    const anim = () => {
        const icons = document.querySelectorAll(".social-network a");
        icons.forEach((link) => {
            link.addEventListener("mouseover", (e) => {
                link.style.transform = `translate(${e.offsetX - 20}px, ${e.offsetY - 13}px)`
            });

            link.addEventListener("mouseleave", () => {
                link.style.transform = "";
            })
        });
    };
    return (

        <div className="social-network">
          <ul className="content">
            <a
              href="https://www.linkedin.com/in/nicolasalgros/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover"
              onMouseOver={anim}
            >
              <li>
                <i className="fab fa-linkedin-in"></i>
              </li>
            </a>
            <a
              href="https://github.com/LCDP69"
              target="_blank"
              rel="noopener noreferrer"
              className="hover"
              onMouseOver={anim}
            >
              <li>
                <i className="fab fa-github"></i>
              </li>
            </a>
            <a
              href="mailto:nicolas38.gros@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover"
              onMouseOver={anim}
            >
              <li>
                <i className="fab fa-google"></i>
              </li>
            </a>
          </ul>
        </div>
      );
    };

export default SocialNetwork;
