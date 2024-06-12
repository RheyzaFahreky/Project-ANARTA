import "../style/Tiket.css"
import "../style/Dashboard.css"
import "../style/TiketSemua.css"
import "../style/DetailPesanan.css"
import "../style/ProsesBeli.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProgresBar2 from "../components/ProgresBar2"
import DetailPembayaran from "../components/DetailPembayaran"
import TiketBeli from "../components/TiketBeli"
import { useNavigate } from "react-router-dom"


const Checkout = () => {
    const navigate = useNavigate()
    return(
        <div className="detailBG">
            <Navbar />
            <ProgresBar2 />
            <main className="main-content">
            <DetailPembayaran />

                <aside className="side">
                <TiketBeli />
                </aside>
            </main>
            <div className="pesanan">
            <button className="btn-pesanan" onClick={() => navigate('/Tiket') }>Kembali</button>
            </div>

            <div className="footerBG">
                <Footer />
            </div>
        </div>
    )
}

export default Checkout