import {Container, Row, Col, Form} from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Intro = () => {
    const navigate = useNavigate()
    return(
        <div className="intro">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <h1 className="tittle">Platform Lengkap Pertunjukan</h1>
                        <h1 className="tittle">Teater Indonesia</h1>
                        <Form>
                            <Form.Group className="mt-5 pe-5" controlId="exampleForm.ControlInput1">
                                <Form.Control className="input py-4" type="email" placeholder="Alamat Email/No. Telp" />
                            </Form.Group>
                        </Form>
                        <p className="text-start text">*Buat Akun</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <button onClick={() => navigate ('/Register')} className="daftar text-white">Daftar Akun</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro