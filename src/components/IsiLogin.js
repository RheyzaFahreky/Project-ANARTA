import { useNavigate } from "react-router-dom";

const IsiLogin = () => {
    const navigate = useNavigate()
    return (
        <div className="login-container">
        <main className="login-main">
            <div className="login-box">
            <h2>Masuk</h2>
            <form>
                <input type="text" placeholder="Alamat Email/No. Handphone" />
                <input type="password" placeholder="Password" />
                <button onClick={() => navigate('/Beranda')} type="submit" className="submit-button">MASUK</button>
            </form>
            
            <div className="register-link">
                <p>Baru di Anarta? <a onClick={() => navigate('/Register')} href="#Daftar">Daftar</a></p>
            </div>
            </div>
        </main>
        </div>

        
    );
}

export default IsiLogin