import '../style/Login.css'
import '../style/Dashboard.css'
import Footer from "../components/Footer";
import IsiRegister from '../components/IsiRegister';


const Register = () => {
    return (
      <div>
        <IsiRegister />

        <div className='footerBG'>
          <Footer />
        </div>
      </div>
    );
  };
  
  export default Register;
  