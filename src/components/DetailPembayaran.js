import { Container, Ro } from "react-bootstrap"


const DetailPembayaran = () => {
    return(
        <div className="met">
            <h1 className="text-white">Detail Pembayaran</h1>
            <div className="metode">
                <div>
                    <div className="opsi border">
                        <h3>Metode Pembayaran</h3>
                        <svg className="iconarow" xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 512 512"><path fill="#000000" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                    </div>
                    <div className="other">
                    <h4 className="apk">GoPay <svg xmlns="http://www.w3.org/2000/svg" height="10" width="10" viewBox="0 0 512 512"><path fill="#000000" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg></h4>
                    <h4 className="apk">OVO <svg className="iconarow1" xmlns="http://www.w3.org/2000/svg" height="10" width="10" viewBox="0 0 512 512"><path fill="#000000" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></h4>
                    <h4 className="apk">Dana <svg className="iconarow1" xmlns="http://www.w3.org/2000/svg" height="10" width="10" viewBox="0 0 512 512"><path fill="#000000" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></h4>
                    <h4 className="apk">Bank <svg className="iconarow1" xmlns="http://www.w3.org/2000/svg" height="10" width="10" viewBox="0 0 512 512"><path fill="#000000" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></h4>
                    </div>
                    <div className="nohp">
                        <h6>Nomor Handphone</h6>
                        <input type="text" placeholder="+62 85323527126" className="nohp-input" />
                    </div>
                    <div className="confirm text-end">
                    <button className="btn-confirm">Konfirmasi</button>
                    </div>
                </div>
            </div>
            <div className="data  text-white">
            <h1>Data Diri</h1>
            <div className="name">
                <h5>Nama</h5>
                <input type="text" placeholder="Nama Lengkap" className="input-name" />
            </div>
            <div className="email">
                <h5>Alamat Email</h5>
                <input type="text" placeholder="Alamat Email" className="input-email" />
            </div>
            <div className="Hp">
                <h5>Nomor Handphone</h5>
                <input type="text" placeholder="Nomor Aktif" className="input-Hp" />
            </div>
            <div className="lahir">
                <div className="umur">
                    <h5>Umur</h5>
                    <input type="text" placeholder="Umur" className="input-umur" />
                </div>
                <div className="tanggallahir">
                    <h5>Tempat Tanggal Lahir</h5>
                    <input type="text" placeholder="Tanggal/Bulan/Tahun" className="input-tgllahir" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPembayaran