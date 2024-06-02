import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">ANARTA</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#KoleksiTerfavorit">BERANDA</Nav.Link>
                        <Nav.Link>TEATER</Nav.Link>
                        <Nav.Link>TIKET</Nav.Link>
                        <Nav.Link>KALENDER PEMENTASAN</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar