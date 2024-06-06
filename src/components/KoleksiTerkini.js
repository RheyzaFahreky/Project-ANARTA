import { Card, Container, Row, Col, Image } from "react-bootstrap"
import sherinaImage from"../assets/images/koleksi terkini/sherina.png"
import malinkundangImage from"../assets/images/koleksi terkini/malin kundang.png"
import musikalImage from"../assets/images/koleksi terkini/musikal.png"
import wayanggarokImage from"../assets/images/koleksi terkini/wayang garok.png"
import { useNavigate } from "react-router-dom"

const KoleksiTerkini = () => {
    const navigate = useNavigate ()
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">Koleksi Terkini</h1>
                <br />
                <Row>
                    <Col md={3} className="musikalWrapper" id="beranda"> 
                        <Card className="musikalImage">
                            <Image src={sherinaImage} alt="Musikal Petualangan Sherina" classname="images"/>
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
                    <Col md={3} className="musikalWrapper"> 
                        <Card className="musikalImage">
                            <Image src={malinkundangImage} alt="Musikal Petualangan Sherina" classname="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title>Malin Kundang</Card.Title>
                                    <Card.Text className="text-left">
                                        Drama Musikal - Indonesia Kaya
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col onClick={() => navigate('/PlayerVid')} md={3} className="musikalWrapper"> 
                        <Card className="musikalImage">
                            <Image src={musikalImage} alt="Musikal Petualangan Sherina" classname="images"/>
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
                    <Col md={2} className="musikalWrapper"> 
                        <Card className="musikalImage">
                            <Image src={wayanggarokImage} alt="Musikal Petualangan Sherina" classname="images"/>
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
                    <Col md={3} className="musikalWrapper"> 
                        <Card className="musikalImage">
                            <Image src={sherinaImage} alt="Musikal Petualangan Sherina" classname="images"/>
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
                    <Col md={3} className="musikalWrapper"> 
                        <Card className="musikalImage">
                            <Image src={malinkundangImage} alt="Musikal Petualangan Sherina" classname="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title>Malin Kundang</Card.Title>
                                    <Card.Text className="text-left">
                                        Drama Musikal - Indonesia Kaya
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className="musikalWrapper"> 
                        <Card className="musikalImage">
                            <Image src={musikalImage} alt="Musikal Petualangan Sherina" classname="images"/>
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
                    <Col md={2} className="musikalWrapper"> 
                        <Card className="musikalImage">
                            <Image src={wayanggarokImage} alt="Musikal Petualangan Sherina" classname="images"/>
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
                </Row>
            </Container>
        </div>
    )
}

export default KoleksiTerkini