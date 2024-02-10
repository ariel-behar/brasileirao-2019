import { useTranslation } from 'react-i18next'
import brasileiraoCup from '../../../assets/img/brasileirao-cup.png'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

function AboutLeague() {
    const { t} = useTranslation('AboutLeague')
    
    return (
        <Row as='section' className='pt-5'>
            <Col
                style={{ textAlign: 'justify' }}
                xs={{ span: 12, order: 1 }}
                md={{ span: 4, order: 1 }}
                lg={{ span: 3, offset: 1 }}
                className="p-4 d-flex flex-column justify-content-around ">
                <p>{t('paragraph-1', { ns: 'AboutLeague', defaultValue: "The \"Campeonato Brasileiro Série A\", commonly referred to as Brasileirão, is the Brazilian professional league for men's football clubs."})}</p>

                <p>{t('paragraph-2', {ns: "AboutLeague", defaultValue: "At the top of the Brazilian football league system, it is the country's primary football competition." })}</p>
            </Col>
            <Col
                xs={{ span: 6, offset: 3, order: 2 }}
                md={{ span: 4, offset: 0, order: 2 }}
                lg={{ span: 4 }}
                className="d-flex justify-content-center align-items-end">
                <Image src={brasileiraoCup} alt="Brasileirao Cup" fluid />
            </Col>
            <Col
                style={{ textAlign: 'justify' }}
                xs={{ span: 12, order: 3 }}
                md={{ span: 4, order: 3 }}
                lg={{ span: 3 }}
                className="p-4 d-flex flex-column justify-content-around ">
                <p>{t('paragraph-3', {ns: "AboutLeague", defaultValue: "The Campeonato Brasileiro is one of the strongest leagues in the world. It contains the most club world champion titles, and the second-most \"Copa Libertadores\" titles."})}</p>

                <p>{t('paragraph-4', {ns: "AboutLeague", defaultValue: "Brasileirão is the most-watched football league in the Americas and one of the world's most exposed broadcast in 155 nations."})}</p>
            </Col>
        </Row>
    )
}

export default AboutLeague