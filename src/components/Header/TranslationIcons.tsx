import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

import flagBrasil from '../../assets/img/flags/brazil.png'
import flagBritain from '../../assets/img/flags/britain.png'
import grassPattern from "../../assets/img/grass-patten.jpg"

const StyledImage = styled('img')`
	cursor: pointer;
	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}
`

function TranslationIcons() {
	const { i18n } = useTranslation()

	return (
		<>
			<div className='p-2 me-1' style={{
				backgroundImage: `url(${grassPattern})`,
				borderRadius: '20px',
				border: '2px solid #fff',
			}}>
				<StyledImage
					onClick={() => i18n.changeLanguage('pt')}
					className='mx-2'
					src={flagBrasil}
					alt="Brasilian Flag button"
				/>

				<StyledImage
					onClick={() => i18n.changeLanguage('en')}
					className='mx-2'
					src={flagBritain}
					alt="British Flag button"
				/>
			</div>
		</>
	)
}

export default TranslationIcons