import soccerField from '../assets/img/soccer-field.jpg'

import HelmetSEO from '../components/HelmetSEO'
import PlayerKicking from '../components/HomeViewComponents/PlayerKicking'

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container";
import NextMatchDisplay from '../components/HomeViewComponents/NextMatchDisplay';
import RankingDisplay from '../components/HomeViewComponents/RankingDisplay';

function HomeView() {
	return (
		<Container fluid style={{
			backgroundImage: `url('${soccerField}')`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			height: '100%',
		}}>
			<HelmetSEO title="HOME" description="Home page of the fictional website about the Brasileirao 2019 Soccer Championship" />

			<Row className='h-100 d-flex align-items-center'>
				<Col lg={3} className='d-none d-lg-flex align-items-end'>
					<PlayerKicking />
				</Col>

				<Col xs={12} lg={{span: 4, offset: 1}}>
					<NextMatchDisplay />
				</Col>

				<Col xs={12} lg={3} className='mx-auto'>
					<RankingDisplay />
				</Col>
			</Row>


		</Container>

	)
}

export default HomeView