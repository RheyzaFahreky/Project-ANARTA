import {Navbar, Container, Nav, } from "react-bootstrap"
import { CiGlobe } from "react-icons/ci";
import { useNavigate } from "react-router-dom";


const NavigationBar = () => {
    const navigate = useNavigate ()
    return(
    <div>
        <Navbar className="navbar">
            <Container>
                <Navbar.Brand><div className="brand">ANARTA</div></Navbar.Brand>
                <Nav>
                    <Nav.Link className="px-5 text-white"><div className="bahasa"><CiGlobe className="icons"/>Bahasa : Indonesia</div></Nav.Link>
                    <button onClick={() => navigate ('/Login')} className="btn-masuk text-white">Masuk</button>
                </Nav>
            </Container>
        </Navbar>
    </div>
    )
}

export default NavigationBar