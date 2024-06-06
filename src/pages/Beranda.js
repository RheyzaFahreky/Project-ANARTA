import "../style/Dashboard.css"
import "../style/Tiket.css"
import "../style/Beranda.css"
import Footer from "../components/Footer";
import InBeranda from "../components/InBeranda";
import KoleksiTerkini from "../components/KoleksiTerkini";
import KoleksiTerfavorit from "../components/KoleksiTerfavorit";
import KoleksiMonolog from "../components/KoleksiMonolog";
import NavbarBeranda from "../components/NavbarBeranda";

const Beranda = () => {
    return(
        <div>
            <div className="berandaBG">
                <NavbarBeranda />
                <InBeranda />
            </div>

            <div className="koleksiterkini">
                <KoleksiTerkini/>
            </div>

            <div className="koleksiterfavorit">
                <KoleksiTerfavorit/>
            </div>

            <div className="koleksimonolog">
                <KoleksiMonolog/>
            </div>

            <div className="footerBG">
                <Footer />
            </div>
        </div>
    )
}

export default Beranda