import ticket from '../assets/img/ticket.jpg'

import hasPageHeaderFooter from "../HOC/hasPageHeaderFooter"
import HelmetSEO from "../components/HelmetSEO"

import Container from 'react-bootstrap/Container'
import TicketsForm from '../components/ViewSpecificComponents/TicketsView/TicketsForm'

function TicketsView() {
    return (
        <>
            <HelmetSEO title="TICKETS" description="Tickets page of the fictional website about the Brasileirao 2019 Soccer Championship" />

            <Container style={{minHeight: '50vh'}}>
                <div className='my-5'>
                    <h3>Order Your Tickets With Ease</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas officia cumque beatae, alias rerum a eum repellendus accusantium recusandae.</p>
                </div>

                <section style={{
                    backgroundColor: '#e4efff',
                    borderRadius: '20px',
                    padding: '30px',
                    height: '100%'
                }} className="my-5 shadow">
                    <TicketsForm />
                </section>


            </Container>
        </>
    )
}

export default hasPageHeaderFooter(TicketsView, {
    viewTitle: 'Tickets',
    pageHeaderImage: ticket,
    pageFooterImage: ticket
})