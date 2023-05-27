import "../../css/Footer.css";


const Footer = () => {
   return (
      <div className="footer">
         <div>
            <img className="footer-logo" src={require("../../assets/logos/TransparentLogo2.png")} alt="MSI logo"/>
         </div>
         <p style={{ color: "white" }}>All Rights Reserved</p>
      </div>
   );
};

export default Footer;