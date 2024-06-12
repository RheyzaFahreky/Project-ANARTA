import React from "react";
import thumb1 from "../assets/images/thumb1.png"
import thumb2 from "../assets/images/thumb2.png"
import thumb3 from "../assets/images/thumb3.png"
import pic2 from "../assets/images/pic2.png"


const episodes = [
    { id: 1, title: "Eps. 4 Payung Fantasi", duration: "00:32:43", imgSrc: {thumb1} },
    { id: 2, title: "Eps. 3 Payung Fantasi", duration: "00:29:59", imgSrc: {thumb2} },
    { id: 3, title: "Eps. 2 Payung Fantasi", duration: "00:35:23", imgSrc: {thumb3} },
];

const Episode = () => {
    return(
        <div className="container-vid">
            <div className="episode-list">
                {episodes.map(episode => (
                    <div className="episode" key={episode.id}>
                        <img src={pic2} alt={episode.title} />
                        <div className="episode-details">
                            <h4>{episode.title}</h4>
                            <p>{episode.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Episode