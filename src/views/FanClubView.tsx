import soccerFans from '../assets/img/soccer-fans.jpg'
import stadiumFans from '../assets/img/stadium-fans.jpg'

import hasPageHeaderFooter from "../HOC/hasPageHeaderFooter"
import HelmetSEO from "../components/HelmetSEO"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import styled from '@emotion/styled'

function FanClubView() {
    return (
        <>
            <HelmetSEO title="FAN CLUB" description="Fan club page of the fictional website about the Brasileirao 2019 Soccer Championship" />

            <Container>
                <section className='px-md-5 py-md-5'>
                    <h3 className="text-center fw-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem optio temporibus repellat cumque nemo!</h3>

                    <Row className='mt-5 gx-5'>
                        <Col xs={12} md={4}>
                            <p style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore in illum velit ipsa a quasi distinctio vero facilis explicabo unde voluptas adipisci veritatis at, esse eos obcaecati laboriosam commodi voluptatem quo molestias sint, culpa nulla.</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <p style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore in illum velit ipsa a quasi distinctio vero facilis explicabo unde voluptas adipisci veritatis at, esse eos obcaecati laboriosam commodi voluptatem quo molestias sint, culpa nulla.</p>
                        </Col>
                        <Col xs={12} md={4}>
                            <p style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore in illum velit ipsa a quasi distinctio vero facilis explicabo unde voluptas adipisci veritatis at, esse eos obcaecati laboriosam commodi voluptatem quo molestias sint, culpa nulla.</p>
                        </Col>
                    </Row>
                </section>
            </Container>

            <Image style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                maxHeight: '500px',
                objectPosition: 'top'
            }} src={stadiumFans} alt="Stadium Fans" fluid />


        </>
    )
}

export default hasPageHeaderFooter(FanClubView, {
    viewTitle: 'Fan Club',
    pageHeaderImage: soccerFans,
    pageFooterImage: soccerFans
}) 