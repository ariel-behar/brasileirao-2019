
import styled from '@emotion/styled'

import teams from '../../../data/teams.json'
import getImageUrl from '../../../utils/getImageUrl'
import uniqid from 'uniqid'
import { useTranslation } from 'react-i18next'

const StyledRankingDisplay = styled('div')`
    background-color: rgba(42,83,26,0.6);
    padding: 20px;
    border-radius: 20px;
    border: 3px solid white;

    color: white;

    ul {
        list-style: none;
        padding-left: 0;
        li {
            margin: 8px 0;
            .team-logo {
                max-height: 30px;
            }
        }
        
    }
`

function RankingDisplay() {
    const { t } = useTranslation('RankingDisplay')

    return (
        <StyledRankingDisplay>
            <h4 >{t('title-series', {ns: "RankingDisplay", defaultValue: "Series A" })}</h4>
            <h4 >{t('title-ranking', {ns: "RankingDisplay", defaultValue: "Current Ranking" })}</h4>
            <hr />
            <ul>
                {
                    teams.slice(0, 10).map(team => {
                        return (
                            <li className='d-flex justify-content-between' key={uniqid()}>
                                <img className='team-logo' src={`${getImageUrl('teams', team.image)}`} alt={`${team.name} LOGO`} />
                                <span >{team.name}</span>
                                <span >{team.ranking}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </StyledRankingDisplay>
    )
}

export default RankingDisplay;