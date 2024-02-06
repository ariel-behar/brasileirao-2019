import { Link as RouterLink } from 'react-router-dom'

import styled from '@emotion/styled'

import events from '../../../data/events.json'
import getImageUrl from '../../../utils/getImageUrl'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const StyledNextMatchDisplay = styled('div')`
    background-color: rgba(242, 250, 252, 0.8);
    box-shadow: 0 0 40px 10px #f2fafc;
    border-radius: 20px;
    padding: 10px 20px;

    .team-logo {
        max-height: 100px;
    } 
`

interface UpcomingMatch {
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

const upcomingMatch: UpcomingMatch = events[0];

function NextMatchDisplay() {
    return (
        <StyledNextMatchDisplay>
            <Row className='p-3'>
                <Col xs={3} className='d-flex justify-content-center'>
                    <Image className='team-logo' src={getImageUrl('teams', upcomingMatch.imageTeamOne)} alt={upcomingMatch.teamOne} fluid />
                </Col>
                <Col xs={6} className='d-flex flex-column justify-content-around align-items-center'>
                    <h3 className='fw-bold'>Upcoming Match</h3>
                    <p>
                        <FontAwesomeIcon size='lg' icon="calendar" className='me-2' />
                        {upcomingMatch.date}
                    </p>
                </Col>
                <Col xs={3} className='d-flex justify-content-center'>
                    <Image className='team-logo' src={getImageUrl('teams', upcomingMatch.imageTeamTwo)} alt={upcomingMatch.teamTwo} fluid />
                </Col>
            </Row>

            <Row>
                <Col xs={12} className='d-flex flex-column justify-content-center align-items-center '>
                    <Image src={getImageUrl('stadiums', upcomingMatch.stadiumImage)} alt={upcomingMatch.stadium} fluid />
                    <p className='mt-1'>Stadium: <span className='fw-bold'>{upcomingMatch.stadium}</span></p>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={7} className='ps-4'>
                    <p>
                        <FontAwesomeIcon size='lg' icon="clock" className='me-2' />
                        {upcomingMatch.hour}
                    </p>
                    <p>
                        <FontAwesomeIcon size='lg' icon="location-dot" className='me-2' />
                        {upcomingMatch.city}
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


        </StyledNextMatchDisplay >
    )
}

export default NextMatchDisplay