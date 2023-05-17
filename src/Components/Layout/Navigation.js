import React, { useEffect, useState } from "react";
import MobileNavButton from "../UI/MobileNavButton";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import "../../css/Navigation.css";


const Navigation = () => {


    const isLargeScreen = useMediaQuery("lg");
    const isMediumScreen = useMediaQuery("md");
    const isSmallScreen = useMediaQuery("sm");
    const isExtraSmallScreen = useMediaQuery("xs");


    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [mobileNavBtnSize, setMobileNavBtnSize] = useState("");


    const handleMobileNavClick = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };


    useEffect(() => {
        if (isLargeScreen) {
            setMobileNavBtnSize("50px");
        } else if (isMediumScreen) {
            setMobileNavBtnSize("40px");
        } else if (isSmallScreen) {
            setMobileNavBtnSize("40px");
        } else if (isExtraSmallScreen) {
            setMobileNavBtnSize("30px");
        }
    }, [isLargeScreen, isMediumScreen, isSmallScreen, isExtraSmallScreen]);


    
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

            <MobileNavButton handleMobileNavClick={handleMobileNavClick} mobileNavBtnSize={mobileNavBtnSize} />

        </header>
    );
};

export default Navigation;