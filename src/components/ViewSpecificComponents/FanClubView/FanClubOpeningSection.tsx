import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function FanClubOpeningSection() {
    return (
        <section className='px-md-5 py-md-5'>
            <h3 className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem optio temporibus repellat cumque nemo!</h3>

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
    )
}

export default FanClubOpeningSection