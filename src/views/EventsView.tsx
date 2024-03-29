import { useTranslation } from 'react-i18next'
import uniqid from 'uniqid'

import eventsBackgroundImage from '../assets/img/backgrounds/events.jpg'

import events from '../data/events.json'

import HelmetSEO from "../components/HelmetSEO"
import hasPageHeaderFooter from "../HOC/hasPageHeaderFooter"
import FootballMatchCard, { Event } from '../components/Cards/FootballMatchCard'
import ViewTitle from '../components/ViewTitle'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function EventsView() {
    const { t } = useTranslation('EventsView')

    return (
        <>
            <HelmetSEO title="EVENTS" description="Events page of the fictional website about the Brasileirao 2019 Soccer Championship" />

            <ViewTitle viewTitle={t('viewTitle', {ns: 'EventsView', defaultValue: "Events"})} />

            <Container>
                <section className='py-5'>
                    <div className='mb-5'>
                        <h3>{t('title', {ns: 'EventsView', defaultValue: "Browse Upcoming Brasileirão Events"})}</h3>
                        <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas officia cumque beatae, alias rerum a eum repellendus accusantium recusandae nobis aspernatur aut deleniti voluptatibus impedit, ipsa autem expedita illo. Odit.</p>
                    </div>

                    <Row className='g-4'>
                        {
                            events.map((event: Event) => (
                                <Col xs={12} md={4} key={uniqid()}>
                                    <FootballMatchCard event={event} displayOnView='events' />
                                </Col>
                            ))
                        }
                    </Row>
                </section>
            </Container>
        </>
    )
}

export default hasPageHeaderFooter(EventsView, {
    viewTitle: 'Events',
    backgroundImage: eventsBackgroundImage,
    pageHeaderBackgroundSize: 'contain',
    pageFooterBackgroundSize: 'contain',
    pageFooterBackgroundPosition: 'bottom'
})