import soccerField from '../assets/img/backgrounds/soccer-field.jpg'
import PlayerKicking from '../components/ViewSpecificComponents/HomeView/PlayerKicking'

import events from '../data/events.json'

import HelmetSEO from '../components/HelmetSEO'
import FootballMatchCard, { Event } from '../components/Cards/FootballMatchCard'
import RankingDisplay from '../components/ViewSpecificComponents/HomeView/RankingDisplay';

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container";

const upcomingMatch: Event = events[0];

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

				<Col xs={12} lg={{ span: 4, offset: 1 }}>
					<FootballMatchCard event={upcomingMatch} displayOnView='home' />
				</Col>

				<Col xs={12} lg={3} className='mx-auto'>
					<RankingDisplay />
				</Col>
			</Row>


		</Container>

	)
}

export default HomeView