import soccerFans from '../assets/img/soccer-fans.jpg'
import stadiumFans from '../assets/img/stadium-fans.jpg'

import hasPageHeaderFooter from "../HOC/hasPageHeaderFooter"
import HelmetSEO from "../components/HelmetSEO"
import WhoIsWelcomeToJoin from '../components/ViewSpecificComponents/FanClubView/WhoIsWelcomeToJoin'

import Container from 'react-bootstrap/Container'

import Image from 'react-bootstrap/Image'
import FanClubOpeningSection from '../components/ViewSpecificComponents/FanClubView/FanClubOpeningSection'

function FanClubView() {
    return (
        <>
            <HelmetSEO title="FAN CLUB" description="Fan club page of the fictional website about the Brasileirao 2019 Soccer Championship" />

            <Container>
                <FanClubOpeningSection />
            </Container>

            <Image style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                maxHeight: '500px',
                objectPosition: 'top'
            }} src={stadiumFans} alt="Stadium Fans" fluid />

            <Container>
                <WhoIsWelcomeToJoin />
            </Container>
        </>
    )
}

export default hasPageHeaderFooter(FanClubView, {
    viewTitle: 'Fan Club',
    pageHeaderImage: soccerFans,
    pageFooterImage: soccerFans
}) 