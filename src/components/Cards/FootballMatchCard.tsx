import { Identifiable } from '../../types/shared-types';

import { Link as RouterLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import getImageUrl from '../../utils/getImageUrl';

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
}

function FootballMatchCard({
    event
}: Props) {
    return (
        <>
            <Row className='p-3'>
                <Col xs={3} className='d-flex justify-content-center'>
                    <Image style={{maxHeight: '100px'}} className='team-logo' src={getImageUrl('teams', event.imageTeamOne)} alt={event.teamOne} fluid />
                </Col>
                <Col xs={6} className='d-flex flex-column justify-content-around align-items-center'>
                    <h3 className='fw-bold'>Upcoming Match</h3>
                    <p>
                        <FontAwesomeIcon size='lg' icon="calendar" className='me-2' />
                        {event.date}
                    </p>
                </Col>
                <Col xs={3} className='d-flex justify-content-center'>
                    <Image style={{maxHeight: '100px'}} className='team-logo' src={getImageUrl('teams', event.imageTeamTwo)} alt={event.teamTwo} fluid />
                </Col>
            </Row>

            <Row>
                <Col xs={12} className='d-flex flex-column justify-content-center align-items-center '>
                    <Image src={getImageUrl('stadiums', event.stadiumImage)} alt={event.stadium} fluid />
                    <p className='mt-1'>Stadium: <span className='fw-bold'>{event.stadium}</span></p>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={7} className='ps-4'>
                    <p>
                        <FontAwesomeIcon size='lg' icon="clock" className='me-2' />
                        {event.hour}
                    </p>
                    <p>
                        <FontAwesomeIcon size='lg' icon="location-dot" className='me-2' />
                        {event.city}
                    </p>
                </Col>

                <Col xs={12} md={5} className='d-flex flex-row justify-content-center '>
                    <RouterLink to="/tickets">
                        <Button size='lg' variant='primary'>
                            GET YOUR TICKET!
                        </Button>
                    </RouterLink>

                </Col>
            </Row>
        </>
    )
}

export default FootballMatchCard