// Write your code here
import {useState} from 'react'
import './index.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import {BiLogoPlayStore} from 'react-icons/bi'

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false)
  return (
    <nav className="navbar">
      <div className="w-100 d-flex flex-col flex-sm-row justify-content-between align-items-center">
        <span className="nav-logo-container">
          <img
            src="img/NIL_logo_Transparent (1) 1.png"
            width="40%"
            alt="logo"
          />
          <img
            src="img/Screenshot_2023-07-25_165513-removebg-preview 1.png"
            width="60%"
            alt="logo text"
          />
        </span>
        {/* Hamburger Button Appears Only in Small devices */}
        <button
          className="d-md-none hamburger-button"
          type="button"
          onClick={() => setHamburger(!hamburger)}
        >
          <span>
            <GiHamburgerMenu className="navbar-toggler-icon" />
          </span>
        </button>

        <ul className="nav-group1 d-none d-md-flex">
          <li>Home</li>
          <li>Health conditions</li>
          <li className="nav-lab-text">Lab tests</li>
          <li>Medicines</li>
        </ul>

        <div className="d-none d-md-flex">
          <button
            type="button"
            className="btn btn-text btn-primary"
            style={{marginRight: '10px'}}
          >
            For patients
          </button>
          <button type="button" className="btn btn-text btn-primary">
            For hospitals
          </button>
        </div>

        <button
          type="button"
          className="btn d-none d-md-flex btn-text btn-dark btn-text"
        >
          <BiLogoPlayStore style={{marginRight: '10px'}} />
          <span>Playstore</span>
        </button>
      </div>

      {/* NavBar Expand Options Container Appears Only Below Medium devices */}
      <div className={hamburger ? 'lab-tests-parent' : 'd-md-none d-none'}>
        <p className="home">Home</p>
        <p className="nav-lab-text">Lab tests</p>
        <p className="home">Health conditions</p>
        <div className="medicines">Medicines</div>

        <button
          type="button"
          className="btn btn-primary btn-text w-75 mt-3 mb-3"
        >
          For patients
        </button>

        <button type="button" className="btn btn-primary btn-text w-75 mb-3">
          For hospitals
        </button>

        <button type="button" className="btn btn-dark btn-text w-75 mb-3">
          <BiLogoPlayStore style={{marginRight: '10px'}} />
          <span>Playstore</span>
        </button>
      </div>
      {/* Navbar Extra Appears Only Above Small Devices */}
    </nav>
  )
}

export default Navbar
