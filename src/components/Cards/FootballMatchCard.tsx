import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'

import { Identifiable } from '../../types/shared-types';
import getImageUrl from '../../utils/getImageUrl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useTranslation } from 'react-i18next';

const homeStyles = {
    backgroundColor: 'rgba(242, 250, 252, 0.8)',
    border: 'none',
    boxShadow: '0 0 40px 10px #f2fafc',
    borderRadius: '20px',
    padding: '10px 20px',

    transition: 'box-shadow 0.3s ease'
}

const eventStyles = {
    minHeight: '100%',
    transition: 'box-shadow 0.3s ease'
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
    const {t} = useTranslation('FootballMatchCard')
    const [hovered, setHovered] = useState<boolean>(false)


    const isHovered = () => {
        setHovered((prevState:boolean) => !prevState)
    }

    return (
        <>
            <Card
                className={`${hovered && displayOnView === 'events' ? 'shadow' : ''}`}
                style={displayOnView === 'home' ? homeStyles : eventStyles}
                onMouseEnter={isHovered}
                onMouseLeave={isHovered}
            >
                <Card.Body className={`d-flex flex-column ${displayOnView === 'home' ? '' : 'py-2 px-0'}`}>
                    <Row className={` g-0 flex-grow-1 ${displayOnView === 'home' ? 'p-0 p-xxl-3' : 'px-1'}`} >
                        <Col xs={{span: 2}} lg={3} className='d-flex flex-column justify-content-between align-items-center'>
                            <Image style={displayOnView === 'home' ? { maxHeight: '100px' } : { maxHeight: '50px' }} className='team-logo' src={getImageUrl('teams', event.imageTeamOne)} alt={event.teamOne} fluid />
                            <p className='text-center'>{event.teamOne}</p>
                        </Col>
                        <Col xs={{span: 6, offset: 1}} lg={{span: 6, offset: 0}} className='d-flex flex-column justify-content-around align-items-center'>
                            <Card.Title className='fw-bold'>{t('FootballMatchCard:title')}</Card.Title>
                            <p>
                                <FontAwesomeIcon size='lg' icon="calendar" className='me-2' />
                                {event.date}
                            </p>
                        </Col>
                        <Col xs={{span: 2, offset: 1}} lg={{span: 3, offset: 0}} className='d-flex flex-column justify-content-between align-items-center'>
                            <Image style={displayOnView === 'home' ? { maxHeight: '100px' } : { maxHeight: '50px' }} className='team-logo' src={getImageUrl('teams', event.imageTeamTwo)} alt={event.teamTwo} fluid />
                            <p className='text-center'>{event.teamTwo}</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} className='d-flex flex-column justify-content-center align-items-center '>
                            <Card.Img src={getImageUrl('stadiums', event.stadiumImage)} alt={event.stadium} />
                            <p className='mt-1'>{t('FootballMatchCard:stadium')}: <span className='fw-bold'>{event.stadium}</span></p>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={displayOnView === 'home' ? 5 : 6} className='ps-4'>
                            <p>
                                <FontAwesomeIcon size='lg' icon="clock" className='me-2' />
                                {event.hour}
                            </p>
                            <p>
                                <FontAwesomeIcon size='lg' icon="location-dot" className='me-2' />
                                {event.city}
                            </p>
                        </Col>

                        <Col xs={12} md={displayOnView === 'home' ? 7 : 6} className='d-flex flex-row justify-content-center align-items-center'>
                            <RouterLink to="/tickets">
                                <Button
                                    size={displayOnView === 'home' ? 'lg' : 'sm'}
                                    variant='primary'
                                    className='text-uppercase'
                                    >
                                        {t('FootballMatchCard:button')}
                                    
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
