import { useTranslation } from "react-i18next"
import hasPageHeaderFooter from "../HOC/hasPageHeaderFooter"

import soccerField from '../assets/img/backgrounds/soccer-field.jpg'

import HelmetSEO from "../components/HelmetSEO"
import AboutLeague from "../components/ViewSpecificComponents/LeagueView/AboutLeague"
import LeagueStadiums from "../components/ViewSpecificComponents/LeagueView/LeagueStadiums"
import CompetitionFormat from "../components/ViewSpecificComponents/LeagueView/CompetitionFormat"
import ViewTitle from "../components/ViewTitle"

import Container from 'react-bootstrap/Container'

function LeagueView() {
    const { t } = useTranslation('LeagueView')

    return (
        <>
            <HelmetSEO title="LEAGUE" description="League page of the fictional website about the Brasileirao 2019 Soccer Championship" />
            
            <ViewTitle viewTitle={t('viewTitle', {ns: 'LeagueView', defaultValue: "League"})} />

            <Container>
                <AboutLeague />
                <LeagueStadiums />
                <CompetitionFormat />
            </Container>
        </>
    )
}

export default hasPageHeaderFooter(LeagueView, {
    viewTitle: 'League',
    pageHeaderBackgroundImage: soccerField,
    pageHeaderBackgroundPosition: 'center',
    pageFooterBackgroundImage: soccerField,
    pageFooterBackgroundPosition: 'center',
}) 