import {Container} from 'react-bootstrap'

const ProgresBar1 = () => {
    return(
        <div>
            <Container>
                <div className='progres-bar'>
                    <div className="step">
                        <div className="bullet ">
                        <div className="check check-active fas fa-check fa-xl text-white"></div>
                        </div>
                        <p>Loket</p>
                    </div>

                    <div className="step">
                        <div className="bullet bullet-active">
                        </div>
                        <p>Pembayaran</p>
                    </div>

                    <div className="step">
                        <div className="bullet">
                        </div>
                        <p>Selesai</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProgresBar1