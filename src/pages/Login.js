import '../style/Login.css'
import '../style/Dashboard.css'
import IsiLogin from '../components/IsiLogin';
import Footer from "../components/Footer";
import NavigationBar from '../components/NavigationBar'
import axios from 'axios'

const Login = () => {
    return (
      <div className='logBG'>
        <div>
          <NavigationBar />
          <IsiLogin/>
        </div>

        <div className='footerBG'>
        <Footer />
        </div>
      </div>
      
    );
  };
  
  export default Login;