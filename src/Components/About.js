import React from 'react';
import "../css/general.css";
import "../css/About.css";

const About = () => {
    return (
        <div className="background-image" style={{ paddingTop: 96, paddingBottom: 96 }}>
          
            <div className="grid grid--2-cols">
           
                <div style={{marginLeft: 50, marginRight: 50, paddingTop: 10, paddingBottom: 10, paddingLeft: 50, paddingRight: 50}}>
                <h2 id="about" className="heading-secondary" >At MSI, our mission is simple yet impactful</h2>
                    <p className="about-text" >To empower small businesses with a stunning online presence, without breaking the bank.</p>
                    <p className="about-text" >We understand that every small business deserves a high-quality website that showcases their unique offerings and captures the attention of their target audience. That's why we've made it our passion and expertise to provide affordable web design solutions that are tailored to your specific needs.</p>
                    <p className="about-text" >With our team of talented designers, developers, and digital experts, we are committed to delivering pixel-perfect designs that not only look visually appealing but also enhance your brand's credibility and drive results. We believe that a great website is not just about aesthetics; it's about creating a seamless user experience that engages and converts visitors into loyal customers.</p>
                    <p className="about-text" >What sets us apart is our dedication to affordability without compromising on quality. We understand the challenges faced by small businesses, and we want to be the bridge that helps you overcome them. With our competitive pricing options and flexible packages, we ensure that you get the best value for your investment.</p>
                    <p className="about-text" >Whether you need a complete website overhaul, a responsive design, e-commerce integration, or ongoing maintenance, we've got you covered. Our team is here to guide you every step of the way, making the entire process smooth, transparent, and hassle-free.</p>
                    <p className="about-text" >Join us on this exciting journey of transforming your online presence! Connect with us today for a free consultation and let's embark on the path to web greatness together! We look forward to serving you and creating pixel-perfect designs that make a lasting impact.</p>
                </div>
                <div style={{marginLeft: 50, marginRight: 50, padding: 10, paddingTop: 10, paddingBottom: 10, paddingLeft: 50, paddingRight: 50}} >
                   
                </div>
            </div>

        </div>
    );
};

export default About;
