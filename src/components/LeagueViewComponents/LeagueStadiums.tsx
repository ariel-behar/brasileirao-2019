import uniqid from "uniqid"
import styled from "@emotion/styled"

import { Identifiable } from "../../types/shared-types"
import grassPattern from '../../assets/img/grass-patten.jpg'
import stadiums from '../../data/stadiums.json'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const StyledLeagueSection = styled('section')`
	background-image: url(${grassPattern});
	background-repeat: repeat;
	border: 3px solid white;
	position: relative;
	border-radius: 20px;
	padding: 30px;

	.league-section-title-div {
		position: absolute;
		top: -30px;
		left: 50%;
		margin-bottom: 0;
		transform: translateX(-50%);
		padding: 10px;
		border-radius: 50px;
		background-image: url(${grassPattern});
		background-repeat: repeat;
		border: 3px solid white;
		color: white;
		width: auto;
		display: inline-block;
	}

	.stadiums-list-div {
		border-right: 3px solid #fff;

		color: white;

		h6 {
			font-weight: bold;
		}

		ul {
			list-style-type: none;
			padding-left: 20px;
			max-height: 310px;
			overflow-y: scroll;
			direction:rtl;

			::-webkit-scrollbar {
				width: 0.5em;
			}

			::-webkit-scrollbar-track {
				background: transparent;
			}

			::-webkit-scrollbar-thumb {
				background: white;
				border-radius: 20px;
			}

			li {
				color: white;
				cursor: pointer;
				&:hover {
					color: #b6b5b5;
				}
				p {
					font-weight: bold;
					text-align: left;
					margin-bottom: 0;
				}
			}

		}
		
	}

	.stadiums-dropdown {
		.dropdown-menu.show {
			overflow-y: scroll;
			max-height: 250px;
		}
	}
`

interface Stadium extends Identifiable {
	stadiumName: string
	stadiumImage: string
	capacity: number
	city: string
	state: string
	yearOpened: number
	homeTeam: string
}

function LeagueStadiums() {

	const handleStadiumClick = (stadiumId: number) => {
		console.log('clicked stadium', stadiumId);
	}

	return (
		<StyledLeagueSection>
			<div className="league-section-title-div">
				<h6 className="mb-0">League's Stadiums</h6>
			</div>

			<Row>
				<Col xs={12} lg={3}>
					<div className="stadiums-list-div d-none d-lg-block">
						<h6>PICK A STADIUM</h6>
						<ul>
							{
								stadiums.map((stadium: Stadium) => {
									return (
										<li key={uniqid()}>
											<p onClick={() => handleStadiumClick(stadium._id)}>
												{stadium.stadiumName}
											</p>
										</li>
									)
								})
							}

						</ul>
					</div>

					<div className="stadiums-dropdown d-flex justify-content-center d-lg-none">
						<DropdownButton variant="success" id="dropdown-basic-button" title="PICK A STADIUM">
							{
								stadiums.map((stadium: Stadium) => {
									return (
										<Dropdown.Item onClick={() => handleStadiumClick(stadium._id)} key={uniqid()}>{stadium.stadiumName}</Dropdown.Item>
									)
								})
							}
						</DropdownButton>
					</div>

				</Col>
			</Row>
		</StyledLeagueSection>
	)
}

export default LeagueStadiums