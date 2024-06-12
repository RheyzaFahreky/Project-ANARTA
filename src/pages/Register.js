import '../style/Login.css'
import '../style/Dashboard.css'
import Footer from "../components/Footer";
import IsiRegister from '../components/IsiRegister';
import axios from 'axios';
import NavigationBar from '../components/NavigationBar'


const Register = () => {
    return (
      <div className='logBG'>
        <div>
        <NavigationBar />
        <IsiRegister />
        </div>

        <div className='footerBG'>
          <Footer />
        </div>
      </div>
    );
  };
  
  export default Register;
  