import '../style/Login.css'
import '../style/Dashboard.css'
import IsiLogin from '../components/IsiLogin';
import Footer from "../components/Footer";

const Login = () => {
    return (
      <div>
        <IsiLogin/>

        <div className='footerBG'>
          <Footer />
        </div>
      </div>
      
    );
  };
  
  export default Login;