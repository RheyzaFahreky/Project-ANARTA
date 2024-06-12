import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginValidation from "../LoginValidation";
import axios from 'axios'

const IsiLogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')

    const Auth = async(e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/login',{
                email: email,
                password: password
            })
            navigate('/Beranda')
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }


    return (
        <div className="login-container">
            <main className="login-main">
                <div className="login-box text-center">
                    <h2 className="text-center">Masuk</h2>
                        <form action="" onSubmit={Auth}>
                            <input type="text" placeholder="Alamat Email/No. Handphone" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <p className="text-danger">{msg}</p>
                            <button  type="submit" className="submit-button">MASUK</button>
                            <p className= "text-start">Lupa Password?</p>
                        </form>
                
                    <div className="register-link text-center">
                        <p>Baru di Anarta? <a onClick={() => navigate('/Register')} href="#">Daftar</a></p>
                    </div>
                </div>
            </main>
        </div>

        
    );
}

export default IsiLogin