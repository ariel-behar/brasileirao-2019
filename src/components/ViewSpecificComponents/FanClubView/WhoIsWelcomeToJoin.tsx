import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

import friendsPlayingVideoGames from '../../../assets/img/friends-playing-video-games.jpg'
import dogPlayingSoccer from '../../../assets/img/dog-playing-soccer.jpg'
import soccerFriends from '../../../assets/img/soccer-friends.jpg'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const thumbnails = [
    {
        title: i18next.t('thumbnails.thumbnail-1.title', {ns: 'WhoIsWelcomeToJoin', defaultValue: 'You and your friends are into video games...'}),
        imageSrc: friendsPlayingVideoGames
    },
    {
        title: i18next.t('WhoIsWelcomeToJoin:thumbnails.thumbnail-2.title', 'Your dog is an inseparate part of your team...'),
        imageSrc: dogPlayingSoccer
    },
    {
        title: i18next.t('WhoIsWelcomeToJoin:thumbnails.thumbnail-3.title', 'OR football is simply what you do and love...'),
        imageSrc: soccerFriends
    }
]

function WhoIsWelcomeToJoin() {
    const { t } = useTranslation('WhoIsWelcomeToJoin')



    return (
        <section style={{
            backgroundColor: '#e4efff',
            borderRadius: '30px',
            padding: '30px 0'
        }} className="my-5 shadow-sm">
            <h4 className="text-center fw-bold">{t('title', {ns: 'WhoIsWelcomeToJoin', defaultValue: 'Who Is Welcome To Join?'} )}</h4>
            <p className="text-center">{t('paragraph-1', {ns: 'WhoIsWelcomeToJoin', defaultValue: 'Our fan club is a MUST for people answering to ONE of the below criteria:'})}</p>

            <Row className='mt-5 g-0'>
                {
                    thumbnails.map((thumbnail, index) => {
                        return (
                            <Col key={index} className="col-12 col-md-4">
                                <Image src={thumbnail.imageSrc} alt={thumbnail.title} fluid />
                                <p className="text-center pt-3 fst-italic px-2">{thumbnail.title}</p>
                            </Col>
                        )
                    })
                }
            </Row>

            <p className="text-center">{t('paragraph-2', {ns: 'WhoIsWelcomeToJoin', defaultValue: 'Let it be clear...' } )}</p>
            <h4 className="text-center fw-bold text-uppercase">{t('paragraph-3', {ns: 'WhoIsWelcomeToJoin', defaultValue: 'We are looking for you!'})}</h4>

        </section>
    )
}

export default WhoIsWelcomeToJoin