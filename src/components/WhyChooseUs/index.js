import {BsArrowDownShort} from 'react-icons/bs'
import './index.css'

const WhyChooseUs = () => (
  <>
    <h3 className="top-packages">
      Why
      <span style={{color: '#138ed1 '}}> choose </span>
      us ?
    </h3>

    <p className="top-packages-description">
      We want you and your heart to be healthy so you can live a happy life!
    </p>

    <div className="container why-choose-us-bottom-container2">
      <div className="row gap-1">
        <div className="col-12 col-md-8">
          <div className="row gap-3">
            <div className="col-12  col-md-5 d-flex flex-row flex-md-column justify-content-between why-choose-us-card">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-TitEZjxu35cgoF_7qGBlcnO-Bj6Z7TxH84uIzaLCcuSy2hMD"
                className="why-choose-us-img-logo"
                alt=""
              />
              <h2>NABL Accredited Labs</h2>
              <p className="each-card-MRP-text d-none d-md-block">
                Get accurate and safe results from our NABL-certified lab
                partners.
              </p>
              <BsArrowDownShort className="d-md-none" />
            </div>

            <div className="col-12 gap-2 col-md-5 d-flex flex-row flex-md-column justify-content-between why-choose-us-card">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnQ1tjSsFk6QOoXkTJ2DOx8ksMbB-QHpeGb0gWu2HucL0emYeu"
                className="why-choose-us-img-logo"
                alt=""
              />
              <h2>Value experience</h2>
              <p className="each-card-MRP-text d-none d-md-block">
                Experience seamless care without the hassle of waiting in long
                lines for an appointment. Book with us for a
                healthier lifestyle.
              </p>
              <BsArrowDownShort className="d-md-none" />
            </div>

            <div className="col-12 gap-2 col-md-5 d-flex flex-row flex-md-column justify-content-between why-choose-us-card">
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7HzGmTm_vi5KL0noYMe1RECstB6evtS5e2HCyron_wRCOFmsg"
                className="why-choose-us-img-logo"
                alt=""
              />
              <h2>Timely collections</h2>
              <p className="each-card-MRP-text d-none d-md-block">
                We collect samples timely to prevent treatment delays and ensure
                your continued well-being.
              </p>
              <BsArrowDownShort className="d-md-none" />
            </div>

            <div className="col-12 gap-2 col-md-5 d-flex flex-row flex-md-column justify-content-between why-choose-us-card">
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTc5qpGzNV5sZBRi5P_s3WwEC_FGcqTRDCA1up3V_eABkJhGkqE"
                className="why-choose-us-img-logo"
                alt=""
              />
              <h2>Transparency</h2>
              <p className="each-card-MRP-text d-none d-md-block">
                Enjoy hassle free medical assistance with our transparent
                approach. We prioritize transparency for your smooth
                medical journey.
              </p>
              <BsArrowDownShort className="d-md-none" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 position-md-relative text-align-center">
          <img
            src="img/expressive-young-woman-posing-studio-removebg-preview-transformed 1.png"
            alt=""
            className="img-position"
          />
        </div>
      </div>
    </div>
  </>
)

export default WhyChooseUs
