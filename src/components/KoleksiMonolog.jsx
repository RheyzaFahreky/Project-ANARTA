
import tresna from"../assets/images/koleksi monolog/tresna asih ing duka.png"
import teatermusikal from"../assets/images/koleksi terfavorit/teater musikal.png"
import wayangdrama from"../assets/images/koleksi terfavorit/wayang.png"
import dramawayang from"../assets/images/koleksi terfavorit/drama malin.png"
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

const KoleksiMonolog = () => {
    return (
      <div>
            <h1 className="vidCat text-white">Koleksi Terfavorit <svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 320 512"><path fill="#FFF" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg> </h1>
              <Carousel responsive={responsive} className="vidSlider">
                <div>
                  <img src={tresna} alt="" className="vidPict"/>
                  <div className="vidText text-white">
                    <h4>Tresna Asih Ing Duka</h4>
                    <p>Fragmentari - KMHD Unram</p>
                  </div>
                </div>

                <div>
                <img src={teatermusikal} alt="" className="vidPict"/>
                  <div className="vidText text-white">
                    <h4>Musikal Petualangan Sherina</h4>
                    <p>Teater Musikal - Jakarta Movin</p>
                  </div>
                </div>

                <div>
                <img src={wayangdrama} alt="" className="vidPict"/>
                  <div className="vidText text-white">
                    <h4>Wayang Garok</h4>
                    <p>Teater - Teater Taat</p>
                  </div>
                </div>

                <div>
                <img src={dramawayang} alt="" className="vidPict"/>
                  <div className="vidText text-white">
                    <h4>Payung Fantasi</h4>
                    <p>Drama Musikal - Indonesia Kaya</p>
                  </div>
                </div>
              </Carousel>
        </div>
    )
}

export default KoleksiMonolog