    const VideoPlayer = () => {
    return(
        <div>
            <div className="video-player">
                <div class="ratio ratio-16x9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xEfADhXGi_8?si=jl6DcCM0Yw-Kjtlb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="episode-detail">
                    <h1>Payung Fantasi</h1>
                    <h2>Payung Fantasi - Episode 1</h2>
                    <p className="category">Drama Musikal | Indonesia Kaya</p>
                    <p className="views-date">
                        7.082.694 X Ditonton &nbsp;&nbsp; Telah Tayang Perdana Pada 26 Okt 2022
                    </p>
                    <p className="description">
                        Indonesia Kaya Bersama Garin Nugroho Dan BOOW Live Mempersembahkan Serial Musikal Payung Fantasi, Terinspirasi Dari Kisah Hidup Pahlawan Nasional Ismail Marzuki Dan Kejadian Bersejarah Pada Masa Itu.
                        <br /><br />
                        Alunan Lagu Payung Fantasi Membawa Sebuah Memori Perjalanan Hidup Ismail Marzuki Dari Masa Kecil Hingga Remaja. Mendapat Pengaruh Dan Dukungan Ayahnya, Babe Marzuki, Ismail Muda Mulai Mengenal Musik Dari Gramofon, Hingga Akhirnya Mencintai Musik Keroncong. Kemudian, Waktu Mempertemukannya Dengan Hugo Dumas Yang Membawanya Bertemu Kelompok Orkes Legendaris, Orkes Lief Java.
                    </p>
                    <hr />
                    <p className="follow">
                        Follow Indonesia Kaya:
                        <br />
                        Instagram: <a href="https://www.instagram.com/indonesia_kaya/" target="_blank" rel="noopener noreferrer">/ Indonesia_kaya_</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer