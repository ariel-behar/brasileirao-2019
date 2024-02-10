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
                <p>{t('AboutLeague:paragraph-1')}</p>

                <p>{t('AboutLeague:paragraph-2')}</p>
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
                <p>{t('AboutLeague:paragraph-3')}</p>

                <p>{t('AboutLeague:paragraph-4')}</p>
            </Col>
        </Row>
    )
}

export default AboutLeague