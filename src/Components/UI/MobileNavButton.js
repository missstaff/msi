import { MenuOutline, CloseOutline } from 'react-ionicons'
import "../../css/Navigation.css";


const MobileNavButton = ({ handleMobileNavClick, mobileNavBtnSize }) => {
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