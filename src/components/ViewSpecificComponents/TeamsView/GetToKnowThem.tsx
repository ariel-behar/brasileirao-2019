import teamsLocations from '../../../assets/img/teams-locations.jpg'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function GetToKnowThem() {
    return (
        <section>
            <Row className='py-5 d-flex align-items-stretch'>
                <Col
                    
                    xs={12}
                    md={{ span: 5, offset: 1 }}
                    className='d-flex flex-column justify-content-around'>
                    <h3>Get to Know Them...</h3>
                    <p style={{textAlign: 'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nesciunt, quos corrupti quod nam distinctio et cumque doloremque iusto dolore tempore consequatur nostrum sequi aliquam blanditiis. Sint dolorem consequuntur maxime. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita saepe quisquam sint delectus cupiditate maiores nostrum! Maxime harum, eum fugiat eius accusamus tenetur voluptates voluptatibus quidem reiciendis voluptas, debitis quasi!</p>
                </Col>
                <Col xs={12} md={5}>
                    <Image src={teamsLocations} fluid />
                </Col>
            </Row>

        </section>
    )
}

export default GetToKnowThem