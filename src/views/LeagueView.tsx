import hasPageHeaderFooter from "../HOC/hasPageHeaderFooter"

import soccerField from '../assets/img/backgrounds/soccer-field.jpg'
import HelmetSEO from "../components/HelmetSEO"

import Container from 'react-bootstrap/Container'
import AboutLeague from "../components/LeagueViewComponents/AboutLeague"

function LeagueView() {
    return (
        <>
            <HelmetSEO title="LEAGUE" description="League page of the fictional website about the Brasileirao 2019 Soccer Championship" />

            <Container>
                <AboutLeague />

            </Container>
        </>
    )
}

export default hasPageHeaderFooter(LeagueView, {
    viewTitle: 'LEAGUE',
    pageHeaderImage: soccerField,
    pageHeaderImagePosition: 'center',
    pageFooterImage: soccerField,
    pageFooterImagePosition: 'center',
}) 