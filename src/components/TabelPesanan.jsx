import { useNavigate } from "react-router-dom"
import  {Table,Container}  from 'react-bootstrap'
import mps2 from '../assets/images/mps2.png'

const TabelPesanan = () => {
    const navigate = useNavigate()
    return(
        <div className="tabelpesanan">
            <h3 className="detail text-white">Detail Pesanan</h3>
            <table>
                <thead>
                    <tr>
                    <th></th>
                    <th></th>
                    <th scope="col">Produk</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Jumlah</th>
                    <th scope="col">SubTotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th className="text-center"><svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512"><path fill="#d9d9d9" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg></th>
                    <th scope="row"><img src={mps2} alt="" className="mpstiket" /></th>
                    <td className="produk">Studio 1 : Roro Jonggrang</td>
                    <td className="hargatiket">Rp. 50.000</td>
                    <td>
                        <div className="jumlah">
                            <button className="kurang">-</button>
                            <div className="quantity">2</div>
                            <button className="tambah">+</button>
                        </div>
                    </td>
                    <td className="total-harga text-start">Rp. 100.000</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                    <th></th>
                    <th scope="row" colspan="2"><input className="kupon" type="text" placeholder="CONTOH : KUPON50"/><button className="btn-kupon">TERAPKAN KUPON</button></th>
                    <td ></td>
                    <td></td>
                    <td></td>
                    </tr>
                </tfoot>
                </table>
        </div>
    )
}

export default TabelPesanan