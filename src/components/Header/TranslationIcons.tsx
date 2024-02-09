import { motion }from 'framer-motion'
import flagBrasil from '../../assets/img/flags/brazil.jpg'
import flagBritain from '../../assets/img/flags/britain.jpg'
import { useLanguageContext } from '../../contexts/languageContext'

function TranslationIcons() {
	const { changeAppLanguage } = useLanguageContext()

	return (
		<>
			<motion.img
				whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px rgb(134, 134, 134)'}}
				onClick={() => changeAppLanguage('pt')}
				style={{ cursor: 'pointer' }}
				className='mx-2'
				src={flagBrasil}
				alt="Brasilian Flag button"
			/>

			<motion.img
				whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px rgb(134, 134, 134)'}}
				onClick={() => changeAppLanguage('en')}
				style={{ cursor: 'pointer' }}
				className='mx-2'
				src={flagBritain}
				alt="British Flag button"
			/>
		</>
	)
}

export default TranslationIcons