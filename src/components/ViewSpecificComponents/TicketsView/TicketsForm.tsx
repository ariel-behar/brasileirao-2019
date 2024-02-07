import { useState } from 'react'

import uniqid from 'uniqid'

import events from '../../../data/events.json'

import { Event } from '../../Cards/FootballMatchCard'
import TicketsOrderSuccess from './TicketsOrderSuccess'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function TicketsForm() {
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [selectedEvent, setSelectedEvent] = useState<Event>(events[0])
    const [selectedQuantity, setSelectedQuantity] = useState<number>(1)
    const [orderSuccess, setOrderSuccess] = useState<boolean>(false)

    const handleChangeSelectedEvent = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let currentEventId: number = Number(e.target.value);
        let currentEvent: Event = events.find((event: Event) => event._id === currentEventId) as Event

        setSelectedEvent(() => currentEvent)
    }

    const handleChangeSelectedQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let currentQuantity: number = Number(e.target.value);

        setSelectedQuantity(() => currentQuantity)
    }

    const calculatePrice = () => {
        let price: number = selectedEvent.price * selectedQuantity
        setTotalPrice(() => price)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setOrderSuccess(() => true)
    }

    return (
        <>
            {
                orderSuccess ? <TicketsOrderSuccess /> : (
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col xs={12} lg={6} >
                                <Form.Label htmlFor="name" className='fw-bold'>Select your event from the list:</Form.Label>
                                <Form.Select onChange={handleChangeSelectedEvent} defaultValue={selectedEvent._id} aria-label="event-select" id="event-select">
                                    {
                                        events.map((event: Event) => {
                                            return (
                                                <option key={uniqid()} value={event._id} className='my-1'>${event.price} - {event.date} - {event.teamOne} VS {event.teamTwo} (Football Match)</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                            </Col>
                            <Col xs={12} lg={3}>
                                <Form.Label htmlFor="tickets-quantity" className='fw-bold'>Select your event from the list:</Form.Label>
                                <Form.Select onChange={handleChangeSelectedQuantity} defaultValue={selectedQuantity} aria-label="tickets-quantity" id="tickets-quantity">
                                    {
                                        Array(9).fill('').map((el, index) => {
                                            return (
                                                <option key={uniqid()} value={index + 1} className='my-1'>{index + 1}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                            </Col>
                            <Col xs={12} lg={3} className='d-flex flex-column'>
                                <Button variant="success" className='mt-4' onClick={calculatePrice}>CALCULATE PRICE</Button>
                                <p className='mt-3'>Total: <span className='fw-bold'>{totalPrice ? totalPrice : `$${totalPrice.toFixed(2)}`}</span></p>

                                <Button variant="primary" type="submit" className='mt-4' disabled={totalPrice ? false : true}>ORDER NOW</Button>
                            </Col>
                        </Row>
                    </form>
                )
            }
        </>
    )
}

export default TicketsForm