
import friendsPlayingVideoGames from '../../../assets/img/friends-playing-video-games.jpg'
import dogPlayingSoccer from '../../../assets/img/dog-playing-soccer.jpg'
import soccerFriends from '../../../assets/img/soccer-friends.jpg'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const thumbnails = [
    {
        title: 'You like to stay connected to the game at all times...',
        imageSrc: friendsPlayingVideoGames
    },
    {
        title: 'Your dog is an inseparate part of your team...',
        imageSrc: dogPlayingSoccer
    },
    {
        title: 'OR football is simply what you do and love...',
        imageSrc: soccerFriends
    }
]

function WhoIsWelcomeToJoin() {
    return (
        <section style={{
            backgroundColor: '#e4efff',
            borderRadius: '30px',
            padding: '30px 0'
        }} className="my-5 shadow">
            <h4 className="text-center fw-bold">Who Is Welcome To Join?</h4>
            <p className="text-center">Our fan club is a MUST for people answering to ONE of the below criteria:</p>

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

            <p className="text-center">Let it be clear...</p>
            <h4 className="text-center fw-bold">WE ARE LOOKING FOR YOU!</h4>

        </section>
    )
}

export default WhoIsWelcomeToJoin