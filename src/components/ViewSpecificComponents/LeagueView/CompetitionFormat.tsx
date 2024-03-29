import { useTranslation } from 'react-i18next'

import flyingKick from '../../../assets/img/flying-kick.jpg'

function CompetitionFormat() {
    const { t } = useTranslation('CompetitionFormat')

    return (
        <section className="py-5" style={{
            backgroundImage: `url(${flyingKick})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
        }}>
            <h3 className="text-center mb-4">{t('title', { ns: "CompetitionFormat", defaultValue: "Competition Format"})}</h3>
            <div className='p-md-3' style={{textAlign:'justify'}}>
                <p>{t('paragraph-1', { ns: "CompetitionFormat", defaultValue: "There are 20 clubs in the Brasileirão. During the course of a season, each club plays the others twice, once at their home stadium and once at that of their opponents', for a total of 38 games. Teams receive three points for a win and one point for a draw. No points are awarded for a loss. Teams are ranked by total points, victories, goal difference, and goals scored. At the end of each season, the club with the most points is crowned champion. If points are equal between two or more clubs, the rules are:"})}</p>
                <div className="ps-4">
                    <p>{t('paragraph-2', { ns: "CompetitionFormat", defaultValue: "If the tie is between more than two clubs, not competing for the national title or relegation, then the tie is broken using the games the clubs have played against each other in the following way:"})}</p>

                    <ul style={{ listStyleType: "circle" }}>
                        <li>{t('list-1.list-item-1', { ns: "CompetitionFormat", defaultValue: "most games won"})}</li>
                        <li>{t('list-1.list-item-2', { ns: "CompetitionFormat", defaultValue: "total goal difference"})}</li>
                        <li>{t('list-1.list-item-3', { ns: "CompetitionFormat", defaultValue: "total goals scored"})}</li>
                        <li>{t('list-1.list-item-4', { ns: "CompetitionFormat", defaultValue: "head-to-head record (with the away goals rule in effect if only two clubs are taken into account)"})}</li>
                    </ul>

                    <p>{t('paragraph-3', { ns: "CompetitionFormat", defaultValue: "If the tie is still not broken, the winner will be determined by Fair Play scales:"})}</p>

                    <ul style={{ listStyleType: "circle" }}>
                        <li>{t('list-2.list-item-1', { ns: "CompetitionFormat", defaultValue: "fewest yellow cards"})}</li>
                        <li>{t('list-2.list-item-2', { ns: "CompetitionFormat", defaultValue: "fewest red cards"})}</li>
                    </ul>

                    <p>{t('paragraph-4', { ns: "CompetitionFormat", defaultValue: "If there is a tie for the championship, for relegation, or for qualification to other competitions, the Fair Play scales will not be taken into account; a play-off match at a neutral venue decides rank. Otherwise, a drawing of lots will determine the final positions."})}</p>
                </div>

                <p>{t('paragraph-5', { ns: "CompetitionFormat", defaultValue: "A system of promotion and relegation exists between the Brasileirão and the Série B. The four lowest placed teams in the Brasileirão are relegated to Série B, and the top four teams from the Série B promoted to the Brasileirão."})}</p>
            </div>
        </section>
    )
}

export default CompetitionFormat