import { useTranslation } from "react-i18next"
import { useState } from "react"
import uniqid from "uniqid"
import styled from "@emotion/styled"

import { Identifiable } from "../../../types/shared-types"
import getImageUrl from "../../../utils/getImageUrl"
import stadiums from '../../../data/stadiums.json'

import grassPattern from '../../../assets/img/grass-patten.jpg'
import soccerField from '../../../assets/img/backgrounds/soccer-field.jpg'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const StyledLeagueSection = styled('section')`
	background-image: url(${grassPattern});
	background-repeat: repeat;
	border: 3px solid white;
	position: relative;
	border-radius: 20px;
	padding: 30px 20px;
	min-height: 430px;

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
		height: 100%;
		color: white;

		h6 {
			font-weight: bold;
		}

		ul {
			list-style-type: none;
			padding-left: 20px;
			max-height: 435px;
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

	.selected-stadium-details-list {
		color: #b6b5b5;
		list-style-type: none;
		padding-left: 0;
		span {
			color: white;
			display: block;
		}
	}

	.selected-stadium-image {
		border-radius: 20px;
		border: 1px solid white;
	}

	@media(min-width: 768px) {
		.stadiums-list-div {
			ul {
				max-height: 320px;
			}
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
	const { t } = useTranslation('LeagueStadiums')
	const [selectedStadium, setSelectedStadium] = useState<Stadium | null>(null)

	const handleStadiumClick = (stadium: Stadium) => {
		setSelectedStadium(stadium)
	}

	return (
		<StyledLeagueSection className="mt-4 mt-md-0">
			<div className="league-section-title-div">
				<h6 className="mb-0">{t('title', { ns: 'LeagueStadiums', defaultValue: "League's Stadiums" })}</h6>
			</div>

			<Row>
				<Col xs={7} md={6} lg={3}>
					<div className="stadiums-list-div d-lg-block">
						<h6 className="text-uppercase">{t('pickStadium', { ns: 'LeagueStadiums', defaultValue: "Pick a stadium" })}</h6>
						<ul>
							{
								stadiums.map((stadium: Stadium) => {
									return (
										<li key={uniqid()}>
											<p onClick={() => handleStadiumClick(stadium)}>
												{stadium.stadiumName}
											</p>
										</li>
									)
								})
							}
						</ul>
					</div>
				</Col>

				<Col xs={5} md={6} lg={9}>
					<Row className="pt-3 pb-1 h-100">
						<Col xs={12} md={12} lg={4} className="d-flex flex-column justify-content-start">
							<ul className="selected-stadium-details-list mb-0">
								<li>
									<p>
										{t('name', { ns: 'LeagueStadiums', defaultValue: "Name" })}:
										<span>{selectedStadium ? selectedStadium.stadiumName : ''}</span>
									</p>
								</li>
								<li>
									<p>
										{t('city', { ns: 'LeagueStadiums', defaultValue: "City" })}:
										<span>{selectedStadium ? selectedStadium.city : ''}</span>
									</p>
								</li>
								<li>
									<p>
										{t('capacity', { ns: 'LeagueStadiums', defaultValue: "Capacity" })}:
										<span>{selectedStadium ? selectedStadium.capacity : ''}</span>
									</p>
								</li>
								<li>
									<p>
										{t('yearOpened', { ns: 'LeagueStadiums', defaultValue: "Year Opened" })}:
										<span>{selectedStadium ? selectedStadium.yearOpened : ''}</span>
									</p>
								</li>
								<li>
									<p>
										{t('homeTeam', { ns: 'LeagueStadiums', defaultValue: "Home Team" })}:
										<span>{selectedStadium ? selectedStadium.homeTeam : ''}</span>
									</p>
								</li>
							</ul>
						</Col>
						<Col lg={8} className="d-none d-lg-flex">
							<Image className="selected-stadium-image" src={selectedStadium ? getImageUrl('stadiums', selectedStadium.stadiumImage) : soccerField} alt={selectedStadium ? selectedStadium.stadiumName : 'Soccer Field'} fluid loading="lazy" />
						</Col>
					</Row>
				</Col>
				<Col xs={12} className="d-flex justify-content-center d-lg-none mt-3">
					<Image className="selected-stadium-image" src={selectedStadium ? getImageUrl('stadiums', selectedStadium.stadiumImage) : soccerField} alt={selectedStadium ? selectedStadium.stadiumName : 'Soccer Field'} fluid loading="lazy" />
				</Col>
			</Row>
		</StyledLeagueSection>
	)
}

export default LeagueStadiums