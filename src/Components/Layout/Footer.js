import "../../css/Footer.css";
import "../../css/general.css";


const Footer = () => {
   return (
      <div className="footer-container">
         <div className="footer">
            <div>
               <img src={require("../../assets/TransparentLogo.png")} alt="MSI logo" style={{ height: 96, width: "100%", margin: 0, padding: 0, }} />
            </div>
            <p style={{ color: "white", marginTop: 2.2 }}>All Rights Reserved</p>
         </div>
      </div>
   );
};

export default Footer;