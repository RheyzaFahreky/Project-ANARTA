import "../style/Tiket.css"
import "../style/Dashboard.css"
import "../style/TiketSemua.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SearchbarExpand from "../components/SearchbarExpand"
import InfoEvent from "../components/InfoEvent"


const TiketSemua = () => {
    return(
        <div className="bodyBG2"> 
            <div>
                <Navbar />
                <SearchbarExpand />
                <InfoEvent />
            </div>
            <div className="footerBG">
                <Footer />
            </div>
        </div>
    )
}

export default TiketSemua