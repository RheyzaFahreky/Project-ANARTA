import "../style/Tiket.css"
import "../style/Dashboard.css"
import "../style/TiketSemua.css"
import "../style/DetailPesanan.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import TabelPesanan from "../components/TabelPesanan"
import ProgresBar from "../components/ProgresBar"
import Keranjang from "../components/Keranjang"

const DetailPesanan = () => {
    return (
        <div className="detailBG">
            <Navbar/>
            <ProgresBar />
            <TabelPesanan />
            <Keranjang/>

            <div className="footerBG">
                <Footer />
            </div>
        </div>
    )
}

export default DetailPesanan