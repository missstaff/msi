import React, { useEffect, useState } from "react";
import { MenuOutline } from 'react-ionicons';
import { useMediaQuery } from "../../hooks/useMediaQuery";
import "../../css/Navigation.css";
import "../../css/general.css";


const MobileNavButton = ({ handleMobileNavClick }) => {

    const isLargeScreen = useMediaQuery("lg");
    const isMediumScreen = useMediaQuery("md");
    const isSmallScreen = useMediaQuery("sm");
    const isExtraSmallScreen = useMediaQuery("xs");

    const [mobileNavBtnSize, setMobileNavBtnSize] = useState("");

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
        <button className="btn-mobile-nav" >
            <MenuOutline
                className="icon-mobile-nav" name="menu-outline"
                color={'#D41858'}

                height={mobileNavBtnSize}
                width={mobileNavBtnSize}
                onClick={() => handleMobileNavClick()}
            />
        </button>
    );
};

export default MobileNavButton;