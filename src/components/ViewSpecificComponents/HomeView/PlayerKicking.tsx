import styled from "@emotion/styled";
import { motion } from "framer-motion";

import soccerPlayer from "../../../assets/img/soccer-player.png"
import ball from "../../../assets/img/ball.png"


const StyledDiv = styled('div')`
    position: relative;
    .soccer-ball {
        position: absolute;
        animation: ball-kick 3s ;
        animation-delay: 1s;
        transition: 3s;
        opacity: 0;
        right: 0;
        bottom: 20px;
    }
   
    @keyframes ball-kick {
        0%{
            max-height: 60px;
            right: 300px;
            bottom: 20px;
            opacity: 0;
        }
        12%{
            max-height: 60px;
            right: 0;
            bottom: 20px;
        }
        50%{
            right: -350px;
            bottom: 350px; 
            opacity: 1;
        }
        75%  {
            opacity: 1;
        }
        100% { 
            opacity: 0;
            max-height: 10px;
            right: -300px;
            bottom: 300px;
            display: none;
        }
    }
`

function PlayerKicking() {
    return (
        <StyledDiv>
            <motion.img
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8}}
                src={soccerPlayer}
                alt="Soccer Player"
                className="img-fluid"
            />

            <img className="img-fluid soccer-ball" src={ball} alt="Soccer Ball" />
        </StyledDiv>
    )

}

export default PlayerKicking