import { Container, Table, Row, Col, NavItem } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Keranjang = () => {

    const navigate = useNavigate()
    return(
        <div className="keranjang text-white">
            <div className="head text-center"><h1 className="text-center">Total Keranjang</h1>
            <h1>Belanja</h1></div>
                <div className="body">
                    <table>
                        <tr>
                            <td className="objek border-end border-bottom">Subtotal :</td>
                            <td className="objek border-bottom">Rp.100.000</td>
                        </tr>
                        <tr>
                            <td className="objek border-end border-bottom">Pajak10% :</td>
                            <td className="objek border-bottom">Rp.10.000</td>
                        </tr>
                        <tr>
                            <td className="objek border-end border-bottom">Total :</td>
                            <td className="objek border-bottom">Rp.110.000</td>
                        </tr>
                    </table>
                </div>
                <div className="mt-3 text-center">
                <button onClick={() => navigate ('/ProsesBeli')} className="mb-3 btn-lanjut">Lanjutkan Pembayaran</button>
                </div>
        </div>
    )
}

export default Keranjang