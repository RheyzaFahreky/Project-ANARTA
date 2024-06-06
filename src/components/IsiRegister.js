import { useNavigate } from "react-router-dom"

const IsiRegister = () => {
    const navigate = useNavigate()
    return(
        <div className="daftar-container">
        <main className="daftar-main">
        <div className="daftar-box">
            <h2>Daftar</h2>
            <form>
            <input type="text" placeholder="Alamat Email/No. Handphone" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="submit-button">Daftar</button>
            </form>
        
            <div className="register-link">
            <p>Sudah punya akun? <a onClick={() => navigate ('/Login')} href="#">Masuk</a></p>
            </div>
        </div>
        </main>
    </div>
    )
}

export default IsiRegister