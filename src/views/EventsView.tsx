import uniqid from 'uniqid'

import eventsBackgroundImage from '../assets/img/events.jpg'

import events from '../data/events.json'

import hasPageHeaderFooter from "../HOC/hasPageHeaderFooter"
import HelmetSEO from "../components/HelmetSEO"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FootballMatchCard, { Event } from '../components/Cards/FootballMatchCard'

function EventsView() {
    return (
        <>
            <HelmetSEO title="EVENTS" description="Events page of the fictional website about the Brasileirao 2019 Soccer Championship" />

            <Container>
                <section className='my-5'>
                    <h3>Browse Upcoming Brasileirão Events</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas officia cumque beatae, alias rerum a eum repellendus accusantium recusandae nobis aspernatur aut deleniti voluptatibus impedit, ipsa autem expedita illo. Odit.</p>

                    <Row className='g-4'>
                        {
                            events.map((event: Event) => (
                                <Col xs={12} md={4} key={uniqid()}>
                                    <FootballMatchCard event={event} displayOnView='events'/>
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
    pageHeaderImage: eventsBackgroundImage,
    pageFooterImage: eventsBackgroundImage
})