import {Container, Row, Col} from "react-bootstrap"
import reza2 from "../assets/images/reza2.png";
import celsi2 from "../assets/images/celsi2.png";
import dian2 from "../assets/images/dian2.png";
import { useNavigate } from "react-router-dom";

const Mulai = () => {
    const navigate = useNavigate()
    return(
        <div>
            <h3 className="tittle5 text-center pt-5">Kata Mereka Tentang Anarta Nusantara</h3>
            <Container className="container">
                <Row className="text-center pt-5">
                    <Col className="d-flex justify-content-center align-items-center">
                        <div>
                            <img className="celsi rounded-top-3" src={celsi2} />
                                <div className="card-body3 rounded-bottom-3 text-white">
                                <p>“Menurut saya budaya Teater Sangat Penting Untuk Promosikan agar Mendunia”</p>
                                </div>
                                <h3 className="Nama3">Chelsea Islan</h3>
                                <p className="Profesi3">Aktris</p>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <div>
                            <img className="reza rounded-top-3" src={reza2} />
                                <div className="card-body2 rounded-bottom-3 text-black">
                                <p>“Menurut saya budaya Teater Sangat Penting Untuk Promosikan agar Mendunia”</p>
                                </div>
                                <h3 className="Nama2">Reza Rahardian</h3>
                                <p className="Profesi2">Aktor Teater</p>
                            </div>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <div>
                            <img className="dian rounded-top-3" src={dian2} />
                                <div className="card-body3 rounded-bottom-3 text-white">
                                <p>“Menurut saya budaya Teater Sangat Penting Untuk Promosikan agar Mendunia”</p>
                                </div>
                                <h3 className="Nama3">Dian Sastro</h3>
                                <p className="Profesi3">Aktris</p>
                            </div>
                    </Col>
                </Row>  
            </Container>
            <div className="foot text-center">
                <h2 className="siap">Siap Menikmati Pertunjukan?</h2>
                <button onClick={() => navigate('/Register')} type="submit" class="mulai text-white">Daftar Akun</button>
            </div>
        </div>
    )
}

export default Mulai