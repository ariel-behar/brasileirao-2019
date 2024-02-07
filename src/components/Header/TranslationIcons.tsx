import flagBrasil from '../../assets/img/flags/brazil.jpg'
import flagBritain from '../../assets/img/flags/britain.jpg'

function TranslationIcons() {
  return (
    <>
        <img style={{cursor: 'pointer'}} className='mx-2' src={flagBrasil} alt="Brasilian Flag button" />
        <img style={{cursor: 'pointer'}} className='mx-2' src={flagBritain} alt="British Flag button" />
    </>
  )
}

export default TranslationIcons