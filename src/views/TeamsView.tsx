import hasPageHeaderFooter from "../HOC/hasPageHeaderFooter"
import HelmetSEO from "../components/HelmetSEO"

import soccerPlayersPlaying from '../assets/img/soccer-players-playing.jpg'

import GetToKnowThem from "../components/ViewSpecificComponents/TeamsView/GetToKnowThem"

import Container from 'react-bootstrap/Container'

function TeamsView() {
    return (
        <>
            <HelmetSEO title="TEAMS" description="Teams page of the fictional website about the Brasileirao 2019 Soccer Championship" />
            <Container>
                <GetToKnowThem />
            </Container>
        </>
    )
}

export default hasPageHeaderFooter(TeamsView, {
    viewTitle: 'TEAMS',
    pageHeaderImage: soccerPlayersPlaying,
    pageFooterImage: soccerPlayersPlaying,
})
