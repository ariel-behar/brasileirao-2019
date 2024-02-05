import soccerField from '../assets/img/soccer-field.jpg'

import HelmetSEO from '../components/HelmetSEO'
import PlayerKicking from '../components/HomeViewComponents/PlayerKicking'

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container";

function HomeView() {
	return (
		<div style={{
			backgroundImage: `url('${soccerField}')`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			height: '100%',
		}}>
			<HelmetSEO title="HOME" description="Home page of the fictional website about the Brasileirao 2019 Soccer Championship" />

			<div>HomeView</div>

		
			<Container fluid>
            <Row>
                <Col>
				<PlayerKicking />
                </Col>
            </Row>
        </Container>

			
		</div>

	)
}

export default HomeView