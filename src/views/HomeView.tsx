import { motion } from 'framer-motion'
import soccerField from '../assets/img/backgrounds/soccer-field.jpg'
import PlayerKicking from '../components/ViewSpecificComponents/HomeView/PlayerKicking'

import events from '../data/events.json'

import HelmetSEO from '../components/HelmetSEO'
import FootballMatchCard, { Event } from '../components/Cards/FootballMatchCard'
import RankingDisplay from '../components/ViewSpecificComponents/HomeView/RankingDisplay';

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container";
import Footer from '../components/Footer/Footer'
import styled from '@emotion/styled'

const StyledContainer = styled(Container)`
	background-image: url(${soccerField});
	background-repeat: no-repeat;
	background-size: cover;
	height: 100%;
	position: relative;

	padding: 150px 10px 70px 10px;

	@media (min-width: 768px) {
		background-position: 'center';
	}
`

const upcomingMatch: Event = events[0];

function HomeView() {
	return (
		<StyledContainer fluid >
			<HelmetSEO title="HOME" description="Home page of the fictional website about the Brasileirao 2019 Soccer Championship" />

			<Row className='h-100 d-flex align-items-center g-5'>
				<Col lg={3} xl={4} className='d-none d-lg-flex align-items-end justify-content-center'>
					<PlayerKicking />
				</Col>

				<Col xs={12} md={6} lg={5} xl={{ span: 4 }} >
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 2 }}
					>
						<FootballMatchCard event={upcomingMatch} displayOnView='home' />
					</motion.div>
				</Col>

				<Col xs={12} md={6} lg={3} className='mx-auto'>
					<RankingDisplay />
				</Col>
			</Row>

			<Footer />
		</StyledContainer>

	)
}

export default HomeView