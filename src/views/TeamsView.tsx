import { useTranslation } from "react-i18next"
import hasPageHeaderFooter from "../HOC/hasPageHeaderFooter"
import HelmetSEO from "../components/HelmetSEO"

import soccerPlayersPlaying from '../assets/img/backgrounds/soccer-players-playing.jpg'

import GetToKnowThem from "../components/ViewSpecificComponents/TeamsView/GetToKnowThem"
import Teams from "../components/ViewSpecificComponents/TeamsView/Teams"
import ViewTitle from "../components/ViewTitle"

import Container from 'react-bootstrap/Container'

function TeamsView() {
    const { t } = useTranslation('TeamsView')

    return (
        <>
            <HelmetSEO title="TEAMS" description="Teams page of the fictional website about the Brasileirao 2019 Soccer Championship" />

            <ViewTitle viewTitle={t('viewTitle', {ns: 'TeamsView', defaultValue: "Teams"})} />

            <Container>
                <GetToKnowThem />
                
                <Teams />
            </Container>
        </>
    )
}

export default hasPageHeaderFooter(TeamsView, {
    viewTitle: 'Teams',
    backgroundImage: soccerPlayersPlaying,
})
