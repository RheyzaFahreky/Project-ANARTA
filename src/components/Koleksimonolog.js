import { Card, Container, Row, Col, Image } from "react-bootstrap"
import tresnaImage from"../assets/images/koleksi monolog/tresna asih ing duka.png"
import teatermusikalImage from"../assets/images/koleksi monolog/teater musikal.png"
import wayangteaterImage from"../assets/images/koleksi monolog/wayang teater.png"
import payungfantasiImage from"../assets/images/koleksi monolog/payung fantasi.png"

const KoleksiMonolog = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 classname="text-white">Koleksi Monolog</h1>
                <br />
                <Row>
                    <Col md={2} className="musikalWrapper" id="beranda"> 
                        <Card className="musikalImage">
                            <Image src={tresnaImage} alt="Musikal Petualangan Sherina" classname="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title>Tresna Asih Ing Duka</Card.Title>
                                    <Card.Text className="text-left">
                                        Fragmentari - KMHD Unram
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={2} className="musikalWrapper"> 
                        <Card className="musikalImage">
                            <Image src={teatermusikalImage} alt="Musikal Petualangan Sherina" classname="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title>Musikal Petualangan Sherina</Card.Title>
                                    <Card.Text className="text-left">
                                        Teater Musikal - Jakarta Movin
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={2} className="musikalWrapper"> 
                        <Card className="musikalImage">
                            <Image src={wayangteaterImage} alt="Musikal Petualangan Sherina" classname="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title>Wayang Garok</Card.Title>
                                    <Card.Text className="text-left">
                                        Teater - Teater Taat
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={2} className="musikalWrapper"> 
                        <Card className="musikalImage">
                            <Image src={payungfantasiImage} alt="Musikal Petualangan Sherina" classname="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title>Payung Fantasi</Card.Title>
                                    <Card.Text className="text-left">
                                        Drama Musikal - Indonesia Kaya
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default KoleksiMonolog