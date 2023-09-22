// Write your code here
import {AiFillPhone, AiOutlineCopyrightCircle} from 'react-icons/ai'
import './index.css'

const Footer = () => (
  <footer className="p-3">
    <div className="contianer-fluid">
      <div className="row gap-3 d-flex flex-column flex-md-row justify-content-center align-items-center">
        <div className="col-12 col-md-5">
          <img
            className="footer-logo"
            src="img/NIL_logo_Transparent (1) 1.png"
            alt=""
          />

          <p className="footer-description">
            Book doctor appointments online and get your ailments treated in no
            time with our expert medical support systems. Get rid of all your
            medical problem with our expert panel of doctors who guide you
            towards a healthier life.
          </p>

          <div className="number-input-container">
            <input
              type="tel"
              className="form-input"
              placeholder="+91 Enter Your Number"
              required
            />
            <button type="button" className="btn btn-primary">
              <AiFillPhone />
            </button>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="row gap-2  footer-right-side-container">
            <ul className="col-3">
              <h2>Services</h2>
              <li>lab tests</li>
              <li>A-Z medicines</li>
              <li>Doctor support</li>
            </ul>

            <ul className="col-4">
              <h2>Legal</h2>
              <li>General info</li>
              <li>Privacy policy</li>
              <li>Terms of services</li>
              <li>Consultation</li>
              <li>How it works</li>
            </ul>

            <ul className="col-4">
              <h2>Talk to us</h2>
              <li>support@notinline.com</li>
              <li>appointment@notinline.com</li>
              <li className="footer-tell-number">+91 12345 67899</li>
              <li>+91 97642 09752</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <hr
        style={{
          color: '#fff',
          backgroundColor: '#fff',
          border: 'solid 2px #fff',
        }}
      />
      <p className="footer-copyright-text">
        <AiOutlineCopyrightCircle /> <span>2021-2023 All Rights Reserved</span>
      </p>
    </div>
  </footer>
)

export default Footer
