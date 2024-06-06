import {Container} from 'react-bootstrap'

const ProgresBar = () => {
    return(
        <div>
            <Container>
                <div className='progres-bar'>
                    <div className="step">
                        <div className="bullet bullet-active">

                        </div>
                        <p>Loket</p>
                    </div>

                    <div className="step">
                        <div className="bullet">
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

export default ProgresBar