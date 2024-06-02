import { Card, Container, Row, Col, Image } from "react-bootstrap"
import teatermusikalImage from"../assets/images/koleksi terfavorit/teater musikal.png"
import wayangImage from"../assets/images/koleksi terfavorit/wayang.png"
import dramamalinImage from"../assets/images/koleksi terfavorit/drama malin.png"
import payungfantasiImage from"../assets/images/koleksi terfavorit/payung fantasi.png"

const KoleksiTerfavorit = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 classname="text-white">Koleksi Terfavorit</h1>
                <br />
                <Row>
                    <Col md={2} className="musikalWrapper" id="beranda"> 
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
                            <Image src={wayangImage} alt="Musikal Petualangan Sherina" classname="images"/>
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
                    <Col md={2} className="musikalWrapper"> 
                        <Card className="musikalImage">
                            <Image src={dramamalinImage} alt="Musikal Petualangan Sherina" classname="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title>Payung Fantasi</Card.Title>
                                    <Card.Text className="text-left">
                                        Drama Musikal - Indonesia
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
                                    <Card.Title>Musikal Petualangan Sherina</Card.Title>
                                    <Card.Text className="text-left">
                                        Teater Musikal - Jakarta Movin
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

export default KoleksiTerfavorit