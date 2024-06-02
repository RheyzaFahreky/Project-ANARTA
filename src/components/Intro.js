import { Col, Container, Row, Button } from 'react-bootstrap'

const Intro = () => {
    return (
        <div className="intro">
          <Container className="text-white d-flex justify-content-center 
          align-items-center">
            <Row>
              <Col>
                <div className="introButton mt-4">
                <Button variant="warning">Terfavorit</Button>{' '}
                </div>
                <div className="title">Payung Fantasi</div>
                <div>Payung Fantasi - Episode 1</div>
                <div>Drama Musikal</div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro