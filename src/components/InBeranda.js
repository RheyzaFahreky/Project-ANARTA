import { Col, Container, Row, Button } from 'react-bootstrap'

const InBeranda = () => {
    return (
        <div className="introBeranda">
        <Container className="text-white d-flex justify-content-center 
        align-items-center">
            <Row>
            <Col>
                <div className="introButton mt-4">
                <Button variant="warning">Terfavorit</Button>{' '}
                </div>
                <div className="titleBeranda">Payung Fantasi</div>
                <div>Payung Fantasi - Episode 1</div>
                <div>Drama Musikal</div>
            </Col>
            </Row>
        </Container>
        </div>
    )
}

export default InBeranda