import "../style/Tiket.css"
import "../style/Dashboard.css"
import "../style/TiketSemua.css"
import "../style/DetailPesanan.css"
import "../style/ProsesBeli.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProgresBar1 from "../components/ProgresBar1"
import DetailPembayaran from "../components/DetailPembayaran"
import TiketBeli from "../components/TiketBeli"


const ProsesBeli = () => {
    return(
        <div className="detailBG">
            <Navbar />
            <ProgresBar1 />
            <main className="main-content">
            <DetailPembayaran />

                <aside className="side">
                <TiketBeli />
                </aside>
            </main>
        </div>
    )
}

export default ProsesBeli