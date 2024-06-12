import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Tiket from './pages/Tiket'
import Login from './pages/Login'
import Register from './pages/Register'
import TiketSemua from './pages/TiketSemua';
import Tempat from './pages/Tempat';
import DetailPesanan from './pages/DetailPesanan';
import Beranda from './pages/Beranda';
import ProsesBeli from './pages/ProsesBeli';
import PlayerVid from './pages/PlayerVid';
import Checkout from './pages/Checkout'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Beranda' element={<Beranda/>}/>
        <Route path='/PlayerVid' element={<PlayerVid/>}/>
        <Route path='/Tiket' element={<Tiket/>}/>
        <Route path='/TiketSemua' element={<TiketSemua/>}/>
        <Route path='/Tempat' element={<Tempat/>}/>
        <Route path='/DetailPesanan' element={<DetailPesanan/>}/>
        <Route path='/ProsesBeli' element={<ProsesBeli/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
      </Routes>
    </Router>
  );
}

export default App;
