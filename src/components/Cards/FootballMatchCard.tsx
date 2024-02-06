import { Link as RouterLink } from 'react-router-dom'

import { Identifiable } from '../../types/shared-types';
import getImageUrl from '../../utils/getImageUrl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const homeStyles = {
    backgroundColor: 'rgba(242, 250, 252, 0.8)',
    border: 'none',
    boxShadow: '0 0 40px 10px #f2fafc',
    borderRadius: '20px',
    padding: '10px 20px'
}

const eventStyles = {
    minHeight: '100%'
}

export interface Event extends Identifiable {
    teamOne: string;
    imageTeamOne: string;
    teamTwo: string;
    imageTeamTwo: string;
    date: string;
    hour: string;
    city: string;
    stadium: string;
    stadiumImage: string;
    price: number;
}

interface Props {
    event: Event
    displayOnView: 'home' | 'events'
}

function FootballMatchCard({
    event,
    displayOnView
}: Props) {
    return (
        <>
            <Card className='shadow' style={displayOnView === 'home' ? homeStyles : eventStyles}>
                <Card.Body className={`d-flex flex-column ${displayOnView === 'home' ? '' : 'py-2 px-0'}`}>
                    <Row className={` g-0 flex-grow-1 ${displayOnView === 'home' ? 'p-3' : 'px-1'}`} >
                        <Col xs={3} className='d-flex flex-column justify-content-between align-items-center'>
                            <Image style={displayOnView === 'home' ? { maxHeight: '100px' } : { maxHeight: '50px' }} className='team-logo' src={getImageUrl('teams', event.imageTeamOne)} alt={event.teamOne} fluid />
                            <p className='text-center'>{event.teamOne}</p>
                        </Col>
                        <Col xs={6} className='d-flex flex-column justify-content-around align-items-center'>
                            <Card.Title className='fw-bold'>Upcoming Match</Card.Title>
                            <p>
                                <FontAwesomeIcon size='lg' icon="calendar" className='me-2' />
                                {event.date}
                            </p>
                        </Col>
                        <Col xs={3} className='d-flex flex-column justify-content-between align-items-center'>
                            <Image style={displayOnView === 'home' ? { maxHeight: '100px' } : { maxHeight: '50px' }} className='team-logo' src={getImageUrl('teams', event.imageTeamTwo)} alt={event.teamTwo} fluid />
                            <p className='text-center'>{event.teamTwo}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} className='d-flex flex-column justify-content-center align-items-center '>
                            <Card.Img src={getImageUrl('stadiums', event.stadiumImage)} alt={event.stadium} />
                            <p className='mt-1'>Stadium: <span className='fw-bold'>{event.stadium}</span></p>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={6} className='ps-4'>
                            <p>
                                <FontAwesomeIcon size='lg' icon="clock" className='me-2' />
                                {event.hour}
                            </p>
                            <p>
                                <FontAwesomeIcon size='lg' icon="location-dot" className='me-2' />
                                {event.city}
                            </p>
                        </Col>

                        <Col xs={12} md={6} className='d-flex flex-row justify-content-center align-items-center'>
                            <RouterLink to="/tickets">
                                <Button
                                    size={displayOnView === 'home' ? 'lg' : 'sm'}
                                    variant='primary'>
                                    GET YOUR TICKET!
                                </Button>
                            </RouterLink>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default FootballMatchCard