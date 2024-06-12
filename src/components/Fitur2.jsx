import {Container, Row, Col} from "react-bootstrap"
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import pic3 from "../assets/images/pic3.png";


const Fitur2 = () => {
    return(
        <div className="fitur2">
            <Container className="d-flex justify-content-center align-items-center text-start">
                <Row className="desc-fitur2 ms-5 ps-5 me-5">
                    <Col className="ms-5">
                        <h2 className="tittle3">Mengenal Lebih </h2>  
                        <h2 className="tittle3">Banyak Pertunjukan </h2>  
                        <h2 className="tittle3">Karya Anak Bangsa</h2>  
                        <p className="text3">Tersedia Mulai Dari Monolog, Teater Lakon, Teater Musikal, Drama Musikal, Dll.</p>
                    </Col>
                </Row>
                <Row className="mx-5">
                    <Col className=" text-center">
                        <div className="imgaktor"><img src={pic1} alt="aktor" className="aktor" /></div> 
                        <h6 className="judul-aktor">Jakarta Movin</h6>
                        <p className="isi-aktor">Sebuah grup teater asal jakarta yang aktif dibidang musikal.</p>
                    </Col>
                </Row>
            </Container>
            <Container className="d-flex justify-content-start ms-5 pic2">
                <Row>
                    <Col>
                    <div className="imgaktor2"><img src={pic2} alt="aktor" className="aktor2" /></div>
                    </Col>
                    <Col className="mx-5 mt-5 aktor3">
                    <div className="imgaktor3"><img src={pic3} alt="aktor"/></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Fitur2;