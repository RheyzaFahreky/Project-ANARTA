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
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


const ProsesBeli = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(true);
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
            <div className="pesanan">
            <button className="btn-pesanan" onClick={() => navigate('/Checkout') }>Buat Pesanan</button>
            </div>

            <div className="footerBG">
                <Footer />
            </div>
        </div>
    )
}

export default ProsesBeli