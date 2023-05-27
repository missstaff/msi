import "../../css/Footer.css";
import "../../css/general.css";


const Footer = () => {
   return (
      <div className="footer">
         <div>
            <img className="footer-logo" src={require("../../assets/FooterLogo.png")} alt="MSI logo"/>
         </div>
         <p style={{ color: "white" }}>All Rights Reserved</p>
      </div>
   );
};

export default Footer;