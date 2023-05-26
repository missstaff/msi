import React from "react";
import "../../css/Form.css";
import "../../css/general.css";


const Form = () => {
  return (
    <section className="section-cta" id="cta">
      <div className="grid">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">
              Let's get started!
            </h2>
            <p className="cta-text">
              Tell us your needs and let us bring your vision to life!
            </p>
            <form className="cta-form" name="contact" method="POST" netlify-honeypot="bot-field" netlify>
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input id="full-name" type="text" placeholder="Jane Doe" name="full-name" required />

              </div>

              <div>
                <label htmlFor="email">Email address</label>
                <input id="email" type="email" placeholder="me@example.com" name="email" required />
              </div>

              <div>
                <label htmlFor="website">Your current website address (optional)</label>
                <input id="website" type="text" placeholder="www.your-site.com" name="website" />
              </div>

              <div>
                <label htmlFor="select-where">Where did you hear about us?</label>
                <select id="select-where" name="select-where" required>
                  <option value="">Please choose one option</option>
                  <option value="friends">
                    Friends and family
                  </option>
                  <option value="youtube">
                    YouTube video
                  </option>
                  <option value="podcast">
                    Podcast
                  </option>
                  <option value="facebook">
                    Facebook ads
                  </option>
                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="message">What are your website's goals?</label>
                <textarea id="message" type="textarea" placeholder="Message text ..." name="message" rows="3" cols="50" required ></textarea>
              </div>

              <button className="btn btn--form">Submit</button>
            </form>
          </div>
          <div className="cta-image-box" role="img" aria-label="msi logo in gray scale">

          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;