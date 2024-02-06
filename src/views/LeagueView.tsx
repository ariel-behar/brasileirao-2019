import hasPageHeaderFooter from "../HOC/hasPageHeaderFooter"

import soccerField from '../assets/img/backgrounds/soccer-field.jpg'
import HelmetSEO from "../components/HelmetSEO"

function LeagueView() {
    return (
        <>
            <HelmetSEO title="LEAGUE" description="League page of the fictional website about the Brasileirao 2019 Soccer Championship" />
            <div>LeagueView</div>
        </>
    )
}

export default hasPageHeaderFooter(LeagueView, {
    viewTitle: 'LEAGUE',
    pageHeaderImage: soccerField,
    pageHeaderImagePosition: 'center',
    pageFooterImage: soccerField,
    pageFooterImagePosition: 'center',
}) 