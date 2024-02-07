import uniqid from 'uniqid'

import teams from '../../../data/teams.json'

import playerHoldingBall from '../../../assets/img/player-holding-ball.jpg'

import { Identifiable } from '../../../types/shared-types'

import TeamCard from './TeamCard'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export interface Team extends Identifiable {
    name: string
    location: string
    state: string
    stadium: string
    capacity: number
    ranking: number
    image: string
}


function Teams() {
    return (
        <section>
            <Row>
                <Col className='d-none d-lg-block' lg={2} style={{
                    backgroundImage: `url(${playerHoldingBall})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionX: '-50px',
                    backgroundPositionY: 'center',
                    backgroundAttachment: 'fixed',
                    minHeight: '100%',

                }} />
                <Col xs={12} lg={10} className='ps-4'>
                    <Row className='gx-3'>
                        {teams.map((team: Team) => (
                            <Col xs={4} md={3} className='p-2' key={uniqid()}>
                                <TeamCard  {...team} />
                            </Col>
                        ))}
                    </Row>
                </Col>
                
                <p className='my-5' style={{textAlign: 'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nesciunt, quos corrupti quod nam distinctio et cumque doloremque iusto dolore tempore consequatur nostrum sequi aliquam blanditiis. Sint dolorem consequuntur maxime.</p>
            </Row>

        </section>
    )
}

export default Teams