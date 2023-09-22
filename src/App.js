import {Component} from 'react'

import Navbar from './components/Navbar'
import BottomContainer from './components/BottomContainer'
import WekeepExpanding from './components/WekeepExapnding'
import TopPackages from './components/TopPackages'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="bg-white">
        <Navbar />
        <BottomContainer />
        <WekeepExpanding />
        <TopPackages />
        <Footer />
      </div>
    )
  }
}

export default App
