import "../style/Tiket.css"
import "../style/Dashboard.css"
import Navbar from "../components/Navbar"
import Teater from "../components/Teater"
import Searchbar from "../components/Searchbar"
import Rekomendasi from "../components/Rekomendasi"
import Penjualan from "../components/Penjualan"
import Lainnya from "../components/Lainnya"
import Footer from "../components/Footer"

const Tiket = () => {
    return(
    <div className="bodyBG">
        <div>
            <Navbar />
            <Teater />
            <Searchbar />
            <Rekomendasi />
            <Penjualan />
        </div>

        <div className="gradientBG">
            <Lainnya />
        </div>

        <div className="footerBG">
            <Footer />
        </div>


        
    </div>
    )
}

export default Tiket