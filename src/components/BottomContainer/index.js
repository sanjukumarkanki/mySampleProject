import {GrUserManager, GrLocation, GrPhone} from 'react-icons/gr'
import './index.css'

const BottomContainer = () => (
  <div className="top-bg-container container-fluid">
    <div className="row gap-2">
      <div className="col-12 col-md-5 ">
        <p className="form-offer-container d-md-none">
          Get Full Body Check up Now at
        </p>
        <p className="form-offer-container2  d-md-none">
          <span className="each-card-discount-text  text-white">
            &#8377; 5,999
          </span>
          &#8377; 999 70% OFF
        </p>
        <form className=" pl-5 pr-5 pt-5 pb-5">
          <div className="top-form-input-container">
            <span>
              <GrUserManager />
            </span>
            <input
              className="input-box"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="top-form-input-container">
            <span>
              <GrPhone />
            </span>
            <input
              className="input-box"
              type="tel"
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="top-form-input-container">
            <span>
              <GrLocation />
            </span>
            <input
              className="input-box"
              type="text"
              required
              placeholder="Location"
            />
          </div>

          <div className="top-form-input-container">
            <input type="checkbox" />
            <span className="form-description-1">
              By continuing, you agree to our T&C and privacy policy
            </span>
          </div>

          <button type="button" className="btn btn-primary i-button">
            Procced
          </button>
        </form>

        <div className="form-offer-container3  d-md-block d-none">
          <span className="top-offer-sub-text">
            Get Full Body Check up Now at
          </span>
          <span className=""> &#8377; 999 70% OFF</span>
        </div>
      </div>

      <div className="col-12 col-md-6 order-1 order-md-2 d-flex flex-column justify-content-start align-items-center position-relative">
        <h1 className="best-in-class-container">
          Best in class <span>lab tests!</span>
        </h1>
        <img
          src="img/workingwomen.png"
          className="top-women-image d-none d-md-inline"
          alt=""
        />
      </div>
    </div>
  </div>
)

export default BottomContainer
