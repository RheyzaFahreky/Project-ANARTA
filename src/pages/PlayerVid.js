import "../style/Dashboard.css"
import "../style/Tiket.css"
import "../style/Beranda.css"
import "../style/Vid.css"
import Footer from "../components/Footer";
import NavbarBeranda from "../components/NavbarBeranda";
import VideoPlayer from "../components/VideoPlayer";
import Episode from "../components/Episode";
import Comment from "../components/Comment";


const PlayerVid = () => {
    return(
        <div className="vidBG">
            <NavbarBeranda />
            <main className="main-content">
                <VideoPlayer />

                <aside className="sidebar">
                    <Episode />
                    <Comment />
                </aside>
            </main>
        </div>
    )
}

export default PlayerVid