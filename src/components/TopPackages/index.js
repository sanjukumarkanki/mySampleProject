import {BsFillStarFill} from 'react-icons/bs'
import WhyChooseUs from '../WhyChooseUs'
import './index.css'

const TopPackages = () => (
  <div className="top-packages-section p-2">
    <div className="top-packges-section-each-item">
      <h3 className="top-packages">
        Top
        <span style={{color: '#138ed1 '}}> packages</span>
      </h3>
      <p className="top-packages-description">
        Explore our wide range of tests! We ensure that you don’t miss out on
        any chance to keep yourself healthy.
      </p>
    </div>

    <div className="container">
      <div className="row gap-4 position-relative top-packages-cards-container">
        <div className="col-12 col-md-3 d-flex flex-column justify-content-start align-items-start">
          <h3 className="basic-full-body-checkup-card">
            Basic Full body Chekup
          </h3>

          <div className="d-flex flex-row justify-content-center align-items-center gap-3 ">
            <span className="each-card-rating">4.3</span>
            <span className="each-card-star-icon">
              <BsFillStarFill />
            </span>
            <span className="each-card-reviews"> (75 Reviews)</span>
          </div>

          <p className="number-of-test-text">Number of tests - 53</p>

          <div className="d-flex flex-row justify-content-center align-items-center gap-3 ">
            <span className="each-card-MRP-text">MRP: </span>
            <span className="each-card-discount-text">&#8377; 12,000</span>
            <span className="each-card-discount-text1">&#8377; 10,000</span>
          </div>
          <br />
          <br />
          <button type="button" className="btn bookNow-button">
            Book Now
          </button>
        </div>

        <div className="col-12 col-md-3 d-flex flex-column justify-content-start align-items-start">
          <h3 className="basic-full-body-checkup-card">
            Advance Full Body Checkup
          </h3>

          <div className="d-flex flex-row justify-content-center align-items-center gap-3 ">
            <span className="each-card-rating">4.7</span>
            <span className="each-card-star-icon">
              <BsFillStarFill />
            </span>
            <span className="each-card-reviews"> (100 Reviews)</span>
          </div>

          <p className="number-of-test-text">Number of tests - 70</p>

          <div className="d-flex flex-row justify-content-center align-items-center gap-3 ">
            <span className="each-card-MRP-text">MRP: </span>
            <span className="each-card-discount-text">&#8377; 12,000</span>
            <span className="each-card-discount-text1">&#8377; 10,000</span>
          </div>
          <br />
          <br />
          <button type="button" className="btn bookNow-button">
            Book Now
          </button>
        </div>

        <div className="col-12 col-md-3 d-flex flex-column justify-content-start align-items-start">
          <h3 className="basic-full-body-checkup-card">
            Liver Function Test (LFT)
          </h3>

          <div className="d-flex flex-row justify-content-center align-items-center gap-3 ">
            <span className="each-card-rating">4.3</span>
            <span className="each-card-star-icon">
              <BsFillStarFill />
            </span>
            <span className="each-card-reviews"> (43 Reviews)</span>
          </div>

          <p className="number-of-test-text">Number of tests - 89</p>

          <div className="d-flex flex-row justify-content-center position-relative align-items-center gap-3 ">
            <span className="each-card-MRP-text">MRP: </span>
            <span className="each-card-discount-text">&#8377; 13,299</span>
            <span className="each-card-discount-text1">&#8377; 11,299</span>
          </div>
          <br />
          <br />
          <button type="button" className="btn bookNow-button">
            Book Now
          </button>
        </div>
      </div>
    </div>
    <WhyChooseUs />
  </div>
)

export default TopPackages
