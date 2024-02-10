import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import flagBrasil from '../../assets/img/flags/brazil.png'
import flagBritain from '../../assets/img/flags/britain.png'
import grassPattern from "../../assets/img/grass-patten.jpg"

function TranslationIcons() {
	const { i18n } = useTranslation()

	return (
		<>
			<div className='p-2 me-1' style={{
				backgroundImage: `url(${grassPattern})`,
				borderRadius: '20px',
				border: '2px solid #fff',
			}}>
				<motion.img
					whileHover={{ scale: 1.1 }}
					onClick={() => i18n.changeLanguage('pt')}
					style={{ cursor: 'pointer' }}
					className='mx-2'
					src={flagBrasil}
					alt="Brasilian Flag button"
				/>

				<motion.img
					whileHover={{ scale: 1.1 }}
					onClick={() => i18n.changeLanguage('en')}
					style={{ cursor: 'pointer' }}
					className='mx-2'
					src={flagBritain}
					alt="British Flag button"
				/>
			</div>
		</>
	)
}

export default TranslationIcons