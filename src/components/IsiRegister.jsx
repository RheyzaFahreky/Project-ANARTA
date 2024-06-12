import { useNavigate } from "react-router-dom"
import { useState } from "react"
import RegisterValidation from "../RegisterValidation"
import axios from "axios"

const IsiRegister = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [msg, setMsg] = useState('')

    const Register = async(e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/users',{
                email: email,
                password: password,
                confPassword: confPassword
            })
            navigate('/Login')
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }

    return(
        <div className="daftar-container">
        <main className="daftar-main">
        <div className="daftar-box text-center">
            <h2 className="text-center">Daftar</h2>
            <form  action="" onSubmit={ Register }>
                <input type="text" placeholder="Alamat Email/No. Handphone" value={email} onChange={(e) => setEmail(e.target.value)}/>
                {/* {errors.email && <span className="text-danger"> {errors.email} </span>} */}
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                {/* {errors.password && <span className="text-danger"> {errors.password} </span>} */}
                <input type="password" placeholder="Konfirmasi Password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                <p className="text-danger">{msg}</p>
                <button type="submit" className="submit-button">Daftar</button>
            </form>
        
            <div className="register-link text-center">
            <p>Sudah punya akun? <a onClick={() => navigate ('/Login')} href="#">Masuk</a></p>
            </div>
        </div>
        </main>
    </div>
    )
}

export default IsiRegister