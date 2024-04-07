import { NavLink } from 'react-router-dom'

import brasileraoLogo from '../assets/img/logos/brasileirao-logo.png'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function ErrorView() {
	return (
		<>
			<div className="h-100 w-100 d-flex justify-content-center align-items-center">
				<Container>
					<Row className='g-5'>
						<Col xs={12} md={{span: 2, offset: 3}} className='text-center'>
							<Image src={brasileraoLogo} alt="Brasileirão logo" fluid />
						</Col>
						<Col xs={12} md={4} className='d-flex flex-column justify-content-center text-center'>
							<h3 className='text-danger'>Oops... 404 Error </h3>
							<h4 className='mb-3'>(Page not found)</h4>
							<NavLink to='/' >
								<Button variant='outline-primary text-uppercase' size='sm'>
									Click here to go back home
								</Button>
							</NavLink>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}

export default ErrorView