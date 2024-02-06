
import styled from '@emotion/styled'

import teams from '../../../data/teams.json'
import getImageUrl from '../../../utils/getImageUrl'

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
    return (
        <StyledRankingDisplay>
            <h5 className='fw-bold'>Series A</h5>
            <h5 className='fw-bold'>Current Ranking</h5>
            <hr />
            <ul>
                {
                    teams.slice(0, 10).map(team => {
                        return (
                            <li className='d-flex justify-content-between'>
                                <img className='team-logo' src={`${getImageUrl('teams', team.image)}`} alt={`${team.name} LOGO`} />
                                <span className="fw-bold ">{team.name}</span>
                                <span className="fw-bold">{team.ranking}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </StyledRankingDisplay>
    )
}

export default RankingDisplay;