import React, { useEffect, useState } from "react";
import MobileNavButton from "../UI/MobileNavButton";
import "../../css/Navigation.css";
import "../../css/general.css";


const Navigation = () => {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);


    const handleMobileNavClick = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };


    useEffect(() => {
        const sectionAboutEl = document.querySelector("#about");
        const observer = new IntersectionObserver((entries) => {
            const ent = entries[0];
            if (!ent.isIntersecting) {
                document.body.classList.add("sticky");
            }
            if (ent.isIntersecting) {
                document.body.classList.remove("sticky");
            }
        }, { root: null, threshold: 0 })
        observer.observe(sectionAboutEl);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

    return (

        <header className={`header ${isMobileNavOpen ? "nav-open" : ""}  `}>
            <a href="#logo">
                <img id="logo" className="logo" alt="MSI logo" src={require("../../assets/logos/TransparentLogo2.png")} />
            </a>


            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li>
                        <a onClick={() => [handleMobileNavClick(), scrollToTop()]} href="#logo" className="main-nav-link">HOME</a>
                    </li>
                    <li>
                        <a onClick={handleMobileNavClick} href="#about" className="main-nav-link">ABOUT</a>
                    </li>
                    <li>
                        <a onClick={handleMobileNavClick} href="#cta" className="main-nav-link nav-cta">CONTACT</a>
                    </li>
                </ul>
            </nav>

            <MobileNavButton handleMobileNavClick={handleMobileNavClick} />

        </header>
    );
};

export default Navigation;