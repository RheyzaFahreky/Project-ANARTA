import './App.css'
import NavigationBar from "./components/NavigationBar"
import Intro from './components/Intro'
import Koleksiterkini from "./components/Koleksiterkini"
import Koleksiterfavorit from "./components/Koleksiterfavorit"
import Koleksimonolog from "./components/Koleksimonolog"

import "./style/landingPage.css"


function App() {
  return (
    <div className="bg-dark">
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="koleksi terkini">
        <Koleksiterkini/>
      </div>

      <div classname="koleksi terfavorit">
        <Koleksiterfavorit/>
      </div>

      <div classname="koleksi monolog">
        <Koleksimonolog/>
      </div>
    </div>
  )
}

export default App