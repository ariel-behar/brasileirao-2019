import { useTranslation } from 'react-i18next'

import flyingKick from '../../../assets/img/flying-kick.jpg'

function CompetitionFormat() {
    const { t } = useTranslation('CompetitionFormat')

    return (
        <section className="py-5" style={{
            backgroundImage: `url(${flyingKick})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
        }}>
            <h3 className="text-center mb-4">{t('CompetitionFormat:title')}</h3>
            <div className='p-3' style={{textAlign:'justify'}}>
                <p>{t('CompetitionFormat:paragraph-1')}</p>
                <div className="ps-4">
                    <p>{t('CompetitionFormat:paragraph-2')}</p>

                    <ul style={{ listStyleType: "circle" }}>
                        <li>{t('CompetitionFormat:list-1.list-item-1')}</li>
                        <li>{t('CompetitionFormat:list-1.list-item-2')}</li>
                        <li>{t('CompetitionFormat:list-1.list-item-3')}</li>
                        <li>{t('CompetitionFormat:list-1.list-item-4')}</li>
                    </ul>

                    <p>{t('CompetitionFormat:paragraph-3')}</p>

                    <ul style={{ listStyleType: "circle" }}>
                        <li>{t('CompetitionFormat:list-2.list-item-1')}</li>
                        <li>{t('CompetitionFormat:list-2.list-item-2')}</li>
                    </ul>

                    <p>{t('CompetitionFormat:paragraph-4')}</p>

                    <p>{t('CompetitionFormat:paragraph-5')}</p>
                </div>
            </div>
        </section>
    )
}

export default CompetitionFormat