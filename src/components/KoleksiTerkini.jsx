import {Container, Row, Col} from "react-bootstrap"
import sherina from '../assets/images/koleksi terkini/sherina.png'
import wayang from '../assets/images/koleksi monolog/wayanggarok.png'
import malin from '../assets/images/koleksi terkini/malin kundang.png'
import payung from '../assets/images/koleksi terkini/musikal.png'
import { useNavigate } from "react-router-dom"
import "../style/Beranda.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const KoleksiTerkini = () => {
    const navigate = useNavigate ()
    return (
        <div>
            <h1 className="vidCat text-white">Koleksi Terkini <svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 320 512"><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg> </h1>
            <Carousel responsive={responsive} className="vidSlider">
              <div>
                <img src={sherina} alt="" className="vidPict"/>
                <div className="vidText text-white">
                  <h4>Musikal Petualangan Sherina</h4>
                  <p>Teater Musikal - Jakarta Movin</p>
                </div>
              </div>

              <div>
              <img src={malin} alt="" className="vidPict"/>
                <div className="vidText text-white">
                  <h4>Malin Kundang</h4>
                  <p>Drama Musikal - Indonesia Kaya</p>
                </div>
              </div>

              <div>
              <img src={payung} alt="" className="vidPictPayung" onClick={() => navigate('/PlayerVid')}/>
                <div className="vidText text-white">
                  <h4>Payung Fantasi</h4>
                  <p>Drama Musikal - Indonesia Kaya</p>
                </div>
              </div>

              <div>
              <img src={wayang} alt="" className="vidPict"/>
                <div className="vidText text-white">
                  <h4>Wayang Garok</h4>
                  <p>Teater - Teater Taat</p>
                </div>
              </div>
            </Carousel>;
            <Carousel responsive={responsive} className="vidSlider">
              <div>
                <img src={sherina} alt="" className="vidPict"/>
                <div className="vidText text-white">
                  <h4>Musikal Petualangan Sherina</h4>
                  <p>Teater Musikal - Jakarta Movin</p>
                </div>
              </div>

              <div>
              <img src={malin} alt="" className="vidPict"/>
                <div className="vidText text-white">
                  <h4>Malin Kundang</h4>
                  <p>Drama Musikal - Indonesia Kaya</p>
                </div>
              </div>

              <div>
              <img src={payung} alt="" className="vidPictPayung"/>
                <div className="vidText text-white">
                  <h4>Payung Fantasi</h4>
                  <p>Drama Musikal - Indonesia Kaya</p>
                </div>
              </div>

              <div>
              <img src={wayang} alt="" className="vidPict"/>
                <div className="vidText text-white">
                  <h4>Wayang Garok</h4>
                  <p>Teater - Teater Taat</p>
                </div>
              </div>
            </Carousel>;
        </div>
    )
}

export default KoleksiTerkini