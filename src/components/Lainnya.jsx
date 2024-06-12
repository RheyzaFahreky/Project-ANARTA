import { Container,Row,Col } from "react-bootstrap"
import bawang from "../assets/images/bawang.png"
import { useNavigate } from "react-router-dom"

const Lainnya = () => {
    const navigate = useNavigate()
    return(
        <div>
            <div className="Lain">
            <h2 className="text-center mt-5 text-white">Explore Teater di Berbagai Wilayah Indonesia</h2>
                <Container className="d-flex justify-content-center align-items-center">
                    <Row>
                        <Col>
                        <div className="ada pt-5 px-5">
                            <img className="bawang text-center rounded-top-3" src={bawang} />
                                <div className="card-lainnya rounded-bottom-3 text-white">
                                <p className="jadwal text-dark"><svg xmlns="http://www.w3.org/2000/svg" height="15" width="12" viewBox="0 0 384 512"><path fill="#000" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> Jakarta <br />
                                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#000" d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg> 15 Mei, 2024
                                <svg className="clock" xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#000" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg> 12.00 WIB</p>
                                <h4 className="judul-teater text-dark">Bawang Bombay dan Si Lebay</h4>
                                <Col className="Info">
                                    <p className="tiket-2">Tiket habis</p>
                                    <p className="info-harga-2 text-end text-dark"><span>Harga </span><br />
                                    <p className="harga-2">Rp.25.000</p></p>
                                </Col>
                                </div>
                        </div>
                        </Col>
                        <Col>
                        <div className="ada pt-5 px-5 ">
                            <img className="bawang rounded-top-3" src={bawang} />
                                <div className="card-lainnya rounded-bottom-3 text-white">
                                <p className="jadwal text-dark"><svg xmlns="http://www.w3.org/2000/svg" height="15" width="12" viewBox="0 0 384 512"><path fill="#000" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> Jakarta <br />
                                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#000" d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg> 15 Mei, 2024
                                <svg className="clock" xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#000" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg> 12.00 WIB</p>
                                <h4 className="judul-teater text-dark">Bawang Bombay dan Si Lebay</h4>
                                <Col className="Info">
                                    <p className="tiket-2">Tiket habis</p>
                                    <p className="info-harga-2 text-end text-dark"><span>Harga </span><br />
                                    <p className="harga-2">Rp.25.000</p></p>
                                </Col>
                                </div>
                        </div>
                        </Col>
                        <Col>
                        <div className="ada pt-5 px-5">
                            <img className="bawang rounded-top-3" src={bawang} />
                                <div className="card-lainnya rounded-bottom-3 text-white">
                                <p className="jadwal text-dark"><svg xmlns="http://www.w3.org/2000/svg" height="15" width="12" viewBox="0 0 384 512"><path fill="#000" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> Jakarta <br />
                                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path fill="#000" d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg> 15 Mei, 2024
                                <svg className="clock" xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path fill="#000" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg> 12.00 WIB</p>
                                <h4 className="judul-teater text-dark">Bawang Bombay dan Si Lebay</h4>
                                <Col className="Info">
                                    <p className="tiket-2">Tiket habis</p>
                                    <p className="info-harga-2 text-end text-dark"><span>Harga </span><br />
                                    <p className="harga-2">Rp.25.000</p></p>
                                </Col>
                                </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
                <div className="btn d-flex justify-content-center align-items-center">
                    <button className="btn-lain" onClick={() => navigate ('/TiketSemua')}>Lihat Lebih Banyak</button>
                </div>
            </div>
        </div>
    )
}

export default Lainnya