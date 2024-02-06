import hasPageHeaderFooter from "../HOC/hasPageHeaderFooter"
import HelmetSEO from "../components/HelmetSEO"

import soccerPlayersPlaying from '../assets/img/soccer-players-playing.jpg'

function TeamsView() {
    return (
        <>
            <HelmetSEO title="TEAMS" description="Teams page of the fictional website about the Brasileirao 2019 Soccer Championship" />
            <div>TeamsView</div>
        </>
    )
}

export default hasPageHeaderFooter(TeamsView, {
    viewTitle: 'TEAMS',
    pageHeaderImage: soccerPlayersPlaying,
    pageFooterImage: soccerPlayersPlaying,    
})
