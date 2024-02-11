import { useTranslation } from 'react-i18next'
import ticket from '../assets/img/backgrounds/ticket.jpg'

import hasPageHeaderFooter from "../HOC/hasPageHeaderFooter"
import ViewTitle from '../components/ViewTitle'
import HelmetSEO from "../components/HelmetSEO"

import Container from 'react-bootstrap/Container'
import TicketsForm from '../components/ViewSpecificComponents/TicketsView/TicketsForm'

function TicketsView() {
    const { t } = useTranslation('TicketsView')

    return (
        <>
            <HelmetSEO title="TICKETS" description="Tickets page of the fictional website about the Brasileirao 2019 Soccer Championship" />

            <ViewTitle viewTitle={t('viewTitle', {ns: 'TicketsView', defaultValue: "Tickets"})} />

            <Container style={{minHeight: '70vh'}}>
                <div className='pt-5 pb-3'>
                    <h3>{t('title', {ns: 'TicketsView', defaultValue: "Order Your Tickets With Ease"})}</h3>
                    <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas officia cumque beatae, alias rerum a eum repellendus accusantium recusandae.</p>
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
    backgroundImage: ticket,
})