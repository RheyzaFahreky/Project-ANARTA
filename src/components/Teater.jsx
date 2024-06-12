import mps from "../assets/images/mps.png"
import teater2 from "../assets/images/teater2.png"
import teater3 from "../assets/images/teater3.png"
import {Image,Carousel} from 'react-bootstrap'



const Teater = () => {
    return (
        <div>
            <Carousel data-bs-theme="white">
                <Carousel.Item>
                    <img
                    className="teater d-block"
                    src={mps}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="teater d-block"
                    src={teater2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="teater d-block"
                    src={teater3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Teater