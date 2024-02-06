import brasileiraoCup from '../../assets/img/brasileirao-cup.png'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function AboutLeague() {
    return (
        <Row as='section'>
            <Col
                xs={12}
                md={{ span: 4, order: 1 }}
                lg={{ span: 3, offset: 1 }}
                className="p-4 d-flex flex-column justify-content-around ">
                <p>The "Campeonato Brasileiro Série A", commonly referred to as Brasileirão, is the Brazilian professional league for men's football clubs.</p>

                <p>At the top of the Brazilian football league system, it is the country's primary football competition.</p>
            </Col>
            <Col
                xs={{ span: 6, offset: 3, order: 'last' }}
                md={{ span: 4, offset: 0, order: 2 }}
                lg={{ span: 4 }}
                className="d-flex justify-content-center">
                <Image src={brasileiraoCup} alt="Brasileirao Cup" fluid />
            </Col>
            <Col
                xs={12}
                md={{ span: 4, order: 3 }}
                lg={{ span: 3 }}
                className="p-4 d-flex flex-column justify-content-around ">
                <p>The Campeonato Brasileiro is one of the strongest leagues in the world. It contains the most club world champion titles, and the second-most "Copa Libertadores" titles.</p>

                <p>Brasileirão is the most-watched football league in the Americas and one of the world's most exposed broadcast in 155 nations.</p>
            </Col>
        </Row>
    )
}

export default AboutLeague