import hasPageHeaderFooter from "../HOC/hasPageHeaderFooter"

import soccerField from '../assets/img/backgrounds/soccer-field.jpg'
import HelmetSEO from "../components/HelmetSEO"

import Container from 'react-bootstrap/Container'
import AboutLeague from "../components/ViewSpecificComponents/LeagueView/AboutLeague"
import LeagueStadiums from "../components/ViewSpecificComponents/LeagueView/LeagueStadiums"
import CompetitionFormat from "../components/ViewSpecificComponents/LeagueView/CompetitionFormat"

function LeagueView() {
    return (
        <>
            <HelmetSEO title="LEAGUE" description="League page of the fictional website about the Brasileirao 2019 Soccer Championship" />

            <Container>
                <AboutLeague />
                <LeagueStadiums />
                <CompetitionFormat />
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