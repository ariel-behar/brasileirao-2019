import Card from 'react-bootstrap/Card'
import getImageUrl from '../../../utils/getImageUrl'
import { Team } from './Teams'
import { useState } from 'react'

interface Props extends Team { }

function TeamCard({
    ...props
}: Props) {
    const [hovered, setHovered] = useState(false)

    const isHovered = () => {
        setHovered(prevState => !prevState)
    }

    return (
        <Card
            className={`w-100 h-100  ${hovered ? 'shadow' : ''}`}
            style={{ width: '18rem', transition: 'box-shadow 0.3s ease' }}
            onMouseEnter={isHovered}
            onMouseLeave={isHovered}
        >
            <Card.Img variant="top" src={getImageUrl('teams', props.image)} alt={`${props.name} Logo`} className='img-fluid p-2 p-md-3' loading='lazy' />

            <Card.Body className='flex-grow-1 d-flex flex-row justify-content-end align-items-end p-2 p-lg-3'>
                <Card.Text className='text-end'>
                    {props.name}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default TeamCard