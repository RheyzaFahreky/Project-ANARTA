import NavigationBar from "../components/NavigationBar";
import Intro from "../components/Intro";
import Fitur from "../components/Fitur";
import Fitur2 from "../components/Fitur2";
import Akses from "../components/Akses";
import Mulai from "../components/Mulai";
import Footer from "../components/Footer";
import "../style/Dashboard.css"


const Dashboard = () => {
    return (
    <div>
        {/* ---Header Section--- */}
        <div className="myBG">
            <NavigationBar />
            <Intro />
        </div>
        {/* ---End Header Section--- */}

        {/* ---Content--- */}
        <div className="secBG">
            <Fitur />
        </div>
        <div className="thirdBG">
            <Fitur2 />
        </div>
        <div className="fourthBG">
            <Akses />
        </div>
        <div className="lastBG">
            <Mulai />
        </div>
        {/* ---End Content--- */}

        {/* ---Footer--- */}
        <div className="footerBG">
            <Footer />
        </div>
        {/* ---End Footer--- */}
      
    </div>
    )
}

export default Dashboard