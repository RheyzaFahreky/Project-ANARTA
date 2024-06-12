import {Container, Row, Col} from "react-bootstrap"
import laptop from "../assets/images/laptop.png";



const Fitur = () => {
    return(
        <div className="fitur">
            <Container className="d-flex justify-content-center align-items-center  text-start">
                <Row>
                    <Col>
                        <div className="imglaptop"><img src={laptop} alt="laptop" className="laptop" /></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="tittle2">Nikmati Pertunjukan Teater Dimanapun Kamu Berada</h2>
                        <p className="text2">Anarta Nusantara Streaming Video Teater Favoritmu!</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Fitur;