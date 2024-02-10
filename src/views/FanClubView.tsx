import { useTranslation } from 'react-i18next'
import soccerFans from '../assets/img/soccer-fans.jpg'
import stadiumFans from '../assets/img/stadium-fans.jpg'

import hasPageHeaderFooter from "../HOC/hasPageHeaderFooter"
import HelmetSEO from "../components/HelmetSEO"
import WhoIsWelcomeToJoin from '../components/ViewSpecificComponents/FanClubView/WhoIsWelcomeToJoin'
import ViewTitle from '../components/ViewTitle'
import FanClubOpeningSection from '../components/ViewSpecificComponents/FanClubView/FanClubOpeningSection'

import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

function FanClubView() {
    const { t } = useTranslation('FanClubView')
    
    return (
        <>
            <HelmetSEO title="FAN CLUB" description="Fan club page of the fictional website about the Brasileirao 2019 Soccer Championship" />

            <ViewTitle viewTitle={t('viewTitle', {ns: 'FanClubView', defaultValue: "Fan Club"})} />

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