import React, { useEffect, useState } from "react";
import MobileNavButton from "../UI/MobileNavButton";
import "../../css/Navigation.css";


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



    return (

        <header className={`header ${isMobileNavOpen ? "nav-open" : ""}  `}>
            <a href="#logo">
                <img id="logo" className="logo" alt="MSI logo" src={require("../../assets/TransparentLogo.png")} />
            </a>

            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li>
                        <a onClick={handleMobileNavClick} href="#about" className="main-nav-link">About</a>
                    </li>
                    <li>
                        <a onClick={handleMobileNavClick} href="#cta" className="main-nav-link nav-cta">Contact</a>
                    </li>
                </ul>
            </nav>

            <MobileNavButton handleMobileNavClick={handleMobileNavClick} />

        </header>
    );
};

export default Navigation;