import "../style/Tiket.css"
import "../style/Dashboard.css"
import "../style/TiketSemua.css"
import "../style/Tempat.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import InfoTempat from "../components/InfoTempat"

const Tempat = () => {
    return(
        <div className="tempatBG">
            <Navbar />
            <InfoTempat />

            <div className="footerBG">
                <Footer />
            </div>
        </div>

    )
}

export default Tempat