import uniqid from 'uniqid'
import teams from '../../../data/teams.json'
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
    console.log(teams);
    return (
        <section>
            <Row>
                <Col className='d-none d-lg-block' lg={2}>
                </Col>
                <Col xs={12} lg={10}>
                    <Row className=''>
                        {teams.map((team: Team) => (
                            <Col xs={4} md={3} className='p-2' key={uniqid()}>
                                <TeamCard  {...team} />
                            </Col>
                        ))}
                    </Row>
                </Col>

            </Row>

        </section>
    )
}

export default Teams