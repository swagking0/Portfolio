import React from "react";
import "../../styles/components/socialherobanner.css";

function SocialHeroBanner() {
  return (
    <section className="herosection__socialherobanner">
      <div className="socialherobanner__container">
        <div className="socialherobanner__wrapper">
          <div className="socialherobanner__titlewrapper">
            <h2>Follow me on</h2>
          </div>
          <div className="socialherobanner__linkswrapper">
            <span>
              <a
                href="https://www.facebook.com/mohith.bhargav/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </span>
            <span>
              <a
                href="https://twitter.com/MohithSunkara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.instagram.com/mohith.bhargav/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/mohith-bhargav-sunkara-930796119/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </span>
            <span>
              <a
                href="https://github.com/swagking0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialHeroBanner;
