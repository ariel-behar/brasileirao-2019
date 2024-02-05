import soccerPlayer from "../../assets/img/soccer-player.png"
import ball from "../../assets/img/ball.png"


import Image from "react-bootstrap/Image";

function PlayerKicking() {
    return (
        <>
            <Image src={soccerPlayer} alt="Soccer Player" fluid/>
            <Image src={ball} alt="Soccer Ball" fluid/>
        </>

    )

}

export default PlayerKicking