import "../../css/Footer.css";
import "../../css/general.css";
import "../../css/Navigation.css"


const Footer = () => {
   return (
      <div className="footer">
         <div>
            <img className="logo" src={require("../../assets/TransparentLogo.png")} alt="MSI logo"/>
         </div>
         <p style={{ color: "white", marginTop: 2.2 }}>All Rights Reserved</p>
      </div>
   );
};

export default Footer;