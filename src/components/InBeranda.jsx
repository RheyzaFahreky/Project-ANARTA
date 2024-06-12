import { Carousel } from 'react-bootstrap'
import mps from '../assets/images/mpsgradient.png'
import musikal from '../assets/images/musikal.png'
import wayang from '../assets/images/wayanggarokgradient.png'


const InBeranda = () => {
    return (
        <div>
            <Carousel data-bs-theme="white">
                    <Carousel.Item interval={1000} className='gradientSlide'>
                        <img className="slider-vid special2" src={mps} alt="First slide"/>
                        <Carousel.Caption>
                            <div className='slide-btn'>
                                    <button className='btn-fav'>Terfavorit</button>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 512 512"><path fill="#FFF" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/></svg>
                                    <button className='btn-tonton'>Tonton Sekarang</button>
                                </div>
                                <div className='slide-capt text-start'>
                                    <h1>Musikal Petualangan Sherina</h1>
                                    <p>Musikal Petualangan Sherina - Episode 1</p>
                                </div>
                                <div className='slide-capt-2 text-end'>
                                    <h3>Teater Musikal</h3>
                                    <h3>Jakarta Movin</h3>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className="slider-vid" src={musikal} alt="Second slide"/>
                        <Carousel.Caption>
                            <div className='slide-btn'>
                                <button className='btn-fav'>Terfavorit</button>
                                <svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 512 512"><path fill="#FFF" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/></svg>
                                <button className='btn-tonton'>Tonton Sekarang</button>
                            </div>
                            <div className='slide-capt text-start'>
                                <h1>Payung Fantasi</h1>
                                <p>Payung Fantasi - Episode 1</p>
                            </div>
                            <div className='slide-capt-2 text-end'>
                                <h3>Drama Musikal</h3>
                                <h3>Indonesia Kaya</h3>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className="slider-vid-special" src={wayang} alt="Third slide"/>
                        <Carousel.Caption>
                            <div className='slide-btn'>
                                <button className='btn-fav'>Terfavorit</button>
                                <svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="0 0 512 512"><path fill="#FFF" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"/></svg>
                                <button className='btn-tonton'>Tonton Sekarang</button>
                            </div>
                            <div className='slide-capt text-start'>
                                <h1>Wayang Garok</h1>
                                <p>Wayang Garok - Episode 1</p>
                            </div>
                            <div className='slide-capt-2 text-end'>
                                <h3>Teater</h3>
                                <h3>Teater Taat</h3>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default InBeranda