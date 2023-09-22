import './index.css'

const WekeepExpanding = () => (
  <div className="wekeep-expanding-section-bg pt-5 pb-5">
    <div className="container">
      <div className="row d-flex text-center flex-column justify-content-center align-items-center">
        <ul className="col-12 col-md-6 wekeep-expanding-section-ul-contaiiner">
          <li>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-TitEZjxu35cgoF_7qGBlcnO-Bj6Z7TxH84uIzaLCcuSy2hMD"
              alt=""
            />
            <h3>NABL Accredited Labs</h3>
          </li>
          <li>
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRmvM6RPU2fTgHcy6e4r14ItyWJ_ikbeff6F8eN3obJlfoSD4pR"
              alt=""
            />
            <h3>NABL Accredited Labs</h3>
          </li>
        </ul>

        <h3 className="top-packages col-12">
          We keep
          <span style={{color: '#138ed1 '}}> expanding!</span>
        </h3>

        <ul className="row gap-4 mt-5 d-flex flex-row justify-content-center align-items-center we-expand-container-bottom-ul">
          <li className="col-5  col-md-3">
            <p className="we-keep-expanding-number-text">5+</p>
            <p className="we-keep-expanding-description-text">Labs</p>
          </li>
          <li className="col-5  col-md-3">
            <p className="we-keep-expanding-number-text">100%+</p>
            <p className="we-keep-expanding-description-text">
              Collection centers
            </p>
          </li>
          <li className="col-5  col-md-3">
            <p className="we-keep-expanding-number-text">1000+</p>
            <p className="we-keep-expanding-description-text">Monthly tests</p>
          </li>
          <li className="col-5  col-md-3">
            <p className="we-keep-expanding-number-text">2200</p>
            <p className="we-keep-expanding-description-text">Test menu</p>
          </li>
          <li className="col-5  col-md-3">
            <p className="we-keep-expanding-number-text">5+</p>
            <p className="we-keep-expanding-description-text">
              Cities present in
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default WekeepExpanding
