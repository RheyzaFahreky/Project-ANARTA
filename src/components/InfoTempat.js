import { Container, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


const InfoTempat = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1 className="nama-acara text-white text-center">Musikal Roro Jonggrang</h1>
            <div className="rincian-info text-white">
            <p><svg xmlns="http://www.w3.org/2000/svg" height="35" width="34.5" viewBox="0 0 384 512"><path fill="#c65414" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> Gd. Teater Taman Ismail Marzuki</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="40" width="34.5" viewBox="0 0 640 512"><path fill="#c65414" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg> Remaja-Dewasa</p>
            </div>
                <Container className="container-tempat">
                    <div className="isi-info">
                        <h2>INFORMASI</h2>
                        <h2>TIKET</h2>
                            <div className="informasi-tayang text-white">
                            <p>Durasi Pertunjukan 2 Jam 30 Menit</p>
                            <p className="harga-tiket">Rp.50.000</p>
                            </div>                
                    </div>

                    <Row className="row-tempat mt-3">
                        <Col className="col-tempat text-dark">
                            <h1 className="no-studio">1</h1>
                            <p className="tgl pt-2 text-center">JUNI 2024</p>
                            <h2 className="nama-studio pt-2">Show 1: Roro Jonggrang</h2>
                            <p className="jam-tayang pt-3">14:30</p>
                            <button className="btn-status" onClick={() => navigate ('/DetailPesanan')}>Tersedia</button>
                        </Col>
                    </Row>
                    <br />
                    <Row className="row-tempat">
                        <Col className="col-tempat text-dark">
                            <h1 className="no-studio">1</h1>
                            <p className="tgl pt-2 text-center">JUNI 2024</p>
                            <h2 className="nama-studio pt-2">Show 2: Roro Jonggrang</h2>
                            <p className="jam-tayang pt-3">19:00</p>
                            <button className="btn-status-habis">Habis</button>
                        </Col>
                    </Row>
                    <br />
                    <Row className="row-tempat">
                        <Col className="col-tempat text-dark">
                            <h1 className="no-studio">2</h1>
                            <p className="tgl pt-2 text-center">JUNI 2024</p>
                            <h2 className="nama-studio pt-2">Show 1: Roro Jonggrang</h2>
                            <p className="jam-tayang pt-3">14:30</p>
                            <button className="btn-status">Tersedia</button>
                        </Col>
                    </Row>
                    <br />
                    <Row className="row-tempat">
                        <Col className="col-tempat text-dark">
                            <h1 className="no-studio">2</h1>
                            <p className="tgl pt-2 text-center">JUNI 2024</p>
                            <h2 className="nama-studio pt-2">Show 2: Roro Jonggrang</h2>
                            <p className="jam-tayang pt-3">19:00</p>
                            <button className="btn-status">Tersedia</button>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default InfoTempat